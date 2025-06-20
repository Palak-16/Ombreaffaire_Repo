import supabase from "../../../../lib/supabaseClient";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const {
    name,
    sku,
    description,
    category,
    brand,
    material,
    weight,
    price,
    compare_price,
    cost,
    inventory,
    track_inventory,
    published,
    sizes,
    colors,
    images,
    mainImageIndex,
    sizeChart,
  } = req.body;

  if (
    !name ||
    !price ||
    !category ||
    !sku ||
    !description ||
    !brand ||
    !images ||
    !sizes ||
    !colors
  ) {
    return res.status(400).json({ error: "Fill the Required Fields!" });
  }

  const slug = slugify(name, { lower: true, strict: true });

  console.log("📦 Final product payload:", {
    name,
    slug,
    sku,
    description,
    category,
    brand,
    material,
    weight,
    price,
    compare_price,
    cost,
    inventory,
    track_inventory,
    published,
  });

  const { data: product, error } = await supabase
    .from("products")
    .insert({
      id: uuidv4(),
      name,
      slug,
      sku,
      description,
      category,
      brand,
      material,
      weight,
      price,
      compare_price,
      cost,
      inventory,
      track_inventory,
      published,
    })
    .select()
    .single();

  if (error) {
    console.error("Product insert error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Failed to create product" });
  }

  // Insert images
  console.log("Images to insert:", images);

  // Insert images
  if (images?.length > 0) {
    const imageRows = images.map((url, index) => ({
      product_id: product.id,
      image_url: url,
      is_main: index === mainImageIndex, // ✅ true for selected image
    }));

    const { error: imageInsertError } = await supabase
      .from("product_images")
      .insert(imageRows);

    if (imageInsertError) {
      console.error("Error inserting images:", imageInsertError);
      return res.status(500).json({ error: "Failed to insert product images" });
    }
  }

  // Insert sizes
  if (sizes?.length > 0) {
    const sizeRows = sizes.map((s) => ({ product_id: product.id, size: s }));
    await supabase.from("product_sizes").insert(sizeRows);
  }

  // Insert colors
  if (colors?.length > 0) {
    const colorRows = colors.map((color_id) => ({
      product_id: product.id,
      color_id,
    }));
    await supabase.from("product_colors").insert(colorRows);
  }
  if (sizeChart && brand) {
    const sizeChartRows = sizeChart.map((row) => ({
      brand,
      size: row.size,
      uk: row.uk,
      bust: row.bust,
      waist: row.waist,
      hip: row.hip,
    }));

    await supabase.from("size_charts").insert(sizeChartRows);
  }

  // Insert variants into product_size_colors table
  if (req.body.variants?.length > 0) {
    const variantRows = req.body.variants.map((variant) => ({
      product_id: product.id,
      size: variant.size,
      color_id: variant.color,
      sku: variant.sku,
      inventory: variant.inventory,
    }));

    const { error: variantError } = await supabase
      .from("product_size_colors")
      .insert(variantRows);

    if (variantError) {
      console.error("Failed to insert variants:", variantError);
      return res.status(500).json({ error: "Failed to insert variants" });
    }
  }

  return res
    .status(200)
    .json({ message: "Product created", productId: product.id });
}
