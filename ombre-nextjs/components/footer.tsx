"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and about */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/ombre-logo-new.jpeg" alt="OMBRÉ affaire" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              OMBRÉ affaire offers elegant, contemporary fashion that transitions seamlessly from day to night, just
              like the gradual blend of colors in an ombré design.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-base font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/new-arrivals"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/category/dresses"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dresses
                </Link>
              </li>
              <li>
                <Link
                  href="/category/tops"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tops
                </Link>
              </li>
              <li>
                <Link
                  href="/category/bottoms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bottoms
                </Link>
              </li>
              <li>
                <Link
                  href="/category/accessories"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/category/sale"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sale
                </Link>
              </li>
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
            <h3 className="text-base font-medium mb-4">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Be the first to know about new collections and exclusive offers.
            </p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-background" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6">
              <Link href="/about-us" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
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
              &copy; {new Date().getFullYear()} OMBRÉ affaire. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
