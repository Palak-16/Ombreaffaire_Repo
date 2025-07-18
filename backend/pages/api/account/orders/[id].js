import supabase from "../../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../../lib/cors";
import { getUserFromToken } from "../../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors)
  const user = await getUserFromToken(req)
  if (!user) return res.status(401).json({ error: 'Not authenticated' })

  const { id } = req.query
  const { data, error } = await supabase
    .from('orders')
    .select(`*,
             order_items(
               product_size_colors!inner(
                 product:products(name, main_image_url)
               ),
               quantity,
               unit_price
             )`)
    .eq('user_id', user.id)
    .eq('id', id)
    .single()

  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}
