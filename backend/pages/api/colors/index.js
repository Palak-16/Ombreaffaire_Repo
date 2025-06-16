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
    const { data, error } = await supabase
      .from("colors")
      .insert({ label, hex })
      .select()
      .single();
    if (error) return res.status(500).json({ error: "Failed to add color" });
    return res.status(200).json({ color: data });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
