"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

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
}

export default function OrdersTab() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('token')
    : null

  useEffect(() => {
    fetch(`${apiUrl}/api/account/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then((data: Order[]) => setOrders(data))
      .finally(() => setLoading(false))
  }, [token])

  const byStatus = (status: string) =>
    orders.filter(o => o.status === status)

  const renderList = (list: Order[]) => {
    if (loading) return <p>Loading…</p>
    if (list.length === 0)
      return (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No orders found</p>
        </div>
      )

    return (
      <div className="space-y-6">
        {list.map(order => (
          <Card key={order.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h5 >Order #{order.id}</h5>
                  <CardDescription>
                    {new Date(order.created_at).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      order.status === 'Delivered' ? 'success' :
                      order.status === 'Processing' ? 'default' :
                      'destructive'
                    }
                  >
                    {order.status}
                  </Badge>
                  <span className="font-medium">
                    ${order.total_amount.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  {order.order_items.length} item
                  {order.order_items.length > 1 && 's'}
                </p>
                <Button
                  variant="link"
                  onClick={() =>
                    setExpandedOrder(
                      expandedOrder === order.id ? null : order.id
                    )
                  }
                >
                  {expandedOrder === order.id
                    ? 'Hide details'
                    : 'View details'}
                </Button>
              </div>

              {expandedOrder === order.id && (
                <div className="mt-4 space-y-4">
                  {order.order_items.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-16 h-16 border rounded overflow-hidden">
                        <Image
                          src={item.product_size_colors.product.main_image_url}
                          alt={item.product_size_colors.product.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">
                            {item.product_size_colors.product.name}
                          </p>
                          <p>${item.unit_price.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.product_size_colors.color.name} /{' '}
                          {item.product_size_colors.size}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* <div className="pt-4 border-t">
                    <Link href={`/account/orders/${order.id}`}>
                      <Button variant="outline">View order details</Button>
                    </Link>
                  </div> */}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <Tabs defaultValue="all" className="space-y-6">
      <TabsList>
        <TabsTrigger value="all">All Orders</TabsTrigger>
        <TabsTrigger value="processing">Processing</TabsTrigger>
        <TabsTrigger value="delivered">Delivered</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
      </TabsList>

      <TabsContent value="all">{renderList(orders)}</TabsContent>
      <TabsContent value="processing">
        {renderList(byStatus('Processing'))}
      </TabsContent>
      <TabsContent value="delivered">
        {renderList(byStatus('Delivered'))}
      </TabsContent>
      <TabsContent value="cancelled">
        {renderList(byStatus('Cancelled'))}
      </TabsContent>
    </Tabs>
  )
}
