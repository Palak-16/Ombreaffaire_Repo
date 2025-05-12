"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Loader2 } from "lucide-react"

type ShippingInfo = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  saveAddress: boolean
  shippingMethod: string
}

type PaymentInfo = {
  cardNumber: string
  cardName: string
  expiry: string
  cvc: string
  saveCard: boolean
  billingAddressSame: boolean
}

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size: string
  color: string
}

type CheckoutReviewProps = {
  shippingInfo: ShippingInfo
  paymentInfo: PaymentInfo
  items: CartItem[]
  onBack: () => void
  onPlaceOrder: () => void
}

export default function CheckoutReview({
  shippingInfo,
  paymentInfo,
  items,
  onBack,
  onPlaceOrder,
}: CheckoutReviewProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = shippingInfo.shippingMethod === "express" ? 15 : subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handlePlaceOrder = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      onPlaceOrder()
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Review Your Order</CardTitle>
          <CardDescription>Please review your order details before placing your order</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Shipping Information</h3>
              <div className="text-sm text-muted-foreground">
                <p>
                  {shippingInfo.firstName} {shippingInfo.lastName}
                </p>
                <p>{shippingInfo.address}</p>
                <p>
                  {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}
                </p>
                <p>{shippingInfo.country}</p>
                <p className="mt-2">{shippingInfo.email}</p>
                <p>{shippingInfo.phone}</p>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium">Shipping Method</h4>
                <p className="text-sm text-muted-foreground">
                  {shippingInfo.shippingMethod === "express"
                    ? "Express Shipping (1-2 business days)"
                    : "Standard Shipping (3-5 business days)"}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Payment Information</h3>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>•••• •••• •••• {paymentInfo.cardNumber.slice(-4) || "4242"}</p>
                  <p>Expires {paymentInfo.expiry || "05/25"}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium">Billing Address</h4>
                <p className="text-sm text-muted-foreground">
                  {paymentInfo.billingAddressSame
                    ? "Same as shipping address"
                    : `${shippingInfo.firstName} ${shippingInfo.lastName}, ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zip}, ${shippingInfo.country}`}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-4">Order Items</h3>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex space-x-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium">
                      <h4>{item.name}</h4>
                      <p className="ml-4">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.color} / {item.size}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <div className="space-y-2">
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

              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back to Payment
        </Button>
        <Button onClick={handlePlaceOrder} disabled={isProcessing} className="min-w-[150px]">
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Place Order"
          )}
        </Button>
      </div>
    </div>
  )
}
