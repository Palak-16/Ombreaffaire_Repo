"use client";

import Image from "next/image";
import { Filter, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/product-card";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const categories = ["All", "Dresses", "Tops", "Bottoms", "Accessories"];
const sortOptions = [
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Popularity",
];
const priceRanges = [
  "All",
  "Under ₹1000",
  "₹1000 - ₹3000",
  "₹3000 - ₹5000",
  "Over ₹5000",
];

export default function ProductsPage() {
 const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/products/display`);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on search query, category, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    let matchesPriceRange = true;
    if (selectedPriceRange === "Under $50") {
      matchesPriceRange = product.price < 50;
    } else if (selectedPriceRange === "$50 - $100") {
      matchesPriceRange = product.price >= 50 && product.price <= 100;
    } else if (selectedPriceRange === "$100 - $150") {
      matchesPriceRange = product.price > 100 && product.price <= 150;
    } else if (selectedPriceRange === "Over $150") {
      matchesPriceRange = product.price > 150;
    }

    return matchesSearch && matchesCategory && matchesPriceRange;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price: Low to High") {
      return a.price - b.price;
    } else if (sortBy === "Price: High to Low") {
      return b.price - a.price;
    }
    // For "Newest" and "Popularity", we would normally use timestamps or popularity metrics
    // Here we'll just use the default order for simplicity
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="relative mb-8 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
        <Image
          src="/product banner.png"
          alt="Products Collection"
          width={1200}
          height={400}
          className="h-[200px] md:h-[300px] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20 p-6 md:p-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Our Collection
            </h1>
            <p className="text-sm md:text-base max-w-md">
              Discover our curated selection of elegant pieces designed for the
              modern woman.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down your product search with these filters.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="grid gap-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category)}
                        />
                        <Label htmlFor={`category-${category}`}>
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <RadioGroup
                    value={selectedPriceRange}
                    onValueChange={setSelectedPriceRange}
                  >
                    {priceRanges.map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <RadioGroupItem value={range} id={`price-${range}`} />
                        <Label htmlFor={`price-${range}`}>{range}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="hidden md:flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter:</span>
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
