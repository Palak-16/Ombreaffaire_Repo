import nodemailer from 'nodemailer';
import supabase from '../../../lib/supabaseClient';
import cors, { runMiddleware } from '../../../lib/cors'; // ✅ Add this


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function handler(req, res) {

  await runMiddleware(req, res, cors); // ✅ Add this as the first line inside handler

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await supabase
    .from('email_otps')
    .upsert({ email, otp, verified: false, created_at: new Date().toISOString() });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    html: `<p>Your OTP is <strong>${otp}</strong>. It expires in 10 minutes.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send OTP email' });
  }
}
