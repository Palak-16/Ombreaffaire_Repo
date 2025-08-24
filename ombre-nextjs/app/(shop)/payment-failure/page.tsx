"use client";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentFailed() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <XCircle className="h-16 w-16 text-red-600 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Payment Failed ❌</h1>
      <p className="mb-4">Something went wrong with your payment. Please try again.</p>

      <Link href="/checkout" className="bg-black text-white px-4 py-2 rounded-lg">
        Back to Checkout
      </Link>
    </div>
  );
}

