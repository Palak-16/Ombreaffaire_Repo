import type { Metadata } from "next"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Shipping Information | OMBRÉ affaire",
  description: "Learn about OMBRÉ affaire's shipping options, delivery times, and policies.",
}

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Shipping Information</h1>

        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            We offer several shipping options to ensure your OMBRÉ affaire pieces reach you in perfect condition.
          </p>
        </div>

        <div className="mb-12 space-y-8">
          {/* <section>
            <h2 className="mb-4 text-2xl font-semibold">Domestic Shipping</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shipping Method</TableHead>
                    <TableHead>Delivery Time</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Standard</TableCell>
                    <TableCell>3-5 business days</TableCell>
                    <TableCell>$8.95 (Free over $150)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Express</TableCell>
                    <TableCell>2 business days</TableCell>
                    <TableCell>$14.95</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Overnight</TableCell>
                    <TableCell>Next business day</TableCell>
                    <TableCell>$24.95</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              * Business days are Monday through Friday, excluding holidays. Orders placed after 1 PM EST may not be
              processed until the following business day.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">International Shipping</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Region</TableHead>
                    <TableHead>Delivery Time</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Canada</TableCell>
                    <TableCell>5-7 business days</TableCell>
                    <TableCell>$19.95 (Free over $250)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Europe</TableCell>
                    <TableCell>7-10 business days</TableCell>
                    <TableCell>$24.95 (Free over $300)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Asia & Australia</TableCell>
                    <TableCell>10-14 business days</TableCell>
                    <TableCell>$29.95 (Free over $300)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rest of World</TableCell>
                    <TableCell>14-21 business days</TableCell>
                    <TableCell>$34.95 (Free over $350)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              * International customers may be subject to import duties and taxes, which are the responsibility of the
              recipient.
            </p>
          </section> */}

          <section>
            <h2 className="mb-4 text-2xl text-jusify font-semibold">Shipping Policies</h2>
            <p className="mb-4 text-muted-foreground">
             All fresh orders are <b>processed and shipped within 7–10 business days</b> from the date of
confirmation. We take pride in ensuring each piece is prepared with care and quality, which
may take a little time. <br></br>
In the rare event of any delays beyond this window, our team will proactively reach out to
you via the WhatsApp or   Email provided at checkout to keep you informed about the updated
timeline. <br></br>
We appreciate your patience and support as we work to deliver your order with the attention
it deserves
</p>            
          </section>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-sm font-medium">Questions About Shipping?</h2>
          <p className="text-xs text-muted-foreground">
            If you have any questions about our shipping policies or need assistance with a shipment, please contact our
            customer service team at ombreaffaire@gmail.com or call +91 8077069310.
          </p>
        </div>
      </div>
    </div>
  )
}
