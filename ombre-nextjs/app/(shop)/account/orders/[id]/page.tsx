"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, Package, Truck, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

type OrderItem = {
  id: string
  quantity: number
  unit_price: number
  product_size_colors: {
    product: { name: string; main_image_url: string }
    size: string
    color: { name: string }
  }
}

type Order = {
  id: string
  total_amount: number
  status: string
  created_at: string
  order_items: OrderItem[]
  // If you have timeline data on the server, add it here:
  timeline?: Array<{
    status: string
    date: string
    time: string
    trackingNumber?: string
    carrier?: string
  }>
  // shipping / billing address fields:
  shipping_address: {
    name: string
    street: string
    address2?: string
    city: string
    state: string
    postal_code: string
    country: string
    phone: string
  }
  payment_method: string
  subtotal: number
  shipping: number
  tax: number
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params
  const [order, setOrder] = useState<Order | null>(null)
  const [tab, setTab] = useState<"details"|"tracking"|"invoice">("details")
  const token = typeof window !== "undefined" && localStorage.getItem("token")
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

  useEffect(() => {
    if (!id) return
    fetch(`${apiUrl}/api/account/orders?orderId=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.json())
      .then((data: Order) => setOrder(data))
      .catch(console.error)
  }, [id, token])

  if (!order) {
    return <p className="p-8 text-center">Loading…</p>
  }

  // derive some summary numbers:
  const subtotal = order.order_items.reduce(
    (sum, i) => sum + i.unit_price * i.quantity,
    0
  )
  const shipping = order.shipping
  const tax = order.tax
  const total = order.total_amount

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-4">
        <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <Link href="/account" className="text-muted-foreground hover:text-foreground">Account</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <Link href="/account?tab=orders" className="text-muted-foreground hover:text-foreground">Orders</Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <span className="font-medium">Order #{order.id}</span>
      </nav>

      <div className="flex justify-between items-center mb-8">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/account?tab=orders">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Orders
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Order #{order.id}</h1>
          <p className="text-muted-foreground">
            Placed on {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>
        <Badge
          variant={
            order.status === "Delivered"
              ? "success"
              : order.status === "Processing"
              ? "outline"
              : "destructive"
          }
        >
          {order.status}
        </Badge>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="space-y-8">
        <TabsList>
          <TabsTrigger value="details">Order Details</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="invoice">Invoice</TabsTrigger>
        </TabsList>

        {/* ── DETAILS TAB ───────────────────────────────────────── */}
        <TabsContent value="details">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Items</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {order.order_items.map(item => (
                    <div key={item.id} className="flex space-x-4">
                      <div className="w-24 h-24 border rounded overflow-hidden">
                        <Image
                          src={item.product_size_colors.product.main_image_url}
                          alt={item.product_size_colors.product.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{item.product_size_colors.product.name}</p>
                          <p>${item.unit_price.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.product_size_colors.color.name} / {item.product_size_colors.size}
                        </p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{order.shipping_address.name}</p>
                    <p>{order.shipping_address.street}</p>
                    {order.shipping_address.address2 && (
                      <p>{order.shipping_address.address2}</p>
                    )}
                    <p>
                      {order.shipping_address.city}, {order.shipping_address.state}{" "}
                      {order.shipping_address.postal_code}
                    </p>
                    <p>{order.shipping_address.country}</p>
                    <p className="mt-2">{order.shipping_address.phone}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">Method</p>
                    <p className="text-muted-foreground">{order.payment_method}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ── TRACKING TAB ──────────────────────────────────────── */}
        <TabsContent value="tracking">
          <Card>
            <CardHeader>
              <CardTitle>Order Tracking</CardTitle>
              <CardDescription>See status milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pl-10">
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-muted" />
                <ol className="space-y-8">
                  {order.timeline?.map((evt, i) => (
                    <li key={i} className="relative">
                      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border">
                        {evt.status === "Order Placed" ? (
                          <Package className="h-4 w-4" />
                        ) : evt.status === "Shipped" || evt.status === "Out for Delivery" ? (
                          <Truck className="h-4 w-4" />
                        ) : evt.status === "Delivered" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div className="ml-10">
                        <h3 className="font-medium">{evt.status}</h3>
                        <p className="text-sm text-muted-foreground">
                          {evt.date} at {evt.time}
                        </p>
                        {evt.trackingNumber && (
                          <p className="text-sm">
                            Tracking: <strong>{evt.trackingNumber}</strong> ({evt.carrier})
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── INVOICE TAB ──────────────────────────────────────── */}
        <TabsContent value="invoice">
          <Card>
            <CardHeader>
              <CardTitle>Invoice</CardTitle>
              <CardDescription>Download or print</CardDescription>
            </CardHeader>
            <CardContent>
              {/* replicate the invoice table from your mock, but using `order` */}
            </CardContent>
            <CardFooter>
              <Button>Download PDF</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
