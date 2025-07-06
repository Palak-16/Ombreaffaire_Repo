import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { getUserFromToken } from "../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method !== "POST") return res.status(405).end();

  const user = await getUserFromToken(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { product_size_color_id, quantity } = req.body;

  const { error } = await supabase
    .from('user_cart')
    .upsert({
      user_id: user.id,
      product_size_color_id,
      quantity,
    })
    .eq('user_id', user.id)
    .eq('product_size_color_id', product_size_color_id);

   if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to add to cart' });
  }
  res.status(200).json({ success: true});
}
