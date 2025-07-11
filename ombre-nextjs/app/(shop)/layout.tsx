// app/(shop)/layout.tsx
import type { ReactNode } from "react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoriesProvider } from "../../components/CategoriesContext";

type Category = { id: string; name: string; slug: string };

export default async function ShopLayout({
  children,
}: {
  children: ReactNode;
}) {

  // ① hit your categories API once
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
    { cache: "force-cache" }  // or revalidate/sec as you prefer
  );
  const json = await res.json();
  const categories: Category[] = json.categories || [];

  return (
    <>
      {/* ② pass them down */}
      <CategoriesProvider categories={categories}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer/>
      </CategoriesProvider>
    </>
  );
}
