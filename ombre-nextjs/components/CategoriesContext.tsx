// app/(shop)/components/CategoriesContext.tsx
"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { Category } from "@/app/layout";

const CategoriesContext = createContext<Category[]>([]);

export function CategoriesProvider({
  categories,
  children,
}: {
  categories: Category[];
  children: ReactNode;
}) {
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  return useContext(CategoriesContext);
}
