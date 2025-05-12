"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export default function NotificationsTab() {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    shipping: true,
    productUpdates: false,
    promotions: false,
    newsletter: true,
  })

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          Notification Preferences
        </CardTitle>
        <CardDescription>Manage how we communicate with you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="orderUpdates" className="font-medium">
                Order Updates
              </Label>
              <p className="text-sm text-muted-foreground">Receive notifications about your order status</p>
            </div>
            <Switch
              id="orderUpdates"
              checked={notifications.orderUpdates}
              onCheckedChange={() => handleToggle("orderUpdates")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="shipping" className="font-medium">
                Shipping Updates
              </Label>
              <p className="text-sm text-muted-foreground">Get notified about shipping and delivery status</p>
            </div>
            <Switch id="shipping" checked={notifications.shipping} onCheckedChange={() => handleToggle("shipping")} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="productUpdates" className="font-medium">
                Product Updates
              </Label>
              <p className="text-sm text-muted-foreground">Be informed about new products and collections</p>
            </div>
            <Switch
              id="productUpdates"
              checked={notifications.productUpdates}
              onCheckedChange={() => handleToggle("productUpdates")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="promotions" className="font-medium">
                Promotions and Sales
              </Label>
              <p className="text-sm text-muted-foreground">Receive notifications about discounts and special offers</p>
            </div>
            <Switch
              id="promotions"
              checked={notifications.promotions}
              onCheckedChange={() => handleToggle("promotions")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="newsletter" className="font-medium">
                Newsletter
              </Label>
              <p className="text-sm text-muted-foreground">Subscribe to our monthly newsletter</p>
            </div>
            <Switch
              id="newsletter"
              checked={notifications.newsletter}
              onCheckedChange={() => handleToggle("newsletter")}
            />
          </div>
        </div>

        <Button className="w-full">Save preferences</Button>
      </CardContent>
    </Card>
  )
}
