import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock product data - in a real app, you would fetch this from an API
const getProductById = (id: string) => {
  const products = {
    "PROD-001": {
      id: "PROD-001",
      name: "Flowing Ombré Dress",
      description:
        "A stunning ombré dress that transitions from cream to beige, creating a flowing silhouette that moves gracefully with every step. Made from 100% silk for ultimate luxury and comfort.",
      images: [
        "/flowing-ombre-dress.png",
        "/flowing-beige-ombre-back.png",
        "/beige-ombre-silk-detail.png",
        "/flowing-ombre-silk.png",
      ],
      category: "Dresses",
      price: "$99.99",
      stock: 45,
      status: "In Stock",
      sku: "OMB-DRS-001",
      dimensions: "Varies by size",
      weight: "0.5 kg",
      materials: "100% Silk",
      colors: ["Cream", "Beige"],
      sizes: ["XS", "S", "M", "L", "XL"],
      dateAdded: "2023-01-15",
      lastUpdated: "2023-04-10",
    },
  }

  return products[id as keyof typeof products]
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="text-muted-foreground">The product you are looking for does not exist.</p>
        <Button asChild className="mt-4">
          <Link href="/admin/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    )
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
          <h1 className="text-2xl font-bold">{product.name}</h1>
        </div>
        <Button asChild>
          <Link href={`/admin/products/${params.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Product
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
            <CardDescription>Preview of product images.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-md border ${index === 0 ? "col-span-2 aspect-[4/3]" : "aspect-square"}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${index + 1}`}
                    width={index === 0 ? 600 : 300}
                    height={index === 0 ? 450 : 300}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>Basic information about the product.</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-medium text-muted-foreground">ID</dt>
                  <dd>{product.id}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">SKU</dt>
                  <dd>{product.sku}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Category</dt>
                  <dd>{product.category}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Price</dt>
                  <dd className="font-medium">{product.price}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Stock</dt>
                  <dd>{product.stock} units</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Status</dt>
                  <dd>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        product.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-medium text-muted-foreground">Description</dt>
                  <dd className="mt-1">{product.description}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
              <CardDescription>Technical details and specifications.</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-medium text-muted-foreground">Dimensions</dt>
                  <dd>{product.dimensions}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Weight</dt>
                  <dd>{product.weight}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Materials</dt>
                  <dd>{product.materials}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-medium text-muted-foreground">Available Colors</dt>
                  <dd className="mt-1 flex flex-wrap gap-1">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium"
                      >
                        {color}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-medium text-muted-foreground">Available Sizes</dt>
                  <dd className="mt-1 flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
              <CardDescription>Additional information about the product.</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-medium text-muted-foreground">Date Added</dt>
                  <dd>{product.dateAdded}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-foreground">Last Updated</dt>
                  <dd>{product.lastUpdated}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
