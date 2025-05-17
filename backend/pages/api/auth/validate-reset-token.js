import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  const { data, error } = await supabase
    .from('password_resets')
    .select('*')
    .eq('token', token)
    .single();

  if (!data || error) {
    return res.status(400).json({ error: 'Invalid token' });
  }

  const now = new Date();
  const expiresAt = new Date(data.expires_at+ 'Z'); // Force UTC parsing

  if (expiresAt < now) {
    return res.status(410).json({ error: 'Token has expired' });
  }

  return res.status(200).json({ valid: true });
}
