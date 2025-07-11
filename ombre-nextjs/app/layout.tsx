// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./custom-sheet.css";

import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/hooks/use-cart";
import { FavoritesProvider } from "@/hooks/use-favorites";
import { CategoriesProvider } from "@/components/CategoriesContext";  // ← import your provider

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "OMBRÉ affaire | Elegant Fashion",
  description: "Discover the latest fashion trends at OMBRÉ affaire",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // fetch once for your entire app
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
    { cache: "force-cache" }
  );
  const json = await res.json();
  const categories = Array.isArray(json.categories) ? json.categories : [];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Summernote CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-lite.min.css"
        />
      </head>
      <body>
        <CategoriesProvider categories={categories}>
          <div className={`${inter.variable} ${playfair.variable} font-sans`}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <CartProvider>
                <FavoritesProvider>
                  <div className="flex min-h-screen flex-col">
                    {children}
                  </div>
                </FavoritesProvider>
              </CartProvider>
            </ThemeProvider>
          </div>
        </CategoriesProvider>

        {/* jQuery + Summernote JS */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-lite.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
