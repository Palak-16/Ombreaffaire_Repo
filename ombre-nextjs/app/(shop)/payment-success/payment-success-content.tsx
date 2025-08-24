"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Payment Successful 🎉</h1>
      {orderId && <p className="mb-4">Your order ID is <strong>{orderId}</strong></p>}

      <Link href="/orders" className="bg-black text-white px-4 py-2 rounded-lg">
        View My Orders
      </Link>
    </div>
  );
}
