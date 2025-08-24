import cors, { runMiddleware } from "../../../lib/cors";
import { StandardCheckoutClient, Env, StandardCheckoutPayRequest } from "pg-sdk-node";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== "POST") return res.status(405).end();

  try {
    const { orderId, amount } = req.body;

    const clientVersion = Number(process.env.PHONEPE_CLIENT_VERSION) || 1;
    const env = process.env.PHONEPE_ENV === "PRODUCTION" ? Env.PRODUCTION : Env.SANDBOX;

    const client = StandardCheckoutClient.getInstance(
      process.env.PHONEPE_CLIENT_ID,
      process.env.PHONEPE_CLIENT_SECRET,
      clientVersion,
      env
    );

    // Redirect to **frontend callback page**, not backend API
    const frontendRedirect = `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?orderId=${orderId}`;

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(orderId)
      .amount(amount * 100)  // paisa
      .redirectUrl(frontendRedirect) // send user browser here
      .build();

    const response = await client.pay(request);

    return res.status(200).json({
      data: {
        instrumentResponse: { redirectInfo: { url: response.redirectUrl } }
      }
    });

  } catch (err) {
    console.error("Payment initiation error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
