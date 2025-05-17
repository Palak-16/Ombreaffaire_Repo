import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { normalizeEmail } from '../../../lib/emailUtils';

export default async function handler(req, res) {
  // console.log("🔁 Reached OTP handler");
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawEmail = req.body.email;
const email = normalizeEmail(rawEmail);

  const { otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  // Get OTP entry from DB
  // const { data, error } = await supabase
  //   .from('email_otps')
  //   .select('*')
  //   .eq('email', email)
  //   .single();

  const { data, error } = await supabase
    .from('email_otps')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  // console.log("Supabase error:", error);
  // console.log("Supabase data:", data);


  if (error || !data) {
    return res.status(400).json({ error: 'No OTP found for this email' });
  }

  // ✅ Check if OTP is expired
  const now = new Date();
  const expiresAt = new Date(data.expires_at + 'Z');  // Force UTC

  // console.log("NOW:", new Date().toISOString());
  // console.log("EXPIRES_AT:", data.expires_at);
  // console.log("Parsed EXPIRES_AT:", new Date(data.expires_at).toISOString());

  if (expiresAt < now) {
    return res.status(410).json({ error: "OTP has expired. Please request a new one." });
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
