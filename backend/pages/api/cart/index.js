import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { getUserFromToken } from "../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    if (req.method === "OPTIONS") return res.status(200).end();
     // ─── 1) IS-IN-CART BRANCH ────────────────────────────────
  // if all three params are present, just do a quick lookup
  if (
    req.method === "GET" &&
    req.query.product &&
    req.query.size &&
    req.query.color
  ) {
    console.log("🔎 is-in-cart check", {
  product: req.query.product,
  size: req.query.size,
  color: req.query.color
});

    const user = await getUserFromToken(req);
    if (!user) return res.status(200).json({ inCart: false });

    // 1️⃣ look up the colour ID from its HEX
    const { data: colorRow } = await supabase
      .from("colors")
      .select("id")
      .eq("hex", req.query.color)
      .limit(1)
      .single();
    if (!colorRow) return res.status(200).json({ inCart: false });

    // 2️⃣ find the exact PSC row
    const { data: pscRow } = await supabase
      .from("product_size_colors")
      .select("id")
      .eq("product_id", req.query.product)
      .eq("size", req.query.size)
      .eq("color_id", colorRow.id)
      .limit(1)
      .single();
      
    console.log("PSC Row:", pscRow); // Debugging line to check pscRow
    if (!pscRow) return res.status(200).json({ inCart: false });

    // 3️⃣ check the user_cart table
    const { data: cartRow } = await supabase
      .from("user_cart")
      .select("product_size_color_id")
      .eq("user_id", user.id)
      .eq("product_size_color_id", pscRow.id)
      .limit(1)
      .single();
    
    return res.status(200).json({ inCart: !!cartRow });
  }

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
console.log("Cart items:", items); // Debugging line to check items
res.status(200).json({ items });


}
