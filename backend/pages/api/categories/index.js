import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
  const { data, error } = await supabase
    .from('categories')
    .select('id, name, slug, image_url');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ categories: data });
}
