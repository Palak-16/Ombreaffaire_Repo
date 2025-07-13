import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Customer Service | OMBRÉ affaire",
  description: "Get help with your OMBRÉ affaire orders, returns, and more.",
};

export default function CustomerServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Customer Service
        </h1>

        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            We're here to help you with any questions or concerns about your
            OMBRÉ affaire experience. Below you'll find answers to our most
            frequently asked questions.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order is confirmed, our team will promptly share a
              tracking ID with you via email or WhatsApp. You can use this ID to
              track your package directly on the delivery partner's website that
              we will provide for real-time updates. If you do not receive your
              tracking ID within 24-48 hours of placing your order, please feel
              free to email us at ombreaffaire@gmail.com, and our support team
              will be happy to assist you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              At Ombré Affaire, we take great pride in the quality, care, and
              inspection that goes into each and every order. Every product is
              thoroughly checked for quality, size accuracy, and finishing
              before it is carefully packed and dispatched. As part of our brand
              policy,<b> we do not offer returns</b> , once an order has been
              placed and delivered.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              All fresh orders are processed and shipped within{" "}
              <b>7-10 business days</b> from the date of confirmation. We take
              pride in ensuring each piece is prepared with care and quality,
              which may take a little time. In the rare event of any delays
              beyond this window, our team will proactively reach out to you via
              the E-mail/WhatsApp provided at checkout to keep you informed
              about the updated timeline. We appreciate yo
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we absolutely do. Ombré Affaire ships worldwide — no matter
              where you are, we’re happy to bring our pieces to your doorstep.
              However, international shipping charges will be borne by the
              customer, and may vary based on your location and order weight.
              Once you place your order or drop us a message, our team will get
              in touch to share the exact shipping cost and options available.
              Because style knows no borders — and neither do we And if you're
              sending love from overseas, just know we’re doing a little happy
              dance here in India!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do I care for my OMBRÉ affaire garments?
            </AccordionTrigger>
            <AccordionContent>
              Each item comes with specific care instructions on the label.
              Generally, we recommend gentle hand washing or dry cleaning for
              most items. Always refer to the care label for the best results
              and to maintain the quality of your garments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">Contact Our Team</h2>
          <p className="mb-4 text-muted-foreground">
            Can't find the answer you're looking for? Our customer service team
            is available to assist you.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-medium">Email</h3>
              <p className="text-muted-foreground">ombreaffaire@gmail.com</p>
              <p className="text-sm text-muted-foreground">
                Response within 24-48 hours
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Phone</h3>
              <p className="text-muted-foreground">+91 8077069310</p>
              <p className="text-sm text-muted-foreground">
                Mon-Fri, 9am-7pm IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
