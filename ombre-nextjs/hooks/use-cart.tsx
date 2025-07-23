"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  id: string;
  pscId: string; // Optional, used for backend sync
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
  product_size_color_id?: string; // Added to match backend and usage
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (pscId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  syncWithBackend: () => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Logged in: always sync with backend, ignore localStorage
      syncWithBackend();
    } else {
      // Not logged in: load from localStorage
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          setItems(JSON.parse(storedCart));
        } catch (error) {
          console.error("Failed to parse cart from localStorage", error);
        }
      }
    }
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     syncWithBackend(); // pulls latest cart items from DB
  //   }
  // }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const getPSCId = async ({
    id,
    size,
    color,
  }: {
    id: string;
    size: string;
    color: string;
  }) => {
    const res = await fetch(
      `${apiUrl}/api/resolve-psc?product=${id}&color=${encodeURIComponent(
        color
      )}&size=${encodeURIComponent(size)}`
    );
    const data = await res.json();
    return data.id;
  };

  const persistToBackend = async (
    item: CartItem
  ): Promise<string | undefined> => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const pscId = await getPSCId(item);
    await fetch(`${apiUrl}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_size_color_id: pscId,
        quantity: item.quantity,
      }),
    });

    return pscId;
  };
  const addItem = async (newItem: CartItem): Promise<void> => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    // 1) lookup PSC
    const pscId = await getPSCId(newItem);
    if (!pscId) throw new Error("PSC ID not found");

    // 2) persist to backend first
    const response = await fetch(`${apiUrl}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_size_color_id: pscId,
        quantity: newItem.quantity,
      }),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Add to cart failed: ${text}`);
    }

    // 3) now update your local state/UI
    setItems(prev => {
      const idx = prev.findIndex(
        i =>
          i.id === newItem.id &&
          i.size === newItem.size &&
          i.color === newItem.color
      );
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, { ...newItem, product_size_color_id: pscId }];
    });
  };
  
const removeItem = (pscId: string) => {
  const token = localStorage.getItem("token");
  if (!token || !pscId) return;

  // 1) Ask backend to delete
  fetch(`${apiUrl}/api/cart/remove`, {
    method: "DELETE",
    headers: {
      "Content-Type":  "application/json",
      Authorization:   `Bearer ${token}`,
    },
    body: JSON.stringify({ product_size_color_id: pscId }),
  })
  .catch(console.error);

  // 2) Update local state
  setItems(prev => prev.filter(item => item.pscId !== pscId));
};

 const updateQuantity = async (pscId: string, quantity: number) => {
  const token = localStorage.getItem("token");
  if (!token || !pscId) return;

  // Optimistically update UI
  setItems(prev =>
    prev.map(i =>
      i.product_size_color_id === pscId ? { ...i, quantity } : i
    )
  );

  // Persist to DB
  await fetch(`${apiUrl}/api/cart/update`, {
    method: "PATCH",
    headers: {
      "Content-Type":  "application/json",
      Authorization:   `Bearer ${token}`,
    },
    body: JSON.stringify({ product_size_color_id: pscId, quantity }),
  }).catch(console.error);
};

  const clearCart = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // call your “clear cart” endpoint (you might need to create it server-side)
      const res = await fetch(`${apiUrl}/api/cart/clear`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        console.error("Failed to clear cart on server", await res.text());
      }
    }
    // now clear local state
    setItems([]);
  };
  const syncWithBackend = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await fetch(`${apiUrl}/api/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { items: serverItems = [] } = await res.json();

    const formatted = serverItems.map((entry: any) => ({
      id: entry.id,
      size: entry.size,
      color: entry.color,
      color_hex: entry.color_hex,
      quantity: entry.quantity,
      name: entry.name,
      price: entry.price,
      image: entry.image,
      product_size_color_id: entry.pscId,
       pscId:    entry.pscId,
    }));

    setItems(formatted);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        syncWithBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
