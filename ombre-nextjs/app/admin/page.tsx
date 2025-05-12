"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/charts"
import { ArrowUpIcon, DollarSign, Package, ShoppingCart, Users } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your store performance and analytics.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-green-500 flex items-center">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">356</div>
            <p className="text-xs text-green-500 flex items-center">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <p className="text-xs text-green-500 flex items-center">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              +18.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-green-500 flex items-center">
              <ArrowUpIcon className="mr-1 h-3 w-3" />
              +4.3% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue for the current year.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
              <CardDescription>Distribution of sales across product categories.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Analytics</CardTitle>
              <CardDescription>Customer acquisition and retention metrics.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <LineChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Showing the 5 most recent orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-2">Order ID</th>
                  <th className="text-left font-medium p-2">Customer</th>
                  <th className="text-left font-medium p-2">Status</th>
                  <th className="text-left font-medium p-2">Date</th>
                  <th className="text-right font-medium p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "ORD-001",
                    customer: "Sarah Johnson",
                    status: "Delivered",
                    date: "2023-06-20",
                    amount: "$129.99",
                  },
                  {
                    id: "ORD-002",
                    customer: "Michael Chen",
                    status: "Processing",
                    date: "2023-06-19",
                    amount: "$89.99",
                  },
                  {
                    id: "ORD-003",
                    customer: "Emma Davis",
                    status: "Shipped",
                    date: "2023-06-18",
                    amount: "$249.99",
                  },
                  {
                    id: "ORD-004",
                    customer: "James Wilson",
                    status: "Processing",
                    date: "2023-06-17",
                    amount: "$79.99",
                  },
                  {
                    id: "ORD-005",
                    customer: "Olivia Martinez",
                    status: "Delivered",
                    date: "2023-06-16",
                    amount: "$159.99",
                  },
                ].map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="p-2">{order.id}</td>
                    <td className="p-2">{order.customer}</td>
                    <td className="p-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-2">{order.date}</td>
                    <td className="p-2 text-right">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
