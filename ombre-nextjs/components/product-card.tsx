"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { cn } from "@/lib/utils"

type ProductCardProps = {
  product: {
    id: string
    name: string
    price: number
    image: string
    category: string
    isNew?: boolean
    isSale?: boolean
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toggleItem, isFavorite } = useFavorites()
  const favorite = isFavorite(product.id)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: "M", // Default size
      color: "beige", // Default color
    })
  }

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    toggleItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <div className="group relative">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={400}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
          <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={handleQuickAdd}>
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm",
            favorite ? "text-red-500" : "text-muted-foreground",
          )}
          onClick={handleToggleFavorite}
        >
          <Heart className={cn("h-4 w-4", favorite ? "fill-current" : "")} />
          <span className="sr-only">{favorite ? "Remove from favorites" : "Add to favorites"}</span>
        </Button>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-primary px-2 py-1 text-xs font-medium rounded">New</div>
        )}
        {product.isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">Sale</div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium">
            <Link href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
