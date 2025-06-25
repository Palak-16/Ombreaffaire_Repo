import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { id } = req.query;

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 1. Fetch product
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // 2. Fetch color data (join product_colors.color_id → colors.id)
  const { data: colorData, error: colorError } = await supabase
    .from("product_colors")
    .select("color:colors(id, label, hex)")
    .eq("product_id", id);

  const colors = (colorData || []).map((c) => ({
  id: c.color.id,
  name: c.color.label,
  value: c.color.hex,
}));


  // 3. Fetch size + inventory data
  const { data: sizeColorData } = await supabase
    .from("product_size_colors")
    .select("size, inventory")
    .eq("product_id", id);

  const sizes = (sizeColorData || []).map((row) => ({
    size: row.size,
    inventory: row.inventory,
  }));

  // 4. Fetch image data (array of image URLs)
  // Build map from color_id to hex (used on frontend)
// 4. Fetch image data (color-specific)
const { data: imageData, error: imageError } = await supabase
  .from("product_color_images")
  .select("color_id, image_urls")
  .eq("product_id", id);

if (imageError) {
  console.error("Image fetch error:", imageError);
}

// Build map from color_id to hex (used on frontend)
const idToHexMap = {};
colors.forEach((c) => {
  idToHexMap[c.id] = c.value;
});

const imagesByColor = {};
imageData?.forEach(({ color_id, image_urls }) => {
  const hex = idToHexMap[color_id];
  if (hex) {
    imagesByColor[hex] = image_urls;
  }
});



  // 5. Final response object
  return res.status(200).json({
    ...product,
    imagesByColor,
    colors: colors.map(({ id, ...rest }) => rest),
    sizes,
    features: ["Handmade", "Washable", "Sustainable"], // Optional: replace with real DB field later
  });
}
