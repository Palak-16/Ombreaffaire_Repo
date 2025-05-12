import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | OMBRÉ affaire",
  description: "Get in touch with the OMBRÉ affaire team for questions, feedback, or assistance.",
}

export default function ContactUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Contact Us</h1>

        <div className="mb-12">
          <p className="text-center text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our products, an order, or anything else, our
            team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <Mail className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Email Us</h2>
            <p className="mb-4 text-muted-foreground">For general inquiries and customer support</p>
            <p className="font-medium">support@ombreaffaire.com</p>
            <p className="text-sm text-muted-foreground">Response within 24 hours</p>
          </div>

          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <Phone className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Call Us</h2>
            <p className="mb-4 text-muted-foreground">Speak directly with our customer service team</p>
            <p className="font-medium">+1 (800) 555-OMBRE</p>
            <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
          </div>

          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <MapPin className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Visit Us</h2>
            <p className="mb-4 text-muted-foreground">Our flagship store and headquarters</p>
            <p className="font-medium">123 Fashion Avenue</p>
            <p className="text-sm text-muted-foreground">New York, NY 10001</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg border p-8">
          <h2 className="mb-6 text-center text-2xl font-semibold">Send Us a Message</h2>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Jane Doe" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="jane@example.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help you?" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Please provide as much detail as possible..." rows={5} required />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
