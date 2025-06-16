import supabase from "../../../../lib/supabaseClient"; // adjust path if needed
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  
   // ✅ Handle OPTIONS preflight request first
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(200).end();
  }
  
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  try {
    // Step 1: Delete child data
    await supabase.from("product_colors").delete().eq("product_id", id);
    await supabase.from("product_sizes").delete().eq("product_id", id);
    await supabase.from("product_images").delete().eq("product_id", id);

    // Step 2: Delete main product
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;

    return res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error("Delete error:", err);
    return res.status(500).json({ error: "Failed to delete product" });
  }
}
