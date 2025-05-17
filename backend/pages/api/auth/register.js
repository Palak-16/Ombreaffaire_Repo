// pages/api/auth/register.js

import bcrypt from 'bcryptjs';
import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { normalizeEmail } from '../../../lib/emailUtils';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors); // apply CORS

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, password } = req.body;
  const rawEmail = req.body.email;
const email = normalizeEmail(rawEmail);


  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  // ✅ Step 2: Add backend password validation here
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long.' });
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error: 'Password must include at least 1 uppercase letter, 1 number, and 1 special character.',
    });
  }


  const { data: existingUser } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  //otp verificaton 
  const { data: otpData } = await supabase
    .from('email_otps')
    .select('verified')
    .eq('email', email)
    .single();

  if (!otpData?.verified) {
    return res.status(403).json({ error: 'Email not verified. Please complete OTP verification.' });
  }


  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, password: hashedPassword }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // ✅ Clean up verified OTP
  await supabase.from('email_otps').delete().eq('email', email);

  return res.status(201).json({ message: 'User registered successfully' });

  return res.status(201).json({ message: 'User registered successfully' });
}
