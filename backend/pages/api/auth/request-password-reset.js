import crypto from "crypto";
import nodemailer from "nodemailer";
import supabase from "../../../lib/supabaseClient";
import cors, { runMiddleware } from "../../../lib/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // ✅ Check if user exists
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("id, email")
    .eq("email", email)
    .single();

  if (!user || userError) {
    return res.status(404).json({ error: "No account found with this email" });  // ✅ Now properly returns error
  }

  // ✅ Generate secure token
  const token = crypto.randomBytes(32).toString("hex");
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 1000 * 60 * 10); // 10 mins

  // Delete any existing tokens for this email
  await supabase.from("password_resets").delete().eq("email", email);

  // ✅ Insert new token
  await supabase.from("password_resets").insert({
    email,
    token,
    expires_at: expiresAt.toISOString(),
  });

  // ✅ Email setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const resetLink = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Reset your OMBRÉ affaire password",
    html: `
      <h2>Password Reset</h2>
      <p>You requested a password reset. Click the link below to set a new password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link is valid for 10 minutes.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Password reset email sent successfully." });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
