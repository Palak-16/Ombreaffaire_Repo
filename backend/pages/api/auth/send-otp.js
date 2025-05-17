import nodemailer from 'nodemailer';
import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors';
import { normalizeEmail } from '../../../lib/emailUtils';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const rawEmail = req.body.email;
const email = normalizeEmail(rawEmail);

  if (!email) return res.status(400).json({ error: 'Email is required' });
   
  // const { name } = req.body;
  // if (!name) return res.status(400).json({ error: 'First Name is required' });

  // ✅ Check if user already exists
  const { data: existingUser } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (existingUser) {
    return res.status(409).json({ error: 'User already exists with this email' });
  }

  // ✅ Delete any old OTPs
  await supabase.from('email_otps').delete().eq('email', email);

  // ✅ Generate and insert new OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

  await supabase.from('email_otps').insert({
    email,
    otp,
    verified: false,
    expires_at: expiresAt.toISOString(), // timestamp with timezone
  });

  // ✅ Send email
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Verify your email - OMBRÉ affaire OTP',
    html: `
      <h2>OMBRÉ affaire - One Time Password</h2>
      <p>Hello,</p>
      <p>Your one-time password (OTP) is:</p>
      <h3 style="color: #333; font-size: 24px;">${otp}</h3>
      <p>This code is valid for 10 minutes. Do not share it with anyone.</p>
      <p>Thanks,<br/>OMBRÉ affaire Support</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send OTP email' });
  }
}
