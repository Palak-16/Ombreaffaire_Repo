"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"

export default function FavoritesPage() {
  const { addItem } = useCart()
  const { items, removeItem } = useFavorites()

  const moveToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      size: item.size || "M", // Default size if not specified
      color: item.color || "Default", // Default color if not specified
    })
    removeItem(item.id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">Favorites</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <p className="text-muted-foreground">{items.length} items</p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
          <h2 className="text-xl font-medium">Your favorites list is empty</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Add items to your favorites while you shop by clicking the heart icon on products you love.
          </p>
          <Button asChild className="mt-4">
            <Link href="/products">Continue shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden group">
              <div className="relative aspect-[3/4]">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove from favorites</span>
                </Button>
              </div>
              <div className="p-4">
                <Link href={`/products/${item.id}`} className="hover:underline">
                  <h3 className="font-medium">{item.name}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mt-1">{item.category}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                  <Button variant="outline" size="sm" onClick={() => moveToCart(item)}>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
