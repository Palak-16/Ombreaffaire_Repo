import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Track Order | OMBRÉ affaire",
  description: "Track your OMBRÉ affaire order status and shipping information.",
}

export default function TrackOrderPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-4xl font-bold">Track Your Order</h1>

        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            Enter your order number and email address to check the status of your order.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="order-number">Order Number</Label>
            <Input id="order-number" placeholder="e.g., OMB12345678" required />
            <p className="text-xs text-muted-foreground">
              Your order number can be found in your order confirmation email.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
            <p className="text-xs text-muted-foreground">Please enter the email address used for your order.</p>
          </div>

          <Button type="submit" className="w-full">
            Track Order
          </Button>
        </form>

        <div className="mt-8 rounded-lg border p-4">
          <h2 className="mb-2 text-sm font-medium">Need Help?</h2>
          <p className="text-xs text-muted-foreground">
            If you're having trouble tracking your order, please contact our customer service team at
            support@ombreaffaire.com or call +1 (800) 555-OMBRE.
          </p>
        </div>
      </div>
    </div>
  )
}
