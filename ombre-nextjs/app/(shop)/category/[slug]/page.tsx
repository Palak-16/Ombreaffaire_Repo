"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product-card";
import { ChevronRight, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  id: string;
  name: string;
  slug: string;
  image_url?: string;
}

export default function CategoryPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const { slug } = useParams() as { slug: string };

  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "Products",
    slug: "",
    image_url: "/placeholder.svg",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catRes = await fetch(`${apiUrl}/api/categories`);
        const catJson = await catRes.json();
        const current = catJson.categories.find((c: Category) => c.slug === slug);
        if (!current) return;

        setCategory(current);

        const prodRes = await fetch(
          `${apiUrl}/api/products/display-by-category?category=${slug}`
        );
        const prodJson = await prodRes.json();
        setProducts(prodJson.products || []);
      } catch (err) {
        console.error("Error loading category or products:", err);
      }
    };

    fetchData();
  }, [slug]);

  // Dummy data for UI-only filter rendering
  const allSizes = ["S", "M", "L", "XL"];
  const allColors = ["Black", "White", "Red", "Blue"];

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
        <div className="relative h-[40vh] overflow-hidden">
          <Image
            src={category.image_url || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
              {category.name}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md max-w-2xl mx-auto">
              Browse our curated selection.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm mb-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <span className="font-medium">{category.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden w-full mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter Products
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                  <SheetDescription>
                    Refine your product selection
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  {/* Size Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-4">Size</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allSizes.map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox id={`size-${size}`} />
                          <Label htmlFor={`size-${size}`} className="text-sm">
                            {size}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Color Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-4">Color</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allColors.map((color) => (
                        <div key={color} className="flex items-center space-x-2">
                          <Checkbox id={`color-${color}`} />
                          <Label htmlFor={`color-${color}`} className="text-sm">
                            {color}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium mb-4">Filter Products</h3>

              {/* Size Filter */}
              <div>
                <h3 className="text-sm font-medium mb-4">Size</h3>
                <div className="space-y-2">
                  {allSizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox id={`desktop-size-${size}`} />
                      <Label htmlFor={`desktop-size-${size}`} className="text-sm">
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Color Filter */}
              <div>
                <h3 className="text-sm font-medium mb-4">Color</h3>
                <div className="space-y-2">
                  {allColors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox id={`desktop-color-${color}`} />
                      <Label htmlFor={`desktop-color-${color}`} className="text-sm">
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                {products.length} products
              </p>
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <Select disabled>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Please check back later for updates in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
