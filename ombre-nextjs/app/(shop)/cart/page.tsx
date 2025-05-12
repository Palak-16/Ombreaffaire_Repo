"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart()
  const { addItem: addToFavorites } = useFavorites()
  const [promoCode, setPromoCode] = useState("")
  const [promoError, setPromoError] = useState("")
  const [promoSuccess, setPromoSuccess] = useState("")

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id)
  }

  const handleMoveToFavorites = (item: any) => {
    addToFavorites({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: "Clothing", // Default category
    })
    removeItem(item.id)
  }

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault()

    // Reset messages
    setPromoError("")
    setPromoSuccess("")

    // Simple promo code validation
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoSuccess("Promo code applied! 10% discount added.")
      // In a real app, you would apply the discount to the total
    } else {
      setPromoError("Invalid promo code. Please try again.")
    }
  }

  // Recommended products
  const recommendedProducts = [
    {
      id: "5",
      name: "Gradient Evening Gown",
      price: 199.99,
      image: "/shimmering-emerald-gown.png",
      category: "Dresses",
    },
    {
      id: "6",
      name: "Pearl Drop Earrings",
      price: 49.99,
      image: "/elegant-pearl-drops.png",
      category: "Accessories",
    },
    {
      id: "7",
      name: "Silk Scarf",
      price: 39.99,
      image: "/draped-beige-silk.png",
      category: "Accessories",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">Shopping Cart</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
          <h2 className="text-xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Browse our products and find something you'll love.
          </p>
          <Button asChild className="mt-4">
            <Link href="/products">Continue shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Items ({items.length})</h2>
                <Button variant="ghost" size="sm" onClick={() => clearCart()}>
                  Clear cart
                </Button>
              </div>

              <ul className="divide-y">
                {items.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium">
                          <h3>
                            <Link href={`/products/${item.id}`} className="hover:underline">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.color} / {item.size}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border rounded">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMoveToFavorites(item)}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            Save for later
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Products */}
            <div className="mt-8">
              <h2 className="text-xl font-medium mb-4">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="group">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={400}
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-medium">
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
                      <p className="mt-1 text-sm font-medium">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-20">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handleApplyPromo} className="mt-6">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" variant="outline">
                    Apply
                  </Button>
                </div>
                {promoError && <p className="text-xs text-red-500 mt-1">{promoError}</p>}
                {promoSuccess && <p className="text-xs text-green-500 mt-1">{promoSuccess}</p>}
              </form>

              <Button className="w-full mt-6" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <div className="mt-6">
                <div className="rounded-lg bg-muted p-4 text-sm">
                  <div className="flex">
                    <ShoppingBag className="h-5 w-5 text-muted-foreground mr-2" />
                    <p>
                      <span className="font-medium">Free shipping</span> on orders over $100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
