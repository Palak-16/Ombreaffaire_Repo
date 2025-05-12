"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { cn } from "@/lib/utils"

// Sample product data
const product = {
  id: "1",
  name: "Ombré Silk Dress",
  price: 129.99,
  description:
    "A stunning silk dress featuring a beautiful ombré effect that transitions from cream to beige. This elegant piece is perfect for special occasions or evening events. The flowing silhouette and delicate fabric create a graceful, feminine look.",
  features: [
    "Made from 100% silk",
    "Gradual ombré effect from cream to beige",
    "Flowing silhouette",
    "Hidden side zipper",
    "Fully lined",
    "Dry clean only",
  ],
  images: [
    "/flowing-ombre-dress.png",
    "/flowing-beige-ombre-back.png",
    "/beige-ombre-silk-detail.png",
    "/flowing-ombre-silk.png",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: [
    { name: "Beige Ombré", value: "beige" },
    { name: "Rose Ombré", value: "rose" },
    { name: "Blue Ombré", value: "blue" },
  ],
  category: "Dresses",
}

// Sample related products
const relatedProducts = [
  {
    id: "2",
    name: "Gradient Blouse",
    price: 79.99,
    image: "/flowing-cream-gradient-blouse.png",
    category: "Tops",
  },
  {
    id: "3",
    name: "Faded Maxi Skirt",
    price: 89.99,
    image: "/faded-beige-maxi.png",
    category: "Bottoms",
  },
  {
    id: "4",
    name: "Tonal Blazer",
    price: 149.99,
    image: "/soft-cream-blazer.png",
    category: "Tops",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("beige")
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()
  const { toggleItem, isFavorite } = useFavorites()
  const favorite = isFavorite(product.id)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
    })
  }

  const handleToggleFavorite = () => {
    toggleItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      size: selectedSize,
      color: selectedColor,
    })
  }

  // Update the quantity handlers
  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/products" className="text-muted-foreground hover:text-foreground">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link
          href={`/category/${product.category.toLowerCase()}`}
          className="text-muted-foreground hover:text-foreground"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.images[activeImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={800}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "aspect-[3/4] overflow-hidden rounded-lg bg-muted cursor-pointer",
                  activeImage === index ? "ring-2 ring-primary" : "",
                )}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  width={150}
                  height={200}
                  className="h-full w-full object-cover object-center hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-medium mt-2">${product.price.toFixed(2)}</p>

          <div className="mt-8">
            <h2 className="text-sm font-medium mb-2">Color</h2>
            <RadioGroup
              defaultValue="beige"
              className="flex gap-3"
              value={selectedColor}
              onValueChange={setSelectedColor}
            >
              {product.colors.map((color) => (
                <div key={color.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={color.value} id={`color-${color.value}`} className="peer sr-only" />
                  <Label
                    htmlFor={`color-${color.value}`}
                    className="flex flex-col items-center gap-1 rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span
                      className={`h-8 w-8 rounded-full bg-${color.value === "beige" ? "amber-100" : color.value === "rose" ? "rose-200" : "blue-100"}`}
                    />
                    <span className="text-xs">{color.name}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium mb-2">Size</h2>
            <RadioGroup
              defaultValue="M"
              className="flex flex-wrap gap-3"
              value={selectedSize}
              onValueChange={setSelectedSize}
            >
              {product.sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Link href="/size-guide" className="text-sm text-muted-foreground hover:text-foreground mt-2 inline-block">
              Size Guide
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium mb-2">Quantity</h2>
            <div className="flex items-center border rounded-md w-32">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none" onClick={decreaseQuantity}>
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="flex-1 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none" onClick={increaseQuantity}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={cn("h-12 w-12", favorite ? "text-red-500" : "")}
                onClick={handleToggleFavorite}
              >
                <Heart className={cn("h-5 w-5", favorite ? "fill-current" : "")} />
                <span className="sr-only">{favorite ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="description" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <div className="text-muted-foreground">
                <p className="mb-2">Free standard shipping on all orders over $100.</p>
                <p className="mb-2">Express shipping available for an additional fee.</p>
                <p>Returns accepted within 30 days of delivery. Item must be unworn with original tags attached.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
