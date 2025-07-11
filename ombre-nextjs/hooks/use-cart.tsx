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
  product_size_color_id?: string; // Added to match backend and usage
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string, color: string) => void;
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

  const addItem = (newItem: CartItem) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getPSCId(newItem).then((pscId) => {
      if (!pscId) return;

      setItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) =>
            item.id === newItem.id &&
            item.size === newItem.size &&
            item.color === newItem.color
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity:
              updatedItems[existingItemIndex].quantity + newItem.quantity,
            product_size_color_id: pscId,
          };
          return updatedItems;
        } else {
          return [
            ...prevItems,
            {
              ...newItem,
              product_size_color_id: pscId,
            },
          ];
        }
      });

      // Send to backend
      fetch(`${apiUrl}/api/cart/add`, {
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
    });
  };

  const removeItem = (id: string, size: string, color: string) => {
    const token = localStorage.getItem("token");
    if (token) {
      getPSCId({ id, size, color }).then((pscId) => {
        if (!pscId) {
          console.warn("Could not resolve PSC ID for removal");
          return;
        }
        fetch(`${apiUrl}/api/cart/remove`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ product_size_color_id: pscId }),
        });
      });
    }

    // Local state update
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = async (pscId: string, quantity: number) => {
    const token = localStorage.getItem("token");
    if (!token || !pscId) return;

    setItems((prevItems) =>
      prevItems.map((i) =>
        i.product_size_color_id === pscId ? { ...i, quantity } : i
      )
    );

    try {
      await fetch(`${apiUrl}/api/cart/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_size_color_id: pscId, quantity }),
      });
    } catch (err) {
      console.error("Failed to update quantity in DB", err);
    }
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
      color_hex: entry.colors_hex,
      quantity: entry.quantity,
      name: entry.name,
      price: entry.price,
      image: entry.image,
      product_size_color_id: entry.product_size_color_id,
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
