"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Suspense } from "react";
import PaymentSuccessContent from "./payment-success-content";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
