"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

// Mock wishlist data
const wishlistItems = [
  {
    id: "1",
    name: "Ombré Silk Dress",
    price: 129.99,
    image: "/flowing-ombre-silk.png",
    color: "Beige Ombré",
    size: "M",
    inStock: true,
  },
  {
    id: "3",
    name: "Faded Maxi Skirt",
    price: 89.99,
    image: "/faded-beige-maxi.png",
    color: "Beige",
    size: "S",
    inStock: true,
  },
  {
    id: "5",
    name: "Gradient Evening Gown",
    price: 199.99,
    image: "/shimmering-emerald-gown.png",
    color: "Rose Gold",
    size: "L",
    inStock: false,
  },
]

export default function WishlistTab() {
  const { addItem } = useCart()
  const [items, setItems] = useState(wishlistItems)

  const removeFromWishlist = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const moveToCart = (item: (typeof items)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      size: item.size,
      color: item.color,
    })
    removeFromWishlist(item.id)
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-medium mb-4">Your wishlist is empty</h2>
        <p className="text-muted-foreground mb-8">Start adding items to your wishlist while you shop!</p>
        <Button asChild>
          <Link href="/products">Continue shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Your Wishlist ({items.length})</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden group">
            <div className="relative aspect-[3/4]">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex space-x-2">
                  <Button variant="secondary" size="icon" onClick={() => removeFromWishlist(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {!item.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">Out of stock</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium">
                <Link href={`/products/${item.id}`} className="hover:underline">
                  {item.name}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {item.color} / {item.size}
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="font-medium">${item.price.toFixed(2)}</p>
                <Button variant="outline" size="sm" onClick={() => moveToCart(item)} disabled={!item.inStock}>
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
