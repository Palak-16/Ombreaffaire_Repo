import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { method } = req;

  if (method === "POST") {
    const { brand, chart_data } = req.body;

    if (!brand || !chart_data) {
      return res
        .status(400)
        .json({ error: "Brand and chart_data are required" });
    }

    try {
      const { data, error } = await supabase
        .from("size_charts")
        .upsert([{ brand, chart_data }], { onConflict: "brand" });

      if (error) throw error;

      return res.status(200).json({ message: "Size chart saved", data });
    } catch (err) {
      console.error("Size chart save error:", err);
      return res.status(500).json({ error: "Failed to save size chart" });
    }
  }

  if (method === "GET") {
    const brand =  req.query.brand?.trim().toLowerCase();
    if (!brand) {
      return res.status(400).json({ error: "Brand is required" });
    }

    try {
      const { data, error } = await supabase
        .from("size_charts")
        .select("chart_data")
        .eq("brand", brand)
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      return res.status(200).json({ sizeChart: data.chart_data || [] });
    } catch (err) {
      console.error("Size chart fetch error:", err);
      return res.status(500).json({ error: "Failed to fetch size chart" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
