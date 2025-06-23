"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Eye, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Product = {
  id: string;
  description: string; // Assuming description is part of the product data
  name: string;
  sku: string;
  image: string;
  main_image_url: string;
  category: string;
  price: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

export default function ProductsPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/admin/products`);
        const data = await res.json();
        setProducts(data.products); // expected response shape
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleDelete = async (productId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`${apiUrl}/api/admin/products/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete product");
      }

      // ✅ Only update frontend state if delete was successful
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete product");
    }
  };

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
          <CardDescription>
            Manage your product inventory, edit details, and monitor stock
            levels.
          </CardDescription>
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
                            <div className="text-xs text-muted-foreground">
                              {product.sku}
                            </div>

                            {/* ✅ TEMPORARY: Render description to verify list styles */}
                            <div
                              className="prose"
                              dangerouslySetInnerHTML={{
                                __html: product.description,
                              }}
                            />
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
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleDelete(product.id)}
                            >
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
  );
}
