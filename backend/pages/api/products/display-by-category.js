import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { category } = req.query;

  // Step 1: Get category name from slug
const { data: cat, error: catError } = await supabase
  .from("categories")
  .select("id, name")
  .eq("slug", category)
  .single();


  if (catError || !cat)
    return res.status(404).json({ error: "Category not found" });

  // Step 2: Fetch products with sizes and joined color labels
  const { data: products, error } = await supabase
    .from("products")
.select(`
  *,
  product_size_colors:product_size_colors!product_size_colors_product_id_fkey(
    size,
    color:colors!product_size_colors_color_id_fkey(label)
  ),
  product_color_images:product_color_images!product_color_images_product_id_fkey(
    image_urls,
    main_index
  )
`)
    .eq("category", cat.name);

  if (error) {
    console.error("Products fetch failed:", error.message);
    return res.status(500).json({ error: error.message });
  }

  // Step 3: Transform response
const transformed = products.map((product) => {
  const sizes = product.product_size_colors?.map((p) => p.size) || [];

  const colors = [
    ...new Set(
      (product.product_size_colors || [])
        .map((p) => p.color?.label)
        .filter(Boolean)
    ),
  ];

  let mainImage = null;
  if (product.product_color_images?.length > 0) {
    const imageSet = product.product_color_images[0]; // pick first color set
    if (imageSet.image_urls?.length > 0) {
      mainImage = imageSet.image_urls[imageSet.main_index ?? 0] || imageSet.image_urls[0];
    }
  }

  return {
    ...product,
    sizes,
    colors,
    main_image_url: mainImage, // ✅ attach this so frontend can use
  };
});


res.status(200).json({ products: transformed });
}