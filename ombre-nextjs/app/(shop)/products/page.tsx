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
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/product-card";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useCategories } from "@/components/CategoriesContext";

const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low"];
const allSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

export default function ProductsPage() {
  
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const searchParams = useSearchParams();
  const router = useRouter();

  type Product = {
    id: string | number;
    [key: string]: any;
  };
  const [products, setProducts] = useState<Product[]>([]);
  type Category = { slug: string; name: string };
  const [allColors, setAllColors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceQuery, setPriceQuery] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [totalPages, setTotalPages] = useState(1);
  const currentPage = parseInt(searchParams.get("page") || "1");
  const selectedCategorySlug = searchParams.get("category") || "all";
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const filter = searchParams.get("filter") || null;
  const categories = useCategories();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = new URL(`${apiUrl}/api/products/display`);
        url.searchParams.set("page", currentPage.toString());
        url.searchParams.set("limit", "12");

        if (searchQuery.trim()) {
          url.searchParams.set("search", searchQuery.trim());
        }

        if (selectedCategorySlug !== "all") {
          url.searchParams.set("category", selectedCategorySlug);
        }

        if (priceQuery !== "All") {
          url.searchParams.set("price", priceQuery);
        }
        if (filter) {
        url.searchParams.set("filter", filter);  // ✅ Add this
      }
       if (selectedSizes.length > 0) {
  url.searchParams.set("size", selectedSizes.join(","));
}
if (selectedColors.length > 0) {
  url.searchParams.set("color", selectedColors.join(","));
}


        const res = await fetch(url.toString());
        const data = await res.json();
        setProducts(data.products || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [
    currentPage,
    selectedCategorySlug,
    searchQuery,
    priceQuery,
    selectedSizes,
    selectedColors,
  ]);

  useEffect(() => {
   fetch(`${apiUrl}/api/colors`)
      .then((res) => res.json())
      .then((json) => setAllColors(json.colors.map((c) => c.label)));
  }, []);

  const goToPage = (pageNum: number) => {
    router.push(`/products?category=${selectedCategorySlug}&page=${pageNum}`);
  };

  interface PageRange {
    (current: number, total: number): (number | string)[];
  }

  const getPageRange: PageRange = (current, total) => {
    const delta = 2;
    const range: (number | string)[] = [];

    for (
      let i = Math.max(2, current - delta);
      i <= Math.min(total - 1, current + delta);
      i++
    ) {
      range.push(i);
    }

    if (current - delta > 2) range.unshift("...");
    if (current + delta < total - 1) range.push("...");

    range.unshift(1);
    if (total > 1) range.push(total);

    return range;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-8 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
        <Image
          src="/all_product.png"
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
              Discover our carefully curated selection of elegant pieces designed for every shade of you.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="hidden lg:block w-64 space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium mb-4">Filter Products</h3>
            <div>
              <h3 className="text-sm font-medium mb-4">Size</h3>
              <div className="space-y-2">
                {allSizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={`desktop-size-${size}`}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={(checked) => {
                        setSelectedSizes((prev) =>
                          checked
                            ? [...prev, size]
                            : prev.filter((s) => s !== size)
                        );
                      }}
                    />

                    <Label htmlFor={`desktop-size-${size}`} className="text-sm">
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-medium mb-4">Color</h3>
              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                {allColors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={`desktop-color-${color}`}
                      checked={selectedColors.includes(color)}
                      onCheckedChange={(checked) => {
                        setSelectedColors((prev) =>
                          checked
                            ? [...prev, color]
                            : prev.filter((c) => c !== color)
                        );
                      }}
                    />

                    <Label
                      htmlFor={`desktop-color-${color}`}
                      className="text-sm"
                    >
                      {color}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-4">Price Range</h3>
              <div className="space-y-2">
                {[
                  "All",
                  "Under ₹1000",
                  "₹1000 - ₹3000",
                  "₹3000 - ₹5000",
                  "Over ₹5000",
                ].map((range) => (
                  <div key={range} className="flex items-center space-x-2">
                    <Checkbox
                      id={`price-${range}`}
                      checked={priceQuery === range}
                      onCheckedChange={() => setPriceQuery(range)}
                    />
                    <Label htmlFor={`price-${range}`} className="text-sm">
                      {range}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* Mobile Filter Drawer */}
          <div className="lg:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full max-w-[100vw] h-full overflow-y-auto"
              >
                <div className="flex justify-between items-center px-4 pt-4">
                  <div>
                    <SheetTitle className="text-lg font-semibold">
                      Filter Products
                    </SheetTitle>
                    <SheetDescription className="text-sm">
                      Refine your selection below.
                    </SheetDescription>
                  </div>
                  <SheetClose asChild>
                    <button className="text-xl font-bold px-2">×</button>
                  </SheetClose>
                </div>
                <div className="py-6 space-y-6">
                  {/* Size Filter */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Size</h3>
                    {allSizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-size-${size}`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={(checked) =>
                            setSelectedSizes((prev) =>
                              checked
                                ? [...prev, size]
                                : prev.filter((s) => s !== size)
                            )
                          }
                        />

                        <Label htmlFor={`mobile-size-${size}`}>{size}</Label>
                      </div>
                    ))}
                  </div>
                  <Separator />

                  {/* Color Filter */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Color</h3>
                    {allColors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-color-${color}`}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={(checked) =>
                            setSelectedColors((prev) =>
                              checked
                                ? [...prev, color]
                                : prev.filter((c) => c !== color)
                            )
                          }
                        />

                        <Label htmlFor={`mobile-color-${color}`}>{color}</Label>
                      </div>
                    ))}
                  </div>
                  <Separator />

                  {/* Price Filter */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Price Range</h3>
                    {[
                      "All",
                      "Under ₹1000",
                      "₹1000 - ₹3000",
                      "₹3000 - ₹5000",
                      "Over ₹5000",
                    ].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-price-${range}`}
                          checked={priceQuery === range}
                          onCheckedChange={() => setPriceQuery(range)}
                        />
                        <Label htmlFor={`mobile-price-${range}`}>{range}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Select
                value={selectedCategorySlug}
                onValueChange={(val) =>
                  router.push(`/products?category=${val}`)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
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

          {products.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Please check back later for updates in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => goToPage(currentPage - 1)}
                    />
                  </PaginationItem>
                )}

                {getPageRange(currentPage, totalPages).map((page, index) =>
                  page === "..." ? (
                    <PaginationItem key={index}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => goToPage(Number(page))}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext onClick={() => goToPage(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
}
