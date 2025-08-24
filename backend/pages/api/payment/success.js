import { useRouter } from "next/router";
import { useEffect } from "react";
import cors, { runMiddleware } from "../../../lib/cors";

export default function PaymentSuccess() {
     runMiddleware(req, res, cors);
  const router = useRouter();
  const { orderId } = router.query;

  useEffect(() => {
    // Call backend to verify payment status
    if (orderId) {
      fetch(`/api/payment/status?orderId=${orderId}`);
    }
  }, [orderId]);

  return <h1>Payment Success! Order ID: {orderId}</h1>;
}
