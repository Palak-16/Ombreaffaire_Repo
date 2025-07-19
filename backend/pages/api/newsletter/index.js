// pages/api/newsletter/index.js

import supabase from "../../../lib/supabaseClient";
import cors from "../../../lib/cors";

// very lightweight CORS helper
async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // handle CORS preflight & headers
  await runMiddleware(req, res, cors);
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body || {};
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // insert into your Supabase table
  const { error } = await supabase
    .from("newsletter_subscriptions")
    .insert({ email: email.trim().toLowerCase() });

  if (error) {
    // if it’s a unique‐constraint violation (already subscribed), return 200
    if (error.code === "23505") {
      return res.status(200).json({ message: "Already subscribed" });
    }
    console.error("Supabase insert error:", error);
    return res.status(500).json({ error: "Database error" });
  }

  return res.status(201).json({ message: "Subscribed!" });
}
