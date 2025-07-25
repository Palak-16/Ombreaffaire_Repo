"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FaWhatsapp } from "react-icons/fa"

export default function PaymentInfo() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-semibold mb-4">Payment Coming Soon</h1>
      <p className="text-muted-foreground max-w-md mb-6">
        <b>Our website is live (yay!)</b><br></br> But the payment gateway is still getting dressed for the occasion.
While we put the final touches in place, we'd still love to process your order – just a quick chat away!
         </p>
      <a
        href="https://wa.me/918077069310"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4"
      >
        <Button className="bg-green-600 hover:bg-green-700 text-white text-base px-6 py-2 rounded-md flex items-center gap-2">
          <FaWhatsapp size={20} />
          Message us on WhatsApp
        </Button>
      </a>
      <Button variant="outline" onClick={() => router.push("/")}>
        Go Back Home
      </Button>
    </div>
  )
}
