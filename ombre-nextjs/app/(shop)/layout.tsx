import type React from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer" // Changed to named import

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
