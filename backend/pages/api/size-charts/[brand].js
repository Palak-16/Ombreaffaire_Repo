import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { brand } = req.query;
  if (!brand) return res.status(400).json({ error: "brand is required" });

  // pull the JSONB chart_data for that brand
  const { data, error } = await supabase
    .from("size_charts")
    .select("chart_data")
    .eq("brand", brand)
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data.chart_data);
}
