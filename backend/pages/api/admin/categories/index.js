import supabase from '../../../../lib/supabaseClient';
import cors, { runMiddleware } from "../../../../lib/cors";

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ categories: data });
  }

  return res.status(405).end(); // Method Not Allowed
}
