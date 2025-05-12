"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { CartSidebar } from "@/components/cart-sidebar"

const categories = [
  { name: "New Arrivals", href: "/category/new-arrivals" },
  { name: "Dresses", href: "/category/dresses" },
  { name: "Tops", href: "/category/tops" },
  { name: "Bottoms", href: "/category/bottoms" },
  { name: "Accessories", href: "/category/accessories" },
  { name: "Sale", href: "/category/sale" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items } = useCart()
  const { items: favoriteItems } = useFavorites()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/ombre-logo-new.jpeg" alt="OMBRÉ affaire" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/favorites">
                <Heart className="h-5 w-5" />
                {favoriteItems.length > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {favoriteItems.length}
                  </Badge>
                )}
                <span className="sr-only">Favorites</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {items.length > 0 && (
                    <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {items.length}
                    </Badge>
                  )}
                  <span className="sr-only">Shopping cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <CartSidebar />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-full sm:max-w-md">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src="/ombre-logo-new.jpeg" alt="OMBRÉ affaire" width={100} height={33} className="h-8 w-auto" />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex-1 overflow-auto py-6">
              <ul className="space-y-6 px-6">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/favorites"
                    className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Favorites
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
