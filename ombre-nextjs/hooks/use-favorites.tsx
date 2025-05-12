"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

export type FavoriteItem = {
  id: string
  name: string
  price: number
  image: string
  category: string
  size?: string
  color?: string
}

type FavoritesContextType = {
  items: FavoriteItem[]
  addItem: (item: FavoriteItem) => void
  removeItem: (id: string) => void
  toggleItem: (item: FavoriteItem) => void
  isFavorite: (id: string) => boolean
  clearAll: () => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<FavoriteItem[]>([])

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      try {
        setItems(JSON.parse(storedFavorites))
      } catch (error) {
        console.error("Failed to parse favorites from localStorage", error)
      }
    }
  }, [])

  // Save favorites to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(items))
    }
  }, [items])

  const addItem = (newItem: FavoriteItem) => {
    setItems((prevItems) => {
      // Check if item already exists in favorites
      const existingItem = prevItems.find((item) => item.id === newItem.id)
      if (existingItem) {
        return prevItems
      } else {
        return [...prevItems, newItem]
      }
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const toggleItem = (item: FavoriteItem) => {
    const existingItem = items.find((i) => i.id === item.id)
    if (existingItem) {
      removeItem(item.id)
    } else {
      addItem(item)
    }
  }

  const isFavorite = (id: string) => {
    return items.some((item) => item.id === id)
  }

  const clearAll = () => {
    setItems([])
  }

  return (
    <FavoritesContext.Provider value={{ items, addItem, removeItem, toggleItem, isFavorite, clearAll }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
