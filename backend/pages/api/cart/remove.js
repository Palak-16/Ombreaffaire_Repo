import supabase from '../../../lib/supabaseClient';
import { getUserFromToken } from '../../../lib/auth/getUserFromToken';
import cors, { runMiddleware } from '../../../lib/cors';

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
  if (req.method !== "DELETE") return res.status(405).end();

  const user = await getUserFromToken(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { product_size_color_id } = req.body;
  console.log("Received product_size_color_id:", product_size_color_id);

  if (!product_size_color_id) {
    return res.status(400).json({ error: "Missing product_size_color_id" });
  }

  const { error } = await supabase
    .from("user_cart")
    .delete()
    .eq("user_id", user.id)
    .eq("product_size_color_id", product_size_color_id);

  if (error) {
    console.error("Supabase error:", error.message);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ success: true });
}