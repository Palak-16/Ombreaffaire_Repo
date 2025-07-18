import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from '../../../../lib/cors';
import { getUserFromToken } from "../../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const user = await getUserFromToken(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  const { id } = req.query;

  // update
  if (req.method === "PATCH") {
    const updates = { ...req.body, updated_at: new Date() };
    const { data, error } = await supabase
      .from("addresses")
      .update(updates)
      .eq("id", id)
      .eq("user_id", user.id)
      .select("*")
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // delete
  if (req.method === "DELETE") {
    const { error } = await supabase
      .from("addresses")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(204).end();
  }

  res.setHeader("Allow", ["PATCH", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}