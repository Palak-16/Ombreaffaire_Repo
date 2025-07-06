"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

export type FavoriteItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size?: string;
  color?: string;
};

type FavoritesContextType = {
  items: FavoriteItem[];
  addItem: (item: FavoriteItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  clearAll: () => void;
  syncWithBackend: () => Promise<void>;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<FavoriteItem[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        setItems(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Failed to parse favorites from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      syncWithBackend(); // pulls latest cart items from DB
    }
  }, []);

  // Save favorites to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(items));
    }
  }, [items]);
  const persistToBackend = async (
    item: FavoriteItem,
    type: "add" | "remove"
  ) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(
        `${apiUrl}/api/resolve-psc?product=` +
          item.id +
          "&color=" +
          encodeURIComponent(item.color ?? "") +
          "&size=" +
          encodeURIComponent(item.size ?? "")
      );
      const { id: product_size_color_id } = await res.json();

      if (type === "add") {
        await fetch(`${apiUrl}/api/favourites/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ product_size_color_id }),
        });
      }
      // implement remove endpoint later
    } catch (err) {
      console.error("Persist favorite error", err);
    }
  };

  const syncWithBackend = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`${apiUrl}/api/favourites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { items: serverItems = [] } = await res.json();
      setItems(
        serverItems.map((entry: any) => ({
          id: entry.product_id,
          size: entry.size,
          color: entry.color,
          name: entry.name,
          price: entry.price,
          image: entry.image,
          category: "",
        }))
      );
    } catch (e) {
      console.error("Sync favorites error", e);
    }
  };

  const addItem = (newItem: FavoriteItem) => {
    let shouldPersist = false;

    setItems((prevItems) => {
      const exists = prevItems.some(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      if (exists) return prevItems;

      shouldPersist = true;
      return [...prevItems, newItem];
    });

    if (shouldPersist) {
      persistToBackend(newItem, "add");
    }
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleItem = (item: FavoriteItem) => {
    const existingItem = items.find(
      (i) => i.id === item.id && i.size === item.size && i.color === item.color
    );
    if (existingItem) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  };

  const isFavorite = (id: string) => {
    return items.some((item) => item.id === id);
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        toggleItem,
        isFavorite,
        clearAll,
        syncWithBackend,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
