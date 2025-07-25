"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

type CheckoutPaymentProps = {
  onSubmit: (data: { paymentMethod: "upi" }) => void
  onBack: () => void
}

export default function CheckoutPayment({ onSubmit, onBack }: CheckoutPaymentProps) {
  const handleContinue = () => {
    onSubmit({ paymentMethod: "upi" })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleContinue()
    }}>
      <Card>
        <CardHeader>
          <CardTitle>Pay via UPI</CardTitle>
          <CardDescription>Scan or copy the UPI ID to complete your payment</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg text-center">
            <p className="text-base mb-2">UPI ID:</p>
            <p className="text-xl font-semibold mb-4 text-primary">ombre@upi</p>

            <div className="flex justify-center">
              <img
                src="/upi-qr.png" // ⬅️ Save your QR code here
                alt="UPI QR Code"
                className="w-48 h-48 object-contain"
              />
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              After making the payment, click "Continue to Review" below.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back to Shipping
        </Button>
        <Button type="submit">Continue to Review</Button>
      </div>
    </form>
  )
}
