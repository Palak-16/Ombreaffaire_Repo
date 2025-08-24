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

    const frontendBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    if (status.success) {
      res.redirect(`${frontendBaseUrl}/payment-success?orderId=${orderId}`);
    } else {
      res.redirect(`${frontendBaseUrl}/payment-failed?orderId=${orderId}`);
    }
  } catch (err) {
    console.error("Callback error:", err);

    const frontendBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    res.redirect(`${frontendBaseUrl}/payment-failed`);
  }
}
