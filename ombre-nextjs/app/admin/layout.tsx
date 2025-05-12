"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BarChart3, Package, ShoppingCart, Users, Settings, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileView, setIsMobileView] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Detect mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1024)
    }

    // Initial check
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar trigger */}
      {isMobileView && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open sidebar</span>
        </Button>
      )}

      {/* Desktop sidebar */}
      {!isMobileView && (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r">
          <AdminSidebar />
        </aside>
      )}

      {/* Mobile sidebar (Sheet component) */}
      {isMobileView && (
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="p-0 w-64 sm:max-w-xs">
            <AdminSidebar onNavItemClick={() => setIsSidebarOpen(false)} />
          </SheetContent>
        </Sheet>
      )}

      {/* Content area */}
      <div className={`flex-1 ${!isMobileView ? "ml-64" : "ml-0"}`}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-6">
            <div className="flex flex-1 items-center justify-center lg:justify-start">
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

function AdminSidebar({ onNavItemClick }: { onNavItemClick?: () => void } = {}) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/admin" && pathname === "/admin") {
      return true
    }
    if (path !== "/admin" && pathname?.startsWith(path)) {
      return true
    }
    return false
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: BarChart3 },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Customers", href: "/admin/customers", icon: Users },
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Sidebar header */}
      <div className="flex items-center gap-2 px-4 py-4 border-b">
        <Image src="/ombre-logo-new.jpeg" alt="OMBRÉ affaire" width={100} height={33} className="h-8 w-auto" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">OMBRÉ affaire</span>
          <span className="text-xs text-muted-foreground">Admin Dashboard</span>
        </div>
      </div>

      {/* Sidebar content */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onClick={onNavItemClick}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Sidebar footer */}
      <div className="border-t p-4">
        <div className="space-y-2">
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            onClick={onNavItemClick}
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            onClick={onNavItemClick}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
