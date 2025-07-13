import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us | OMBRÉ affaire",
  description:
    "Get in touch with the OMBRÉ affaire team for questions, feedback, or assistance.",
};

export default function ContactUsPage() {
   const phoneNumber = "918077069310";
  // optional default message (URL-encoded)
  const defaultText = encodeURIComponent("Hi there, I’d like to chat about your collection");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Contact Us</h1>

        <div className="mb-12">
          <p className="text-center text-muted-foreground">
            We're here to help! <br></br> If you have any questions about your order,
            shipping, sizing, or anything else, feel free to reach out to us:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <Mail className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Email</h2>
            <p className="mb-4 text-muted-foreground">
              For general inquiries and customer support
            </p>
            <p className="font-medium">ombreaffaire@gmail.com</p>
            <p className="text-sm text-muted-foreground">
              Response within 24-48 hours
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <Phone className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Contact</h2>
            <p className="mb-4 text-muted-foreground">
              Speak directly with our team
            </p>
            <p className="font-medium">+91  80770 69310</p>
            <p className="text-sm text-muted-foreground">
              Mon-Fri, 9am-7pm IST
            </p>
          </div>

          {/* <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <MapPin className="mb-4 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">Visit Us</h2>
            <p className="mb-4 text-muted-foreground">
              Our flagship store and headquarters
            </p>
            <p className="font-medium">123 Fashion Avenue</p>
            <p className="text-sm text-muted-foreground">New York, NY 10001</p>
          </div> */}
        </div>

        <div className="mt-12 rounded-lg border p-8">
          <h2 className="mb-6 text-center text-2xl font-semibold">
           Chat with Us
          </h2>
 <div className="flex justify-center">
        <a
          href={`https://wa.me/${phoneNumber}?text=${defaultText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 transition"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={64} />
        </a>
      </div>
          
        </div>
      </div>
    </div>
  );
}
