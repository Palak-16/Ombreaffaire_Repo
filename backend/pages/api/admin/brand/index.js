import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { method } = req;

  if (method === "GET") {
    const { data, error } = await supabase
      .from("products")
      .select("brand")
      .not("brand", "is", null);

    if (error) return res.status(500).json({ error: "Failed to fetch brands" });

    const uniqueBrands = Array.from(
      new Set(data.map((item) => item.brand).filter(Boolean))
    );
    return res.status(200).json({ brands: uniqueBrands });
  }

  if (method === "POST") {
    const { brand } = req.body;
    if (!brand) return res.status(400).json({ error: "Brand is required" });

    // Check if the brand already exists
    const { data, error: checkError } = await supabase
      .from("products")
      .select("brand")
      .ilike("brand", brand.trim().toLowerCase());

    if (checkError)
      return res.status(500).json({ error: "Failed to check brand" });

    if (data.length === 0) {
      // Add a dummy product to record the new brand for listing
      const { error: insertError } = await supabase.from("products").insert({
        name: "Temp Brand Placeholder",
        slug: "temp-" + Math.random().toString(36).substring(2),
        sku: "TEMP-" + Date.now(),
        description: "<p>Temporary entry to record new brand.</p>",
        category: "Uncategorized",
        brand: brand.trim().toLowerCase(),
        price: 0,
        published: false,
      });

      if (insertError)
        return res.status(500).json({ error: "Failed to save new brand" });
    }

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
