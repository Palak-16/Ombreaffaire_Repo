import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === "GET") {
    const { data, error } = await supabase.from("colors").select("*");
    if (error) return res.status(500).json({ error: "Failed to fetch colors" });
    return res.status(200).json({ colors: data });
  }

  if (req.method === "POST") {
    const { label, hex } = req.body;

    if (!label || !hex) {
      return res.status(400).json({ error: "Label and hex are required" });
    }

    const normalizedHex = hex.trim().toLowerCase();
    const normalizedLabel = label.trim();

    // Check if a color with this hex (case-insensitive) already exists
    const { data: existing, error: fetchError } = await supabase
      .from("colors")
      .select("*")
      .ilike("hex", normalizedHex);

    if (fetchError) {
      return res.status(500).json({ error: "Failed to check existing colors" });
    }

    if (existing && existing.length > 0) {
      return res
        .status(409)
        .json({ error: "Color with this hex already exists" });
    }

    // Insert the new color with normalized hex
    const { data, error } = await supabase
      .from("colors")
      .insert({ label: normalizedLabel, hex: normalizedHex })
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: "Failed to add color" });
    }

    return res.status(200).json({ color: data });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
