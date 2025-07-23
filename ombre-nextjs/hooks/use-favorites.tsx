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
  color_hex?: string;
  product_size_color_id?: string
};

type FavoritesContextType = {
  items: FavoriteItem[];
  addItem: (item: FavoriteItem) => void;
  removeItem: (item: FavoriteItem) => void;
  toggleItem: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  clearAll: () => void;
  syncWithBackend: () => Promise<void>;
  hydrated: boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<FavoriteItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
    // On mount, either load LS (guest) or sync server (logged-in)
   useEffect(() => {
     const token = localStorage.getItem("token");
     if (!token) {
       // guest: load LS and mark hydrated
       const stored = localStorage.getItem("favorites");
       if (stored) {
         try {
           setItems(JSON.parse(stored));
         } catch (e) {
           console.error("Invalid favorites in LS", e);
         }
       }
       setHydrated(true);
     } else {
       // logged in: ignore LS, pull from server & hydrate
       syncWithBackend()
         .catch((e) => console.error("Sync favorites failed", e))
         .finally(() => setHydrated(true));
     }
   }, []);
  // Save favorites to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(items));
    }
  }, [items]);
   // if we’re still syncing, don’t render children yet
 


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
async function syncWithBackend() {
  const token = localStorage.getItem("token")
  if (!token) return

  try {
    // 1) fetch the raw list
    const res = await fetch(`${apiUrl}/api/favourites`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const { items: serverItems = [] } = await res.json()

    // 2) for each entry, call resolve-psc once
    const hydrated = await Promise.all(
      serverItems.map(async (entry: any) => {
        const base = {
          id:        entry.product_id,
          size:      entry.size,
          color:     entry.color,
          color_hex: entry.color_hex,
          name:      entry.name,
          price:     entry.price,
          image:     entry.image,
          category:  "",
        }

        // resolve PSC ID once
        const pscRes = await fetch(
          `${apiUrl}/api/resolve-psc?product=${entry.product_id}` +
            `&color=${encodeURIComponent(entry.color_hex)}` +
            `&size=${encodeURIComponent(entry.size)}`
        )
        if (!pscRes.ok) throw new Error("PSC lookup failed")
        const { id: product_size_color_id } = await pscRes.json()

        return { ...base, product_size_color_id }
      })
    )

    setItems(hydrated)
  } catch (e) {
    console.error("Sync favorites error", e)
  }
}


 const addItem = async (newItem: FavoriteItem) => {
   const token = localStorage.getItem("token");
   if (!token) {
     // guest‐user: just localStorage
     setItems(prev => [...prev, newItem]);
     return;
   }

   // 1. resolve the PSC ID
   const pscRes = await fetch(
     `${apiUrl}/api/resolve-psc?product=${newItem.id}` +
       `&color=${encodeURIComponent(newItem.color ?? "")}` +
       `&size=${encodeURIComponent(newItem.size ?? "")}`
   );
   if (!pscRes.ok) throw new Error("Failed to resolve PSC ID");
   const { id: pscId } = await pscRes.json();

   // 2. persist to backend
   const addRes = await fetch(`${apiUrl}/api/favourites/add`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
     },
     body: JSON.stringify({ product_size_color_id: pscId }),
   });
   if (!addRes.ok) throw new Error("Failed to add favorite");

   // 3. update local state _with_ that PSC ID
   setItems(prev => [
     ...prev,
     { ...newItem, product_size_color_id: pscId },
   ]);
 };

const removeItem = async (item: FavoriteItem) => {
  // 1) drop locally first (optimistic)
  setItems(prev => prev.filter(i => i.product_size_color_id !== item.product_size_color_id))

  const token = localStorage.getItem("token")
  if (!token) return

  try {
    const res = await fetch(`${apiUrl}/api/favourites/remove`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product_size_color_id: item.product_size_color_id }),
    })
    if (!res.ok) throw new Error(await res.text())
  } catch (err) {
    console.error("Failed to remove favorite", err)
    // (optionally revert state on failure)
  }
}


  const toggleItem = (item: FavoriteItem) => {
    const existingItem = items.find(
      (i) => i.id === item.id && i.size === item.size && i.color === item.color
    );

    if (existingItem) {
      removeItem(item);
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
        hydrated,
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
