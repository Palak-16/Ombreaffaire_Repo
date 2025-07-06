import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { getUserFromToken } from '../../../lib/auth/getUserFromToken';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method !== 'PATCH') return res.status(405).end();

  const user = await getUserFromToken(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { product_size_color_id, quantity } = req.body;

  if (!product_size_color_id || typeof quantity !== 'number') {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const { error } = await supabase
    .from('user_cart')
    .update({ quantity })
    .match({
      user_id: user.id,
      product_size_color_id,
    });

  if (error) {
    console.error('DB Update Error:', error);
    return res.status(500).json({ error: 'Failed to update quantity' });
  }

  return res.status(200).json({ success: true });
}
