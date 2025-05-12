"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock order data
const orders = [
  {
    id: "ORD123456",
    date: "March 15, 2023",
    status: "Delivered",
    total: 229.98,
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
  },
  {
    id: "ORD789012",
    date: "February 28, 2023",
    status: "Delivered",
    total: 149.99,
    items: [
      {
        id: "4",
        name: "Tonal Blazer",
        price: 149.99,
        quantity: 1,
        image: "/soft-cream-blazer.png",
        size: "M",
        color: "Cream",
      },
    ],
  },
]

const processingOrders = []
const cancelledOrders = []

export default function OrdersTab() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  const toggleOrderDetails = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null)
    } else {
      setExpandedOrder(orderId)
    }
  }

  const renderOrderList = (orderList: typeof orders) => (
    <div className="space-y-6">
      {orderList.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No orders found</p>
        </div>
      ) : (
        orderList.map((order) => (
          <Card key={order.id}>
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <CardTitle className="text-base">Order #{order.id}</CardTitle>
                  <CardDescription>{order.date}</CardDescription>
                </div>
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <Badge
                    className={
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "Processing"
                          ? "bg-blue-500"
                          : "bg-red-500"
                    }
                  >
                    {order.status}
                  </Badge>
                  <span className="font-medium">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm">
                  {order.items.length} item{order.items.length > 1 ? "s" : ""}
                </p>
                <Button variant="link" onClick={() => toggleOrderDetails(order.id)} className="p-0 h-auto font-normal">
                  {expandedOrder === order.id ? "Hide details" : "View details"}
                </Button>
              </div>

              {expandedOrder === order.id && (
                <div className="mt-4 space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex space-x-4">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.color} / {item.size}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <Button asChild>
                      <Link href={`/account/orders/${order.id}`}>View order details</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )

  return (
    <Tabs defaultValue="all" className="space-y-6">
      <TabsList>
        <TabsTrigger value="all">All Orders</TabsTrigger>
        <TabsTrigger value="processing">Processing</TabsTrigger>
        <TabsTrigger value="delivered">Delivered</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
      </TabsList>

      <TabsContent value="all">{renderOrderList(orders)}</TabsContent>

      <TabsContent value="processing">{renderOrderList(processingOrders)}</TabsContent>

      <TabsContent value="delivered">{renderOrderList(orders)}</TabsContent>

      <TabsContent value="cancelled">{renderOrderList(cancelledOrders)}</TabsContent>
    </Tabs>
  )
}
