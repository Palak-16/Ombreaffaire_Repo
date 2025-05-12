"use client"

import { useState } from "react"
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
  MoreHorizontal,
  Search,
  UserPlus,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample customers data
const customers = [
  {
    id: "CUST001",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "/diverse-group-city.png",
    status: "Active",
    orders: 5,
    totalSpent: 599.95,
    lastOrder: "2023-03-15",
  },
  {
    id: "CUST002",
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "/placeholder.svg?key=jsmith",
    status: "Active",
    orders: 3,
    totalSpent: 249.97,
    lastOrder: "2023-03-10",
  },
  {
    id: "CUST003",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    avatar: "/placeholder.svg?key=ejohnson",
    status: "Active",
    orders: 2,
    totalSpent: 179.98,
    lastOrder: "2023-03-05",
  },
  {
    id: "CUST004",
    name: "Michael Brown",
    email: "michael.b@example.com",
    avatar: "/placeholder.svg?key=mbrown",
    status: "Inactive",
    orders: 1,
    totalSpent: 99.99,
    lastOrder: "2023-02-20",
  },
  {
    id: "CUST005",
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    avatar: "/placeholder.svg?key=swilson",
    status: "Active",
    orders: 4,
    totalSpent: 349.96,
    lastOrder: "2023-02-15",
  },
]

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter customers based on search query
  const filteredCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  // Pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)
  const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Customers</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
          <CardDescription>View and manage your customer base.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Last Order</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                            <AvatarFallback>{customer.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-xs text-muted-foreground">{customer.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            customer.status === "Active"
                              ? "border-green-500 text-green-500"
                              : "border-red-500 text-red-500"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.orders}</TableCell>
                      <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                      <TableCell>{customer.lastOrder}</TableCell>
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
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Orders</DropdownMenuItem>
                            <DropdownMenuItem>Send Email</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedCustomers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No customers found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Pagination */}
          {filteredCustomers.length > 0 && (
            <div className="flex items-center justify-end space-x-2 py-4">
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
