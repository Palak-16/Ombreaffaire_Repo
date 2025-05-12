"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Package, Truck, CheckCircle, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock order data
const order = {
  id: "ORD123456",
  date: "March 15, 2023",
  status: "Delivered",
  total: 229.98,
  subtotal: 209.98,
  shipping: 0,
  tax: 20.0,
  paymentMethod: "Visa ending in 3456",
  shippingAddress: {
    name: "Jane Doe",
    address1: "123 Main Street",
    address2: "Apt 4B",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
    phone: "(123) 456-7890",
  },
  items: [
    {
      id: "1",
      name: "Ombré Silk Dress",
      price: 129.99,
      quantity: 1,
      image: "/flowing-ombre-silk.png",
      size: "M",
      color: "Beige Ombré",
    },
    {
      id: "2",
      name: "Gradient Blouse",
      price: 79.99,
      quantity: 1,
      image: "/flowing-cream-gradient-blouse.png",
      size: "S",
      color: "Cream",
    },
  ],
  timeline: [
    {
      status: "Order Placed",
      date: "March 10, 2023",
      time: "10:30 AM",
      completed: true,
    },
    {
      status: "Processing",
      date: "March 11, 2023",
      time: "9:15 AM",
      completed: true,
    },
    {
      status: "Shipped",
      date: "March 12, 2023",
      time: "2:45 PM",
      completed: true,
      trackingNumber: "TRK789012345",
      carrier: "FedEx",
    },
    {
      status: "Out for Delivery",
      date: "March 14, 2023",
      time: "8:20 AM",
      completed: true,
    },
    {
      status: "Delivered",
      date: "March 15, 2023",
      time: "3:10 PM",
      completed: true,
    },
  ],
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("details")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/account" className="text-muted-foreground hover:text-foreground">
          Account
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/account?tab=orders" className="text-muted-foreground hover:text-foreground">
          Orders
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">Order #{params.id}</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/account?tab=orders">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Order #{order.id}</h1>
          <p className="text-muted-foreground">Placed on {order.date}</p>
        </div>
        <Badge
          className={order.status === "Delivered" ? "bg-green-500" : "bg-blue-500"}
          className="text-white px-3 py-1"
        >
          {order.status}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList>
          <TabsTrigger value="details">Order Details</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="invoice">Invoice</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-6">
                    {order.items.map((item) => (
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
                              <Link href={`/products/${item.id}`} className="hover:underline">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.color} / {item.size}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          <div className="mt-2 flex">
                            <Button variant="link" size="sm" className="h-auto p-0 text-sm">
                              Buy Again
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-1">
                      <p>{order.shippingAddress.name}</p>
                      <p>{order.shippingAddress.address1}</p>
                      {order.shippingAddress.address2 && <p>{order.shippingAddress.address2}</p>}
                      <p>
                        {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
                      </p>
                      <p>{order.shippingAddress.country}</p>
                      <p className="pt-2">{order.shippingAddress.phone}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-4">
                      <div>
                        <p className="font-medium">Payment Method</p>
                        <p className="text-muted-foreground">{order.paymentMethod}</p>
                      </div>
                      <div>
                        <p className="font-medium">Billing Address</p>
                        <p className="text-muted-foreground">Same as shipping address</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${order.subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${order.tax.toFixed(2)}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <Button className="w-full">Download Receipt</Button>
                    <Button variant="outline" className="w-full">
                      Need Help?
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tracking">
          <Card>
            <CardHeader>
              <CardTitle>Order Tracking</CardTitle>
              <CardDescription>Track the status of your order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted" />
                <ol className="space-y-8">
                  {order.timeline.map((event, index) => (
                    <li key={index} className="relative pl-10">
                      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border">
                        {event.status === "Order Placed" ? (
                          <Package className="h-4 w-4" />
                        ) : event.status === "Shipped" || event.status === "Out for Delivery" ? (
                          <Truck className="h-4 w-4" />
                        ) : event.status === "Delivered" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{event.status}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                        {event.trackingNumber && (
                          <div className="mt-2">
                            <p className="text-sm">
                              Tracking Number: <span className="font-medium">{event.trackingNumber}</span>
                            </p>
                            <p className="text-sm">Carrier: {event.carrier}</p>
                            <Button variant="link" size="sm" className="h-auto p-0 text-sm mt-1">
                              Track Package
                            </Button>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoice">
          <Card>
            <CardHeader>
              <CardTitle>Invoice</CardTitle>
              <CardDescription>Invoice details for your order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-lg">OMBRÉ affaire</h3>
                    <p className="text-sm text-muted-foreground">123 Fashion Street</p>
                    <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold">INVOICE</h3>
                    <p className="text-sm text-muted-foreground">Invoice #: INV-{order.id}</p>
                    <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Bill To:</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>{order.shippingAddress.name}</p>
                    <p>{order.shippingAddress.address1}</p>
                    {order.shippingAddress.address2 && <p>{order.shippingAddress.address2}</p>}
                    <p>
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
                    </p>
                    <p>{order.shippingAddress.country}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Order Details:</h3>
                  <table className="w-full text-sm">
                    <thead className="border-b">
                      <tr>
                        <th className="py-2 text-left">Item</th>
                        <th className="py-2 text-center">Quantity</th>
                        <th className="py-2 text-right">Price</th>
                        <th className="py-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="py-3">
                            <div>
                              <p>{item.name}</p>
                              <p className="text-muted-foreground">
                                {item.color} / {item.size}
                              </p>
                            </div>
                          </td>
                          <td className="py-3 text-center">{item.quantity}</td>
                          <td className="py-3 text-right">${item.price.toFixed(2)}</td>
                          <td className="py-3 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={3} className="pt-4 text-right">
                          Subtotal:
                        </td>
                        <td className="pt-4 text-right">${order.subtotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="pt-2 text-right">
                          Shipping:
                        </td>
                        <td className="pt-2 text-right">
                          {order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="pt-2 text-right">
                          Tax:
                        </td>
                        <td className="pt-2 text-right">${order.tax.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="pt-2 text-right font-bold">
                          Total:
                        </td>
                        <td className="pt-2 text-right font-bold">${order.total.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="text-center pt-4">
                  <Button>Download PDF</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
