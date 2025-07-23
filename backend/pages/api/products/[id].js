import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  // ————————————————
  // 0) Peel off the real product UUID from the composite key
  // composite looks like "productUuid-colorUuid"
  let composite = req.query.id;
  if (Array.isArray(composite)) composite = composite[0];
  if (typeof composite !== "string" || composite.length < 36) {
    return res.status(400).json({ error: "Invalid product key" });
  }
  // first 36 chars = the real product ID
  const productId = composite.substring(0, 36);
  // (optional) const colorId = composite.substring(37);

  // ————————————————
  // CORS preflight
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

  // 1. Fetch product by its real ID
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)         // <-- use productId, not the composite
    .single();

  if (error || !product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // 2. Fetch color data for that product
  const { data: colorData, error: colorError } = await supabase
    .from("product_colors")
    .select("color:colors(id, label, hex)")
    .eq("product_id", productId); // <-- use productId

  const colors = (colorData || []).map((c) => ({
    id:    c.color.id,
    name:  c.color.label,
    value: c.color.hex,
  }));

  // 3. Fetch size + inventory data
  const { data: sizeColorData } = await supabase
    .from("product_size_colors")
    .select("size, inventory")
    .eq("product_id", productId); // <-- use productId

  const sizes = (sizeColorData || []).map((row) => ({
    size:      row.size,
    inventory: row.inventory,
  }));

  // 4. Fetch image data (color-specific)
  const { data: imageData } = await supabase
    .from("product_color_images")
    .select("color_id, image_urls, main_index")
    .eq("product_id", productId); // <-- use productId

  // Build lookup table: color_id → hex value
  const idToHexMap = {};
  colors.forEach((c) => {
    idToHexMap[c.id] = c.value;
  });

  // Map images by hex, pick main image
  const imagesByColor     = {};
  const mainImageByColor  = {};
  imageData?.forEach(({ color_id, image_urls, main_index }) => {
    const hex = idToHexMap[color_id];
    if (hex) {
      imagesByColor[hex]    = image_urls;
      mainImageByColor[hex] = image_urls?.[main_index] || image_urls?.[0] || null;
    }
  });

  // 5. Return a full object
  return res.status(200).json({
    ...product,
    imagesByColor,
    mainImageByColor,
    colors: colors.map(({ id, ...rest }) => rest),
    sizes,
    features: ["Handmade", "Washable", "Sustainable"], // placeholder
  });
}
