"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ImagePlus, Loader2, Save, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function NewProductPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<string[]>([])

  // Mock function to handle image upload
  const handleImageUpload = () => {
    // In a real app, this would handle file uploads
    // For demo purposes, we'll just add a placeholder image
    setImages([...images, "/assorted-products-display.png"])
  }

  // Mock function to remove an image
  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  // Mock function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/admin/products")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/products">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Add New Product</h1>
        </div>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Product
            </>
          )}
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
            <TabsTrigger value="attributes">Attributes</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
                <CardDescription>Basic information about the product.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" placeholder="Enter product name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" placeholder="Enter product SKU" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter product description" className="min-h-[120px]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dresses">Dresses</SelectItem>
                        <SelectItem value="tops">Tops</SelectItem>
                        <SelectItem value="bottoms">Bottoms</SelectItem>
                        <SelectItem value="outerwear">Outerwear</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Input id="brand" placeholder="Enter brand name" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="published" />
                  <Label htmlFor="published">Published</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>Upload images for this product.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex flex-wrap gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Product image ${index + 1}`}
                          className="h-32 w-32 rounded-md object-cover border"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                          onClick={() => removeImage(index)}
                        >
                          <Trash className="h-3 w-3" />
                          <span className="sr-only">Remove image</span>
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="h-32 w-32 border-dashed" onClick={handleImageUpload}>
                      <ImagePlus className="h-8 w-8 text-muted-foreground" />
                      <span className="sr-only">Upload image</span>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Upload up to 8 images. The first image will be used as the product thumbnail.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Inventory</CardTitle>
                <CardDescription>Manage product pricing and inventory.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
                      <Input id="price" type="number" step="0.01" min="0" className="pl-6" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="compare-price">Compare at Price</Label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
                      <Input id="compare-price" type="number" step="0.01" min="0" className="pl-6" placeholder="0.00" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cost">Cost per item</Label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
                      <Input id="cost" type="number" step="0.01" min="0" className="pl-6" placeholder="0.00" />
                    </div>
                    <p className="text-xs text-muted-foreground">Customers won't see this</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profit">Profit</Label>
                    <Input id="profit" readOnly value="--" />
                    <p className="text-xs text-muted-foreground">Calculated automatically</p>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="inventory">Inventory</Label>
                    <Input id="inventory" type="number" min="0" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                    <Input id="sku" placeholder="SKU-123456" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="track-inventory" />
                  <Label htmlFor="track-inventory">Track inventory</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attributes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Attributes</CardTitle>
                <CardDescription>Add attributes like size, color, material, etc.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Available Sizes</Label>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <input type="checkbox" id={`size-${size}`} className="rounded border-gray-300" />
                        <Label htmlFor={`size-${size}`}>{size}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Available Colors</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Black", "White", "Gray", "Beige", "Blue", "Green"].map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <input type="checkbox" id={`color-${color}`} className="rounded border-gray-300" />
                        <Label htmlFor={`color-${color}`}>{color}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="material">Material</Label>
                  <Input id="material" placeholder="e.g., Cotton, Silk, Polyester" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (g)</Label>
                  <Input id="weight" type="number" min="0" placeholder="0" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
