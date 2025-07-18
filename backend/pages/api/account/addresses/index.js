
import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../../lib/cors";
import { getUserFromToken } from "../../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
  // 1) CORS
  await runMiddleware(req, res, cors);

  // 2) auth
  const user = await getUserFromToken(req);
  console.log("incoming user:", user);
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  // 3a) list
  if (req.method === "GET") {
    // console.log('incoming user:', user);
    const { data, error } = await supabase
      .from("addresses")
      .select("*")
      .eq("user_id", user.id)
      .order("is_default", { ascending: false })
      .order("label", { ascending: true });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  }

  // 3b) create
  if (req.method === "POST") {
    const payload = {
      ...req.body,
      user_id: user.id,
      is_default: req.body.is_default ?? false,
    };
    const { data, error } = await supabase
      .from("addresses")
      .insert(payload)
      .select("*")
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
