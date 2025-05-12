"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, ArrowLeft, Plus, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Sample product data
const productData = {
  id: "1",
  name: "Ombré Silk Dress",
  price: 129.99,
  description:
    "A stunning silk dress featuring a beautiful ombré effect that transitions from cream to beige. This elegant piece is perfect for special occasions or evening events. The flowing silhouette and delicate fabric create a graceful, feminine look.",
  features: [
    "Made from 100% silk",
    "Gradual ombré effect from cream to beige",
    "Flowing silhouette",
    "Hidden side zipper",
    "Fully lined",
    "Dry clean only",
  ],
  images: [
    "/flowing-ombre-dress.png",
    "/flowing-beige-ombre-back.png",
    "/beige-ombre-silk-detail.png",
    "/flowing-ombre-silk.png",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: [
    { name: "Beige Ombré", value: "beige" },
    { name: "Rose Ombré", value: "rose" },
    { name: "Blue Ombré", value: "blue" },
  ],
  category: "Dresses",
  inventory: 24,
  sku: "OMB-SILK-001",
  isNew: true,
  isFeatured: true,
  isSale: false,
}

export default function EditProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const isNewProduct = params.id === "new"
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [product, setProduct] = useState<any>(
    isNewProduct
      ? {
          name: "",
          price: "",
          description: "",
          features: [""],
          images: [],
          sizes: [],
          colors: [],
          category: "",
          inventory: "",
          sku: "",
          isNew: false,
          isFeatured: false,
          isSale: false,
        }
      : productData,
  )

  // Simulate fetching product data
  useEffect(() => {
    if (!isNewProduct) {
      setIsLoading(true)
      // In a real app, you would fetch the product data from an API
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [isNewProduct])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setProduct({ ...product, [name]: checked })
  }

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...product.features]
    updatedFeatures[index] = value
    setProduct({ ...product, features: updatedFeatures })
  }

  const addFeature = () => {
    setProduct({ ...product, features: [...product.features, ""] })
  }

  const removeFeature = (index: number) => {
    const updatedFeatures = [...product.features]
    updatedFeatures.splice(index, 1)
    setProduct({ ...product, features: updatedFeatures })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      router.push("/admin/products")
    }, 1500)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/admin/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{isNewProduct ? "Add New Product" : "Edit Product"}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/admin/products")}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Product"
            )}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Enter the basic details about the product.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" name="name" value={product.name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" name="sku" value={product.sku} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={product.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={product.category} onValueChange={(value) => setProduct({ ...product, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dresses">Dresses</SelectItem>
                    <SelectItem value="Tops">Tops</SelectItem>
                    <SelectItem value="Bottoms">Bottoms</SelectItem>
                    <SelectItem value="Accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="inventory">Inventory</Label>
                <Input
                  id="inventory"
                  name="inventory"
                  type="number"
                  value={product.inventory}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Features</Label>
              <div className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      placeholder={`Feature ${index + 1}`}
                    />
                    <Button type="button" variant="outline" size="icon" onClick={() => removeFeature(index)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={addFeature}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isNew"
                  checked={product.isNew}
                  onCheckedChange={(checked) => handleCheckboxChange("isNew", checked === true)}
                />
                <Label htmlFor="isNew">Mark as New Arrival</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isFeatured"
                  checked={product.isFeatured}
                  onCheckedChange={(checked) => handleCheckboxChange("isFeatured", checked === true)}
                />
                <Label htmlFor="isFeatured">Feature on Homepage</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isSale"
                  checked={product.isSale}
                  onCheckedChange={(checked) => handleCheckboxChange("isSale", checked === true)}
                />
                <Label htmlFor="isSale">On Sale</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
            <CardDescription>
              Upload images of the product. The first image will be used as the main image.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {!isNewProduct &&
                product.images.map((image: string, index: number) => (
                  <div key={index} className="relative aspect-square border rounded-md overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Product image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6"
                      onClick={() => {
                        const updatedImages = [...product.images]
                        updatedImages.splice(index, 1)
                        setProduct({ ...product, images: updatedImages })
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              <div className="aspect-square border border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors">
                <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">Add Image</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>Define the available sizes and colors for this product.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Available Sizes</Label>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={`size-${size}`}
                      checked={product.sizes.includes(size)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setProduct({ ...product, sizes: [...product.sizes, size] })
                        } else {
                          setProduct({
                            ...product,
                            sizes: product.sizes.filter((s: string) => s !== size),
                          })
                        }
                      }}
                    />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Available Colors</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {!isNewProduct &&
                  product.colors.map((color: any, index: number) => (
                    <div key={index} className="flex items-center space-x-2 border rounded-md p-3">
                      <div
                        className="h-6 w-6 rounded-full"
                        style={{
                          backgroundColor:
                            color.value === "beige" ? "#f5f5dc" : color.value === "rose" ? "#ffc0cb" : "#add8e6",
                        }}
                      />
                      <span>{color.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="ml-auto h-8 w-8"
                        onClick={() => {
                          const updatedColors = [...product.colors]
                          updatedColors.splice(index, 1)
                          setProduct({ ...product, colors: updatedColors })
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                <div className="border border-dashed rounded-md p-3 flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors">
                  <Plus className="h-4 w-4 mr-2" />
                  <span>Add Color</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => router.push("/admin/products")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Product"
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
