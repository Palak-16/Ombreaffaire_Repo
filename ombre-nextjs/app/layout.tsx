import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import "./custom-sheet.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/hooks/use-cart"
import { FavoritesProvider } from "@/hooks/use-favorites"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "OMBRÉ affaire | Elegant Fashion",
  description: "Discover the latest fashion trends at OMBRÉ affaire",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className={`${inter.variable} ${playfair.variable} font-sans`}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <CartProvider>
              <FavoritesProvider>
                <div className="flex min-h-screen flex-col">{children}</div>
              </FavoritesProvider>
            </CartProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
