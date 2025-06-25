import supabase from '../../../lib/supabaseClient'
import cors, { runMiddleware } from '../../../lib/cors'


export default async function handler(req, res) {
  await runMiddleware(req, res, cors)

  const { tab } = req.query

  let query = supabase.from('products').select('*')

  if (tab === 'featured') {
    query = query.eq('is_featured', true)
  } else if (tab === 'new-arrivals') {
    query = query.order('created_at', { ascending: false }).limit(10)
  } else if (tab === 'best-sellers') {
    query = query.order('inventory', { ascending: true }).limit(10) // example logic
  }

  const { data, error } = await query

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json({ products: data })
}
