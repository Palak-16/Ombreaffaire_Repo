"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"

// Sample category data
const categoryData = {
  "new-arrivals": {
    title: "New Arrivals",
    description: "Discover our latest collection of elegant fashion pieces.",
    image: "/sophisticated-style-launch.png",
  },
  dresses: {
    title: "Dresses",
    description: "Elegant dresses for every occasion.",
    image: "/flowing-silhouettes.png",
  },
  tops: {
    title: "Tops",
    description: "Stylish tops to elevate your wardrobe.",
    image: "/sophisticated-silhouettes.png",
  },
  bottoms: {
    title: "Bottoms",
    description: "Sophisticated bottoms for a complete look.",
    image: "/sophisticated-bottoms-display.png",
  },
  accessories: {
    title: "Accessories",
    description: "Complete your outfit with our elegant accessories.",
    image: "/curated-elegance.png",
  },
  sale: {
    title: "Sale",
    description: "Special offers on selected items.",
    image: "/chic-sale-display.png",
  },
}

// Sample products data
const allProducts = [
  {
    id: "1",
    name: "Ombré Silk Dress",
    price: 129.99,
    image: "/flowing-ombre-silk.png",
    category: "Dresses",
    isNew: true,
    isSale: false,
    colors: ["Beige", "Rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Gradient Blouse",
    price: 79.99,
    image: "/flowing-cream-gradient-blouse.png",
    category: "Tops",
    isNew: true,
    isSale: false,
    colors: ["Cream", "Blue"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "3",
    name: "Faded Maxi Skirt",
    price: 89.99,
    image: "/faded-beige-maxi.png",
    category: "Bottoms",
    isNew: false,
    isSale: true,
    colors: ["Beige", "Black"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "4",
    name: "Tonal Blazer",
    price: 149.99,
    image: "/soft-cream-blazer.png",
    category: "Tops",
    isNew: false,
    isSale: false,
    colors: ["Cream", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "5",
    name: "Gradient Evening Gown",
    price: 199.99,
    image: "/shimmering-emerald-gown.png",
    category: "Dresses",
    isNew: true,
    isSale: false,
    colors: ["Emerald", "Navy"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "6",
    name: "Pearl Drop Earrings",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300&query=pearl drop earrings",
    category: "Accessories",
    isNew: false,
    isSale: true,
    colors: ["Pearl", "Gold"],
    sizes: ["One Size"],
  },
  {
    id: "7",
    name: "Silk Scarf",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=300&query=elegant silk scarf beige",
    category: "Accessories",
    isNew: true,
    isSale: false,
    colors: ["Beige", "Blue", "Pink"],
    sizes: ["One Size"],
  },
  {
    id: "8",
    name: "Wide Leg Trousers",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300&query=elegant wide leg trousers beige",
    category: "Bottoms",
    isNew: false,
    isSale: false,
    colors: ["Beige", "Black", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const category = categoryData[slug as keyof typeof categoryData] || {
    title: "Products",
    description: "Browse our collection of elegant fashion pieces.",
    image: "/placeholder.svg?height=600&width=1200&query=elegant fashion collection",
  }

  const [products, setProducts] = useState<typeof allProducts>([])
  const [sortOption, setSortOption] = useState("newest")
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])

  // Filter products based on category and other filters
  useEffect(() => {
    let filteredProducts = [...allProducts]

    // Filter by category
    if (slug === "new-arrivals") {
      filteredProducts = filteredProducts.filter((product) => product.isNew)
    } else if (slug === "sale") {
      filteredProducts = filteredProducts.filter((product) => product.isSale)
    } else if (slug !== "all") {
      // Convert slug to category name (e.g., "tops" to "Tops")
      const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)
      filteredProducts = filteredProducts.filter((product) => product.category === categoryName)
    }

    // Apply size filter
    if (selectedSizes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.sizes.some((size) => selectedSizes.includes(size)),
      )
    }

    // Apply color filter
    if (selectedColors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors.some((color) => selectedColors.includes(color)),
      )
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1],
    )

    // Apply sorting
    if (sortOption === "price-low-high") {
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sortOption === "price-high-low") {
      filteredProducts.sort((a, b) => b.price - a.price)
    } else if (sortOption === "newest") {
      filteredProducts.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
    }

    setProducts(filteredProducts)
  }, [slug, sortOption, selectedSizes, selectedColors, priceRange])

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  // Get unique colors and sizes from all products
  const allColors = Array.from(new Set(allProducts.flatMap((product) => product.colors)))
  const allSizes = Array.from(new Set(allProducts.flatMap((product) => product.sizes)))

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
        <div className="relative h-[40vh] overflow-hidden">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">{category.title}</h1>
            <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md max-w-2xl mx-auto">
              {category.description}
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
          <span className="font-medium">{category.title}</span>
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
                  <SheetDescription>Refine your product selection</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <div className="space-y-6">
                    {/* Size Filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-4">Size</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {allSizes.map((size) => (
                          <div key={size} className="flex items-center space-x-2">
                            <Checkbox
                              id={`size-${size}`}
                              checked={selectedSizes.includes(size)}
                              onCheckedChange={() => toggleSize(size)}
                            />
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
                            <Checkbox
                              id={`color-${color}`}
                              checked={selectedColors.includes(color)}
                              onCheckedChange={() => toggleColor(color)}
                            />
                            <Label htmlFor={`color-${color}`} className="text-sm">
                              {color}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Price Range Filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-4">Price Range</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">${priceRange[0]}</span>
                          <span className="text-sm">${priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          step="10"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Filter Products</h3>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-sm font-medium mb-4">Size</h3>
                <div className="space-y-2">
                  {allSizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`desktop-size-${size}`}
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={() => toggleSize(size)}
                      />
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
                      <Checkbox
                        id={`desktop-color-${color}`}
                        checked={selectedColors.includes(color)}
                        onCheckedChange={() => toggleColor(color)}
                      />
                      <Label htmlFor={`desktop-color-${color}`} className="text-sm">
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Price Range Filter */}
              <div>
                <h3 className="text-sm font-medium mb-4">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">{products.length} products</p>
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <Select value={sortOption} onValueChange={setSortOption}>
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
                  Try adjusting your filters to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSelectedSizes([])
                    setSelectedColors([])
                    setPriceRange([0, 200])
                  }}
                >
                  Clear all filters
                </Button>
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
  )
}
