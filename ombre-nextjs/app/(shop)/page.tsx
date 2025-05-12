"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Heart, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"

export default function Home() {
  const { addItem } = useCart()
  const { addFavorite } = useFavorites()
  const [activeTab, setActiveTab] = useState("new-arrivals")

  // Featured products data
  const featuredProducts = [
    {
      id: "1",
      name: "Flowing Ombré Dress",
      price: 129.99,
      image: "/flowing-ombre-dress.png",
      category: "Dresses",
    },
    {
      id: "2",
      name: "Soft Cream Blazer",
      price: 149.99,
      image: "/soft-cream-blazer.png",
      category: "Outerwear",
    },
    {
      id: "3",
      name: "Faded Beige Maxi",
      price: 89.99,
      image: "/faded-beige-maxi.png",
      category: "Bottoms",
    },
    {
      id: "4",
      name: "Flowing Cream Gradient Blouse",
      price: 79.99,
      image: "/flowing-cream-gradient-blouse.png",
      category: "Tops",
    },
  ]

  // New arrivals data
  const newArrivals = [
    {
      id: "5",
      name: "Elegant Pearl Drops",
      price: 49.99,
      image: "/elegant-pearl-drops.png",
      category: "Accessories",
    },
    {
      id: "6",
      name: "Draped Beige Silk",
      price: 79.99,
      image: "/draped-beige-silk.png",
      category: "Tops",
    },
    {
      id: "7",
      name: "Shimmering Emerald Gown",
      price: 149.99,
      image: "/shimmering-emerald-gown.png",
      category: "Dresses",
    },
    {
      id: "8",
      name: "Flowing Ombré Silk",
      price: 99.99,
      image: "/flowing-ombre-silk.png",
      category: "Dresses",
    },
  ]

  // Best sellers data
  const bestSellers = [
    {
      id: "9",
      name: "Flowing Beige Ombré Back",
      price: 119.99,
      image: "/flowing-beige-ombre-back.png",
      category: "Dresses",
    },
    {
      id: "10",
      name: "Beige Ombré Silk Detail",
      price: 89.99,
      image: "/beige-ombre-silk-detail.png",
      category: "Tops",
    },
    {
      id: "11",
      name: "Flowing Ombré Silk",
      price: 99.99,
      image: "/flowing-ombre-silk.png",
      category: "Dresses",
    },
    {
      id: "12",
      name: "Soft Cream Blazer",
      price: 149.99,
      image: "/soft-cream-blazer.png",
      category: "Outerwear",
    },
  ]

  // Get products based on active tab
  const getActiveProducts = () => {
    switch (activeTab) {
      case "new-arrivals":
        return newArrivals
      case "best-sellers":
        return bestSellers
      case "featured":
        return featuredProducts
      default:
        return newArrivals
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
        <Image
          src="/sophisticated-style-launch.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-[70vh] object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20 p-6 md:p-12">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sophisticated Style for the Modern Woman</h1>
            <p className="text-lg mb-6">
              Discover our new collection of elegant, flowing silhouettes in soft, gradient tones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="/flowing-silhouettes.png"
                alt="Dresses"
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Dresses</h3>
                  <Button variant="secondary" asChild>
                    <Link href="/category/dresses">
                      Explore <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="/sophisticated-silhouettes.png"
                alt="Tops"
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Tops</h3>
                  <Button variant="secondary" asChild>
                    <Link href="/category/tops">
                      Explore <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="/sophisticated-bottoms-display.png"
                alt="Bottoms"
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Bottoms</h3>
                  <Button variant="secondary" asChild>
                    <Link href="/category/bottoms">
                      Explore <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Collection</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4 md:mt-0">
              <TabsList>
                <TabsTrigger value="new-arrivals">New Arrivals</TabsTrigger>
                <TabsTrigger value="best-sellers">Best Sellers</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getActiveProducts().map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="relative">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => addFavorite(product)}
                    >
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Add to favorites</span>
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => addItem(product)}
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link href={`/products/${product.id}`} className="hover:underline">
                    <h3 className="font-medium mb-1">{product.name}</h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
                  <p className="font-medium">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About OMBRÉ affaire</h2>
              <p className="text-muted-foreground mb-6">
                OMBRÉ affaire was founded with a vision to create elegant, contemporary fashion that transitions
                seamlessly from day to night, just like the gradual blend of colors in an ombré design.
              </p>
              <p className="text-muted-foreground mb-6">
                Our pieces are crafted with attention to detail, using high-quality fabrics and sustainable practices.
                Each collection tells a story of sophistication and grace, designed for the modern woman who appreciates
                timeless style with a contemporary twist.
              </p>
              <Button asChild>
                <Link href="/about-us">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/beige-atelier.png" alt="About OMBRÉ affaire" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/chic-sale-display.png"
              alt="Sale Banner"
              width={1200}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center p-6 md:p-12">
              <div className="max-w-md">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Summer Sale</h2>
                <p className="text-white text-lg mb-6">Up to 40% off on selected items. Limited time offer.</p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-6">
            Subscribe to receive updates on new arrivals, special offers, and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" required />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
