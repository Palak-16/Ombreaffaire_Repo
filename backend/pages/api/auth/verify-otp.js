import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  // Get OTP entry from DB
  const { data, error } = await supabase
    .from('email_otps')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
    return res.status(400).json({ error: 'No OTP found for this email' });
  }

  if (data.otp !== otp) {
    return res.status(401).json({ error: 'Invalid OTP' });
  }

  // Mark email as verified
  await supabase
    .from('email_otps')
    .update({ verified: true })
    .eq('email', email);

  return res.status(200).json({ message: 'OTP verified successfully' });
}
