import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { normalizeEmail } from '../../../lib/emailUtils';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const rawEmail = req.body.email;
const email = normalizeEmail(rawEmail);

  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return res.status(200).json({ token });
}
