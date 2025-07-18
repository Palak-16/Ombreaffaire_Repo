"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  orderId: string
  // order?: any   // optional full order data
}

export default function CheckoutSuccess({ orderId }: Props) {
  // Generate a random order number
  // aconst orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`
 const router = useRouter()
  const [order, setOrder] = useState(null)
  // const orderId = new URLSearchParams(window.location.search).get('orderId')
  const token = localStorage.getItem('token')
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
  useEffect(() => {
    if (!orderId) return
    fetch(`${apiUrl}/api/account/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(setOrder)
  }, [orderId])

  if (!order) return <p>Loading…</p>

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-green-200">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
          <CardDescription>Thank you for your purchase</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
             <p>Your order number is <strong>{orderId}</strong></p>
          </div>

          <div className="bg-muted p-4 rounded-md">
            <p className="text-sm">
              We've sent a confirmation email to <span className="font-medium">your-email@example.com</span> with your
              order details.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What happens next?</p>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>We're processing your order</li>
              <li>You'll receive an email when your order ships</li>
              <li>Your items will arrive in 3-5 business days</li>
              <li>You can track your order in your account</li>
            </ol>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button asChild className="w-full">
            <Link href="/account?tab=orders">Track Your Order</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/products">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
