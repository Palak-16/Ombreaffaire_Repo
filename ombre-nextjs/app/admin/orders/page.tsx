"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Eye,
  MoreHorizontal,
  Search,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample orders data
const orders = [
  {
    id: "ORD123456",
    customer: {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      avatar: "/diverse-group-city.png",
    },
    date: "2023-03-15",
    status: "Delivered",
    total: 229.98,
    items: 2,
  },
  {
    id: "ORD789012",
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "/placeholder.svg?key=jsmith",
    },
    date: "2023-03-14",
    status: "Processing",
    total: 149.99,
    items: 1,
  },
  {
    id: "ORD345678",
    customer: {
      name: "Emily Johnson",
      email: "emily.j@example.com",
      avatar: "/placeholder.svg?key=ejohnson",
    },
    date: "2023-03-13",
    status: "Shipped",
    total: 89.99,
    items: 1,
  },
  {
    id: "ORD901234",
    customer: {
      name: "Michael Brown",
      email: "michael.b@example.com",
      avatar: "/placeholder.svg?key=mbrown",
    },
    date: "2023-03-12",
    status: "Processing",
    total: 199.99,
    items: 3,
  },
  {
    id: "ORD567890",
    customer: {
      name: "Sarah Wilson",
      email: "sarah.w@example.com",
      avatar: "/placeholder.svg?key=swilson",
    },
    date: "2023-03-11",
    status: "Delivered",
    total: 129.99,
    items: 1,
  },
  {
    id: "ORD234567",
    customer: {
      name: "David Lee",
      email: "david.l@example.com",
      avatar: "/placeholder.svg?key=dlee",
    },
    date: "2023-03-10",
    status: "Cancelled",
    total: 79.99,
    items: 1,
  },
  {
    id: "ORD890123",
    customer: {
      name: "Lisa Taylor",
      email: "lisa.t@example.com",
      avatar: "/placeholder.svg?key=ltaylor",
    },
    date: "2023-03-09",
    status: "Delivered",
    total: 159.99,
    items: 2,
  },
  {
    id: "ORD456789",
    customer: {
      name: "Robert Garcia",
      email: "robert.g@example.com",
      avatar: "/placeholder.svg?key=rgarcia",
    },
    date: "2023-03-08",
    status: "Refunded",
    total: 99.99,
    items: 1,
  },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter orders based on search query and filters
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Orders</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>View and manage customer orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-auto">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Processing">Processing</SelectItem>
                  <SelectItem value="Shipped">Shipped</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                  <SelectItem value="Refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile view - card style for each order */}
          <div className="md:hidden space-y-4">
            {paginatedOrders.map((order) => (
              <div key={order.id} className="border rounded-md p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{order.id}</span>
                  <Badge
                    variant="outline"
                    className={
                      order.status === "Delivered"
                        ? "border-green-500 text-green-500"
                        : order.status === "Processing"
                          ? "border-blue-500 text-blue-500"
                          : order.status === "Shipped"
                            ? "border-amber-500 text-amber-500"
                            : order.status === "Cancelled"
                              ? "border-red-500 text-red-500"
                              : "border-purple-500 text-purple-500"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                    <AvatarFallback>{order.customer.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{order.customer.name}</div>
                    <div className="text-xs text-muted-foreground">{order.customer.email}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Date: {order.date}</span>
                  <span>Items: {order.items}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">${order.total.toFixed(2)}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/orders/${order.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                      <DropdownMenuItem>Send Invoice</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view - table style */}
          <div className="hidden md:block rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                            <AvatarFallback>{order.customer.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{order.customer.name}</div>
                            <div className="text-xs text-muted-foreground">{order.customer.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            order.status === "Delivered"
                              ? "border-green-500 text-green-500"
                              : order.status === "Processing"
                                ? "border-blue-500 text-blue-500"
                                : order.status === "Shipped"
                                  ? "border-amber-500 text-amber-500"
                                  : order.status === "Cancelled"
                                    ? "border-red-500 text-red-500"
                                    : "border-purple-500 text-purple-500"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/orders/${order.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                            <DropdownMenuItem>Send Invoice</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedOrders.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No orders found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Pagination */}
          {filteredOrders.length > 0 && (
            <div className="flex flex-wrap items-center justify-end space-x-2 py-4">
              <Button variant="outline" size="icon" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
