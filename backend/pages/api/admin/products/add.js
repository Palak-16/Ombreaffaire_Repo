import supabase from "../../../../lib/supabaseClient.js";
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
  } = req.body;

  if (!name || !price || !category) {
    return res
      .status(400)
      .json({ error: "Name, price and category are required" });
  }

  const slug = slugify(name, { lower: true, strict: true });

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

  if (error) return res.status(500).json({ error: "Failed to create product" });

  // Insert images
  console.log("Images to insert:", images);

  // Insert images
  if (images?.length > 0) {
    const imageRows = images.map((url) => ({
      product_id: product.id,
      image_url: url,
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
    const colorRows = colors.map((c) => ({ product_id: product.id, color: c }));
    await supabase.from("product_colors").insert(colorRows);
  }

  return res
    .status(200)
    .json({ message: "Product created", productId: product.id });
}
