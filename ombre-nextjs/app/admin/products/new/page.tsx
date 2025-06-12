"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ImagePlus, Loader2, Save, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function NewProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [published, setPublished] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [isImageUploading, setIsImageUploading] = useState(false);

  const [price, setPrice] = useState("");
  const [compareAtPrice, setCompareAtPrice] = useState("");
  const [cost, setCost] = useState("");
  const [inventory, setInventory] = useState("");
  const [trackInventory, setTrackInventory] = useState(false);

  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setIsImageUploading(true);
    try {
      const res = await fetch(`${apiUrl}/api/admin/products/upload-image`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setImages((prev) => [...prev, data.imageUrl]);
      } else {
        alert("Image upload failed");
      }
    } catch (err) {
      alert("Image upload error");
    } finally {
      setIsImageUploading(false);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  // Mock function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${apiUrl}/api/admin/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          sku,
          description,
          category,
          brand,
          price: parseFloat(price),
          compare_price: parseFloat(compareAtPrice),
          cost: parseFloat(cost),
          inventory: parseInt(inventory),
          material,
          weight: parseFloat(weight),
          sizes: selectedSizes,
          colors: selectedColors,
          images,
          published,
          track_inventory: trackInventory,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push("/admin/products");
      } else {
        alert(data.error || "Error saving product");
      }
    } catch (err) {
      alert("Failed to save product");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || isImageUploading}
        >
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

          {/* GENERAL */}
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
                <CardDescription>Basic product details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input
                      id="sku"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={category}
                      onValueChange={(val) => setCategory(val)}
                    >
                      <SelectTrigger>
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
                    <Input
                      id="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="published"
                    checked={published}
                    onCheckedChange={setPublished}
                  />
                  <Label htmlFor="published">Published</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* IMAGES */}
          <TabsContent value="images" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                  Upload images for this product.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt="Product"
                        className="h-32 w-32 rounded-md object-cover border"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 h-6 w-6"
                        onClick={() => removeImage(index)}
                      >
                        <Trash className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PRICING */}
          <TabsContent value="pricing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Inventory</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="compareAtPrice">Compare at Price</Label>
                    <Input
                      id="compareAtPrice"
                      value={compareAtPrice}
                      onChange={(e) => setCompareAtPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cost">Cost</Label>
                    <Input
                      id="cost"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inventory">Inventory</Label>
                    <Input
                      id="inventory"
                      value={inventory}
                      onChange={(e) => setInventory(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="trackInventory"
                    checked={trackInventory}
                    onCheckedChange={setTrackInventory}
                  />
                  <Label htmlFor="trackInventory">Track Inventory</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ATTRIBUTES */}
          <TabsContent value="attributes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attributes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Available Sizes</Label>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <label key={size} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => toggleSize(size)}
                          className="rounded border-gray-300"
                        />
                        <span>{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Available Colors</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Black", "White", "Gray", "Beige", "Blue", "Green"].map(
                      (color) => (
                        <label
                          key={color}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => toggleColor(color)}
                            className="rounded border-gray-300"
                          />
                          <span>{color}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="material">Material</Label>
                  <Input
                    id="material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (grams)</Label>
                  <Input
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
}
