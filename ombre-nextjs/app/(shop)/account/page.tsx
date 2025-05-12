"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, User, ShoppingBag, MapPin, CreditCard, Heart, Bell } from "lucide-react"
import ProfileTab from "@/components/account/profile-tab"
import OrdersTab from "@/components/account/orders-tab"
import AddressesTab from "@/components/account/addresses-tab"
import WishlistTab from "@/components/account/wishlist-tab"
import PaymentMethodsTab from "@/components/account/payment-methods-tab"
import NotificationsTab from "@/components/account/notifications-tab"
import AccountSettingsTab from "@/components/account/account-settings-tab"

export default function AccountPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/login")
    }, 1000)
  }

  // Mock user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "/diverse-group-city.png",
    memberSince: "March 2023",
    ordersCount: 5,
    wishlistCount: 3,
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Account Sidebar */}
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <p>Member since {user.memberSince}</p>
                <p className="mt-1">{user.ordersCount} orders placed</p>
              </div>
              <Button variant="outline" onClick={handleLogout} disabled={isLoading} className="w-full mt-4">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Account Content */}
        <div className="flex-1">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Recent Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {user.ordersCount > 0 ? (
                      <div className="space-y-4">
                        <div className="border-b pb-2">
                          <p className="font-medium">Order #ORD123456</p>
                          <p className="text-sm text-muted-foreground">March 15, 2023</p>
                          <p className="text-sm mt-1">
                            Status: <span className="text-green-600">Delivered</span>
                          </p>
                        </div>
                        <div className="border-b pb-2">
                          <p className="font-medium">Order #ORD789012</p>
                          <p className="text-sm text-muted-foreground">February 28, 2023</p>
                          <p className="text-sm mt-1">
                            Status: <span className="text-green-600">Delivered</span>
                          </p>
                        </div>
                        <Button variant="link" className="px-0" asChild>
                          <a href="#orders" onClick={() => document.querySelector('[data-value="orders"]')?.click()}>
                            View all orders
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground">No orders yet</p>
                        <Button variant="link" asChild className="mt-2">
                          <a href="/products">Start shopping</a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {user.wishlistCount > 0 ? (
                      <div className="space-y-4">
                        <p className="text-sm">You have {user.wishlistCount} items in your wishlist</p>
                        <Button variant="link" className="px-0" asChild>
                          <a
                            href="#wishlist"
                            onClick={() => document.querySelector('[data-value="wishlist"]')?.click()}
                          >
                            View wishlist
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground">Your wishlist is empty</p>
                        <Button variant="link" asChild className="mt-2">
                          <a href="/products">Discover products</a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Default Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm">
                      <p>Jane Doe</p>
                      <p>123 Main Street</p>
                      <p>Apt 4B</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                    </div>
                    <Button variant="link" className="px-0 mt-4" asChild>
                      <a href="#addresses" onClick={() => document.querySelector('[data-value="addresses"]')?.click()}>
                        Manage addresses
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Payment Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center text-white font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium">•••• •••• •••• 3456</p>
                          <p className="text-sm text-muted-foreground">Expires 05/25</p>
                        </div>
                      </div>
                      <Button variant="link" className="px-0" asChild>
                        <a href="#payment" onClick={() => document.querySelector('[data-value="payment"]')?.click()}>
                          Manage payment methods
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Order updates</p>
                        <span className="text-sm text-green-600">Enabled</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Promotions and sales</p>
                        <span className="text-sm text-red-600">Disabled</span>
                      </div>
                      <Button variant="link" className="px-0" asChild>
                        <a href="#settings" onClick={() => document.querySelector('[data-value="settings"]')?.click()}>
                          Manage notifications
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <OrdersTab />
            </TabsContent>

            <TabsContent value="profile">
              <ProfileTab />
            </TabsContent>

            <TabsContent value="addresses">
              <AddressesTab />
            </TabsContent>

            <TabsContent value="payment">
              <PaymentMethodsTab />
            </TabsContent>

            <TabsContent value="wishlist">
              <WishlistTab />
            </TabsContent>

            <TabsContent value="settings">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <NotificationsTab />
                <AccountSettingsTab />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
