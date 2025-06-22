import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
 

  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const { data, error } = await supabase
    .from("products")
    .select("id, sku, name, slug, category, price, inventory, published, main_image_url")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: "Failed to fetch products" });

  const formatted = data.map((p) => ({
    id: p.id,
    name: p.name,
    image: p.main_image_url || "/placeholder.svg",
    category: p.category,
    price: `₹${parseFloat(p.price).toFixed(2)}`,
    stock: p.inventory,
    sku: p.sku,
    status:
      p.inventory === 0
        ? "Out of Stock"
        : p.inventory < 5
        ? "Low Stock"
        : "In Stock",
  }));

  return res.status(200).json({ products: formatted });
}
