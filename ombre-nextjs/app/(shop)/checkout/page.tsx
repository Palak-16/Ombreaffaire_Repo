"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronRight, ShoppingBag, ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { Progress } from "@/components/ui/progress"
import CheckoutShipping from "@/components/checkout/checkout-shipping"
import CheckoutPayment from "@/components/checkout/checkout-payment"
import CheckoutReview from "@/components/checkout/checkout-review"
import CheckoutSuccess from "@/components/checkout/checkout-success"

export default function CheckoutPage() {
  const { items, clearCart } = useCart()
  const [step, setStep] = useState<"shipping" | "payment" | "review" | "success">("shipping")
  const [progress, setProgress] = useState(33)
  const router = useRouter()

  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    saveAddress: false,
    shippingMethod: "standard",
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
    saveCard: false,
    billingAddressSame: true,
  })

  // Calculate order summary
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = shippingInfo.shippingMethod === "express" ? 15 : subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  // Update progress bar when step changes
  useEffect(() => {
    switch (step) {
      case "shipping":
        setProgress(33)
        break
      case "payment":
        setProgress(66)
        break
      case "review":
        setProgress(100)
        break
      case "success":
        setProgress(100)
        break
    }
  }, [step])

  // Handle form submissions
  const handleShippingSubmit = (data: typeof shippingInfo) => {
    setShippingInfo(data)
    setStep("payment")
  }

  const handlePaymentSubmit = (data: typeof paymentInfo) => {
    setPaymentInfo(data)
    setStep("review")
  }

  const handlePlaceOrder = () => {
    // Simulate order processing
    setTimeout(() => {
      clearCart()
      setStep("success")
    }, 1000)
  }

  // If cart is empty, redirect to cart page
  useEffect(() => {
    if (items.length === 0 && step !== "success") {
      router.push("/cart")
    }
  }, [items, router, step])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-4">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/cart" className="text-muted-foreground hover:text-foreground">
          Cart
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">Checkout</span>
      </nav>

      {step !== "success" && (
        <>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <Link href="/cart" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to cart
            </Link>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm">
              <div
                className={`${step === "shipping" || step === "payment" || step === "review" ? "text-foreground font-medium" : "text-muted-foreground"}`}
              >
                Shipping
              </div>
              <div
                className={`${step === "payment" || step === "review" ? "text-foreground font-medium" : "text-muted-foreground"}`}
              >
                Payment
              </div>
              <div className={`${step === "review" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                Review
              </div>
            </div>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          {step === "shipping" && <CheckoutShipping shippingInfo={shippingInfo} onSubmit={handleShippingSubmit} />}

          {step === "payment" && (
            <CheckoutPayment
              paymentInfo={paymentInfo}
              onSubmit={handlePaymentSubmit}
              onBack={() => setStep("shipping")}
            />
          )}

          {step === "review" && (
            <CheckoutReview
              shippingInfo={shippingInfo}
              paymentInfo={paymentInfo}
              items={items}
              onBack={() => setStep("payment")}
              onPlaceOrder={handlePlaceOrder}
            />
          )}

          {step === "success" && <CheckoutSuccess />}
        </div>

        {/* Order Summary */}
        {step !== "success" && (
          <div>
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-20">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>

              {items.length > 0 && (
                <>
                  <div className="max-h-60 overflow-y-auto mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex py-3 border-b">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div className="flex justify-between text-base font-medium">
                            <h3 className="text-sm">{item.name}</h3>
                            <p className="ml-4 text-sm">${item.price.toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {item.color} / {item.size} × {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
