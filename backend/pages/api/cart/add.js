import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { getUserFromToken } from "../../../lib/auth/getUserFromToken";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method !== "POST") return res.status(405).end();

  const user = await getUserFromToken(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  const { product_size_color_id, quantity = 1 } = req.body;

  // Step 1: Check if item already exists
  const { data: existingRows, error: selectError } = await supabase
    .from('user_cart')
    .select('quantity')
    .eq('user_id', user.id)
    .eq('product_size_color_id', product_size_color_id)
    .single();

  if (selectError && selectError.code !== 'PGRST116') { // ignore "no rows found"
    console.error("Select error:", selectError);
    return res.status(500).json({ error: 'Failed to check existing cart item' });
  }

  let newQuantity = quantity;

  if (existingRows) {
    newQuantity = existingRows.quantity + quantity;
  }

  // Step 2: Upsert with updated quantity
  const { error: upsertError } = await supabase
    .from('user_cart')
    .upsert({
      user_id: user.id,
      product_size_color_id,
      quantity: newQuantity,
    })
    .eq('user_id', user.id)
    .eq('product_size_color_id', product_size_color_id);

  if (upsertError) {
    console.error("Upsert error:", upsertError);
    return res.status(500).json({ error: 'Failed to add/update cart item' });
  }

  res.status(200).json({ success: true });
}
