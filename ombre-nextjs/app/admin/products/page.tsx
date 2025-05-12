"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Edit, Eye, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock product data
const products = [
  {
    id: "PROD-001",
    name: "Flowing Ombré Dress",
    image: "/flowing-ombre-dress.png",
    category: "Dresses",
    price: "$99.99",
    stock: 45,
    status: "In Stock",
  },
  {
    id: "PROD-002",
    name: "Soft Cream Blazer",
    image: "/soft-cream-blazer.png",
    category: "Outerwear",
    price: "$129.99",
    stock: 32,
    status: "In Stock",
  },
  {
    id: "PROD-003",
    name: "Faded Beige Maxi",
    image: "/faded-beige-maxi.png",
    category: "Dresses",
    price: "$89.99",
    stock: 18,
    status: "Low Stock",
  },
  {
    id: "PROD-004",
    name: "Elegant Pearl Drops",
    image: "/elegant-pearl-drops.png",
    category: "Accessories",
    price: "$49.99",
    stock: 56,
    status: "In Stock",
  },
  {
    id: "PROD-005",
    name: "Draped Beige Silk",
    image: "/draped-beige-silk.png",
    category: "Tops",
    price: "$79.99",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "PROD-006",
    name: "Flowing Cream Gradient Blouse",
    image: "/flowing-cream-gradient-blouse.png",
    category: "Tops",
    price: "$69.99",
    stock: 27,
    status: "In Stock",
  },
  {
    id: "PROD-007",
    name: "Shimmering Emerald Gown",
    image: "/shimmering-emerald-gown.png",
    category: "Dresses",
    price: "$149.99",
    stock: 12,
    status: "Low Stock",
  },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
          <CardDescription>Manage your product inventory, edit details, and monitor stock levels.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
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
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-md">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{product.name}</div>
                            <div className="text-xs text-muted-foreground">{product.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            product.status === "In Stock"
                              ? "bg-green-100 text-green-700"
                              : product.status === "Low Stock"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {product.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/products/${product.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/products/${product.id}/edit`}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredProducts.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No products found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
