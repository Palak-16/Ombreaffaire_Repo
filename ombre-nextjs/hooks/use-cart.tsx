"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  syncWithBackend: () => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      syncWithBackend(); // pulls latest cart items from DB
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const getPSCId = async (item: CartItem) => {
    const res = await fetch(
      `${apiUrl}/api/resolve-psc?product=${item.id}&color=${encodeURIComponent(
        item.color
      )}&size=${encodeURIComponent(item.size)}`
    );
    const data = await res.json();
    return data.id;
  };

  const persistToBackend = async (item: CartItem) => {
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
  };

  const addItem = (newItem: CartItem) => {
    let updatedItem: CartItem | null = null;

    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        updatedItem = updatedItems[existingItemIndex];
        return updatedItems;
      } else {
        updatedItem = newItem;
        return [...prevItems, newItem];
      }
    });

    // ✅ Only call after state has been set
    if (updatedItem) {
      persistToBackend(updatedItem);
    }
  };
  const removeItem = (id: string, size: string, color: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
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
      quantity: entry.quantity,
      name: entry.name,
      price: entry.price,
      image: entry.image,
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
