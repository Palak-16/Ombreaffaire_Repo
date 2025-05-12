import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | OMBRÉ affaire",
  description: "OMBRÉ affaire's terms of service and conditions of use.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Terms of Service</h1>

        <div className="mb-8">
          <p className="text-muted-foreground">Last Updated: April 30, 2023</p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>
            Welcome to OMBRÉ affaire. These Terms of Service ("Terms") govern your use of our website and the purchase
            of products from our online store. By accessing our website or placing an order, you agree to these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree to these Terms, please do not use our website or services.
          </p>

          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
            on our website. Your continued use of the website after any changes constitutes your acceptance of the new
            Terms.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To place orders or access certain features, you may need to create an account. You are responsible for
            maintaining the confidentiality of your account information and for all activities that occur under your
            account.
          </p>

          <h2>4. Products and Pricing</h2>
          <p>
            All product descriptions, images, and prices are subject to change without notice. We reserve the right to
            limit quantities, correct pricing errors, and discontinue products.
          </p>

          <h2>5. Orders and Payment</h2>
          <p>
            All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order
            for any reason, including but not limited to product availability, errors in pricing or product information,
            or suspected fraud.
          </p>
          <p>
            Payment must be made at the time of order. We accept major credit cards and other payment methods as
            indicated on our website.
          </p>

          <h2>6. Shipping and Delivery</h2>
          <p>
            Shipping times and costs are as indicated at checkout. We are not responsible for delays caused by shipping
            carriers or customs processing for international orders.
          </p>

          <h2>7. Returns and Refunds</h2>
          <p>
            Our return and refund policy is as described in our Returns & Exchanges page. All returns must comply with
            the conditions specified therein.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, images, and software, is the property of OMBRÉ
            affaire or its content suppliers and is protected by copyright and other intellectual property laws.
          </p>

          <h2>9. User Content</h2>
          <p>
            By submitting reviews, comments, or other content to our website, you grant us a non-exclusive,
            royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, create
            derivative works from, distribute, and display such content worldwide.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, OMBRÉ affaire shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or relating to your use of our website or
            products.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless OMBRÉ affaire and its officers, directors, employees, and agents
            from any claims, liabilities, damages, losses, costs, or expenses arising from your use of our website or
            violation of these Terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of New York, without
            regard to its conflict of law provisions.
          </p>

          <h2>13. Dispute Resolution</h2>
          <p>
            Any dispute arising from these Terms shall be resolved through binding arbitration in New York, New York, in
            accordance with the rules of the American Arbitration Association.
          </p>

          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
            remain in full force and effect.
          </p>

          <h2>15. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            Email: legal@ombreaffaire.com
            <br />
            Phone: +1 (800) 555-OMBRE
            <br />
            Address: 123 Fashion Avenue, New York, NY 10001
          </p>
        </div>
      </div>
    </div>
  )
}
