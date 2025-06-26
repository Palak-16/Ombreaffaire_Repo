import supabase from '../../../lib/supabaseClient'
import cors, { runMiddleware } from '../../../lib/cors'


export default async function handler(req, res) {
  await runMiddleware(req, res, cors)

  const { tab } = req.query

  let queryBuilder = supabase.from('products').select('*')

  if (tab === 'featured') {
    queryBuilder = queryBuilder.eq('is_featured', true)
  } else if (tab === 'new') {
    queryBuilder = queryBuilder.eq('new_arrival', true).not('new_arrival', 'is', null)
  } else if (tab === 'bestsellers') {
    queryBuilder = queryBuilder.eq('best_seller', true).not('best_seller', 'is', null).limit(10) // example logic
  }

  const { data, error } = await queryBuilder

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json({ products: data })
}
