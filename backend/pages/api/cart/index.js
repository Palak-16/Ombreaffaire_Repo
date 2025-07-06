import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { getUserFromToken } from "../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).end();

  const user = await getUserFromToken(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });
 

const { data, error } = await supabase
  .from("user_cart")
  .select(`
    product_size_color_id,
    quantity,
    product_size_colors (
      product_id,
      size,
      color_id,
      colors (
        label,
        hex
      ),
      products (
        name,
        price,
        main_image_url
      )
    )
  `);
   const { data: imagesData } = await supabase
  .from("product_color_images")
  .select("product_id, color_id, image_urls");

if (error) {
  console.error("Supabase error:", error.message); // 👈 Add this
  return res.status(500).json({ error: error.message });
}
if (error) {
  console.error("Supabase error:", error.message);
  return res.status(500).json({ error: error.message });
}

const items = data.map((entry) => {
  const psc = entry.product_size_colors;

  const imageEntry = imagesData.find(
    (img) =>
      img.product_id === psc.product_id && img.color_id === psc.color_id
  );

  return {
    id: psc.product_id,
    size: psc.size,
    color: psc.colors?.label,
    color_hex: psc.colors?.hex,
    quantity: entry.quantity,
    name: psc.products?.name,
    price: psc.products?.price,
    image: imageEntry?.image_urls?.[0] || psc.products?.main_image_url || "",
  };
});

res.status(200).json({ items });


}
