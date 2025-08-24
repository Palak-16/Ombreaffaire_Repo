// pages/api/phonepe/callback.js
import { StatusCheckClient, Env } from "pg-sdk-node";

export default async function handler(req, res) {
  try {
    const { orderId } = req.query;

    const client = StatusCheckClient.getInstance(
      process.env.PHONEPE_CLIENT_ID,
      process.env.PHONEPE_CLIENT_SECRET,
      Number(process.env.PHONEPE_CLIENT_VERSION) || 1,
      process.env.PHONEPE_ENV === "PRODUCTION" ? Env.PRODUCTION : Env.SANDBOX
    );

    const status = await client.checkStatus(orderId);

    if (status.success) {
      res.redirect(`/payment-success?orderId=${orderId}`);
    } else {
      res.redirect(`/payment-failed?orderId=${orderId}`);
    }
  } catch (err) {
    console.error("Callback error:", err);
    res.redirect(`/payment-failed`);
  }
}
