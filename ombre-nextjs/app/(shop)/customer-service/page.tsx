import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Customer Service | OMBRÉ affaire",
  description: "Get help with your OMBRÉ affaire orders, returns, and more.",
}

export default function CustomerServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Customer Service</h1>

        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            We're here to help you with any questions or concerns about your OMBRÉ affaire experience. Below you'll find
            answers to our most frequently asked questions.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I track my order?</AccordionTrigger>
            <AccordionContent>
              You can track your order by visiting the "Track Order" page and entering your order number and email
              address. Alternatively, you can find tracking information in your order confirmation email or in your
              account under "Order History".
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for all unworn items in their original condition with tags attached.
              Please visit our "Returns & Exchanges" page for detailed instructions on how to initiate a return.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 3-5 business days within the continental US. International shipping
              times vary by location, generally taking 7-14 business days. For more information, please visit our
              "Shipping" page.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
            <AccordionContent>
              Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Import
              duties and taxes may apply and are the responsibility of the customer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How do I care for my OMBRÉ affaire garments?</AccordionTrigger>
            <AccordionContent>
              Each item comes with specific care instructions on the label. Generally, we recommend gentle hand washing
              or dry cleaning for most items. Always refer to the care label for the best results and to maintain the
              quality of your garments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">Contact Our Team</h2>
          <p className="mb-4 text-muted-foreground">
            Can't find the answer you're looking for? Our customer service team is available to assist you.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-medium">Email</h3>
              <p className="text-muted-foreground">support@ombreaffaire.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Phone</h3>
              <p className="text-muted-foreground">+1 (800) 555-OMBRE</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
