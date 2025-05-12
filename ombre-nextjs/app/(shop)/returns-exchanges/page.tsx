import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Returns & Exchanges | OMBRÉ affaire",
  description: "Learn about OMBRÉ affaire's return and exchange policies.",
}

export default function ReturnsExchangesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Returns & Exchanges</h1>

        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            We want you to love your OMBRÉ affaire purchases. If you're not completely satisfied, we're here to help
            with easy returns and exchanges.
          </p>
        </div>

        <div className="mb-12 space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Return Policy</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">30-Day Return Window</p>
                  <p className="text-muted-foreground">You have 30 days from the delivery date to return your items.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Original Condition</p>
                  <p className="text-muted-foreground">
                    Items must be unworn, unwashed, and in their original condition with all tags attached.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Original Packaging</p>
                  <p className="text-muted-foreground">
                    Please return items in their original packaging when possible.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Refund Method</p>
                  <p className="text-muted-foreground">
                    Refunds will be issued to the original payment method within 5-7 business days after we receive your
                    return.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Exchange Process</h2>
            <p className="mb-4 text-muted-foreground">
              We're happy to exchange items for a different size or color, subject to availability. To request an
              exchange:
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
              <li>Initiate a return using the process below</li>
              <li>Indicate that you'd like an exchange in the return form</li>
              <li>Specify the new size or color you'd prefer</li>
              <li>We'll process your exchange as soon as we receive your return</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">How to Return</h2>
            <ol className="list-decimal space-y-4 pl-5">
              <li>
                <p className="font-medium">Initiate Your Return</p>
                <p className="text-muted-foreground">
                  Log into your account and select the order you wish to return, or use our return portal if you checked
                  out as a guest.
                </p>
              </li>

              <li>
                <p className="font-medium">Print Return Label</p>
                <p className="text-muted-foreground">
                  Print the prepaid return shipping label. A $7.95 return shipping fee will be deducted from your
                  refund.
                </p>
              </li>

              <li>
                <p className="font-medium">Package Your Return</p>
                <p className="text-muted-foreground">
                  Securely pack the items in their original condition with all tags attached.
                </p>
              </li>

              <li>
                <p className="font-medium">Ship Your Return</p>
                <p className="text-muted-foreground">Drop off your package at any authorized shipping location.</p>
              </li>

              <li>
                <p className="font-medium">Track Your Return</p>
                <p className="text-muted-foreground">
                  You'll receive email updates as your return is processed, and you can track its status in your
                  account.
                </p>
              </li>
            </ol>
          </section>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <a href="/track-order">Start a Return</a>
          </Button>
        </div>

        <div className="mt-8 rounded-lg border p-4">
          <h2 className="mb-2 text-sm font-medium">Questions About Returns?</h2>
          <p className="text-xs text-muted-foreground">
            If you have any questions about our return policy or need assistance with a return, please contact our
            customer service team at support@ombreaffaire.com or call +1 (800) 555-OMBRE.
          </p>
        </div>
      </div>
    </div>
  )
}
