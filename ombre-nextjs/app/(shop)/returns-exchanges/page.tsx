import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Exchanges | OMBRÉ affaire",
  description: "Learn about OMBRÉ affaire's return and exchange policies.",
};

export default function ReturnsExchangesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Returns & Exchanges
        </h1>

        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            We want you to love your OMBRÉ affaire purchases. If you're not
            completely satisfied, we're here to help with easy exchanges.
          </p>
        </div>

        <div className="mb-12 space-y-8">
          <section className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold uppercase">RETURN</h2>

            <p className="mb-4 text-muted-foreground">
              At Ombré Affaire, we take great pride in the quality, care, and
              inspection that goes into each and every order. Every product is
              thoroughly checked for quality, size accuracy, and finishing
              before it is carefully packed and dispatched.
            </p>

            <p className="mb-4 text-muted-foreground">
              As part of our brand policy, we do not offer returns once an order
              has been placed and delivered.
            </p>

            <br />
            <p>
              As part of our brand policy, we do not offer returns once an order
              has been placed and delivered. However, in case of a faulty
              payment or any payment-related issue, we will provide a refund to
              the original source of payment within 3–5 business days
            </p>

            <p>We encourage our customers to:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                Review product descriptions, sizing details, and images
                carefully before placing an order.
              </li>
              <li>
                Note that a slight variation in colour may occur due to screen
                resolution or lighting, which is not considered a defect.
              </li>
            </ul>

            <p className="mb-4 text-muted-foreground">
              Our team follows a strict multi-level quality check before
              dispatching any order, ensuring that the product reaches you in
              perfect condition.
            </p>

            <p className="mb-4 text-muted-foreground">
              That said, you can shop with complete peace of mind — your order
              will be delivered just as you see it, thoughtfully packed and true
              to what you’ve chosen.
            </p>

            <p className="mb-4 text-muted-foreground">
              We thank you for your understanding and for supporting a mindful,
              growing brand that values transparency and integrity in every step
              of your shopping experience.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Exchange Process</h2>
            <p className="mb-4 text-muted-foreground">
              We understand that sometimes the size might not be just right —
              and that’s okay! At Ombré Affaire, we offer a one-time exchange on
              your order. Exchanged or replaced products will be
              delivered within 7-10 days <br></br>
              <br></br>
              <b>
                To request an exchange, please email us at
                ombreaffaire@gmail.com within 24–48 hours of receiving your
                order, mentioning:
              </b>
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
              <li>Your order ID and product details</li>
              <li>The issue with the current size</li>
              <li>The new size you’d like to exchange it for</li>
              <li>
                We'll process your exchange as soon as we receive your return
              </li>
            </ol>
            <br></br>
            <p className="mb-4 text-muted-foreground">
              <b>Please note:</b> Any exchange request raised after 48 hours of
              delivery will not be accepted, so we encourage you to reach out as
              soon as possible..<br></br>
              There will be a nominal charge for the exchange process, which may
              vary depending on your location and the weight of the product.
              These charges will be shared with you via your registered email or
              WhatsApp before we process the exchange.<br></br>
              We’re also working on creating a smooth, self-service exchange
              section right here on the website — but our website seems to be
              taking its sweet time to get “party ready,” we guess. Till then,
              we’re just an E-mail away and happy to help!
            </p>
          </section>
        </div>

        <div className="mt-8 rounded-lg border p-4">
          <h2 className="mb-2 text-sm font-medium">Questions About Returns?</h2>
          <p className="text-xs text-muted-foreground">
            If you have any questions about our return policy or need assistance
            with a return, please contact our team at ombreaffaire@gmail.com or
            call +91 8077069310.
          </p>
        </div>
      </div>
    </div>
  );
}
