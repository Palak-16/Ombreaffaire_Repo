"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/hooks/use-cart";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { clearCart } = useCart();

  // clear cart on mount (safety net)
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Payment Successful 🎉</h1>
      {orderId && <p className="mb-4">Your order ID is <strong>{orderId}</strong></p>}

      <Link href="/account/orders" className="bg-black text-white px-4 py-2 rounded-lg">
        View My Orders
      </Link>
    </div>
  );
}
