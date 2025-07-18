import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";
import { getUserFromToken } from "../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
     // CORS
  await runMiddleware(req, res, cors);
  // only allow DELETE
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // auth
  const user = await getUserFromToken(req);
  if (!user) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  // delete *all* this user’s cart_items
  const { error } = await supabase
    .from("user_cart")
    .delete()
    .eq("user_id", user.id);

  if (error) {
    console.error("Supabase error clearing cart:", error);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ success: true });
}
