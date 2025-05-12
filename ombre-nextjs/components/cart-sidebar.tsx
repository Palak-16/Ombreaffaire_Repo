"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"

export function CartSidebar() {
  const { items = [], removeItem, updateQuantity } = useCart()
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-4">
        <h2 className="text-lg font-medium">Shopping Cart ({items.length})</h2>
        <SheetClose asChild>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetClose>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-8">
          <ShoppingBag className="h-16 w-16 text-muted-foreground" />
          <div className="text-center">
            <h3 className="text-lg font-medium">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Looks like you haven't added anything to your cart yet.
            </p>
          </div>
          <SheetClose asChild>
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </SheetClose>
        </div>
      ) : (
        <>
          <ul className="flex-1 overflow-auto py-6 px-4 space-y-6">
            {items.map((item) => (
              <li key={item.id} className="flex space-x-4">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium">
                    <h3>
                      <Link href={`/products/${item.id}`}>{item.name}</Link>
                    </h3>
                    <p className="ml-4">${item.price.toFixed(2)}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.color} / {item.size}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <SheetClose asChild>
                <Button className="w-full" asChild>
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </SheetClose>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
              <p>
                or{" "}
                <SheetClose asChild>
                  <Button variant="link" className="p-0">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </SheetClose>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
