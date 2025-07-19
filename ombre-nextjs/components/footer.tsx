"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCategories } from "./CategoriesContext"; // Adjust the import path as needed
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export function Footer() {
  const categories = useCategories();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  // 👉 store newsletter email
  const [newsletterEmail, setNewsletterEmail] = useState("");
  // 👉 called when they hit “Subscribe”
  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      const res = await fetch(`${apiUrl}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (res.ok) {
        alert("🎉 Thanks for subscribing!");
        setNewsletterEmail(""); // clear the field
      } else {
        const { error } = await res.json();
        alert(error || "Subscription failed");
      }
    } catch (err) {
      console.error(err);
      alert("Oops, something went wrong.");
    }
  };
  return (
    <footer className="bg-primary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and about */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/ombre-logo-new.jpeg"
                alt="OMBRÉ affaire"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Ombré Affaire began with a simple vision - to create a brand that
              celebrates individuality, comfort, and confidence. <br></br>
              We believe fashion should empower, not overwhelm. Our philosophy
              is rooted in balance between style and simplicity, trends and
              timelessness, self-expression and subtlety.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Link
                  href="https://www.facebook.com/share/1CNK8AFBVD/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Link
                  href="https://www.instagram.com/ombreaffaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Link
                  href="https://wa.me/918077069310?text=Hi%20there!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-base font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              {categories?.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-base font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/customer-service"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/returns-exchanges"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-medium mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Be the first to know about new collections and exclusive offers.
            </p>
            <form className="flex space-x-2" onSubmit={handleNewsletterSubmit}>
              <Input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Your email"
                className="bg-background"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6">
              <Link
                href="/about-us"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} OMBRÉ affaire. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
