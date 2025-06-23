"use client";

import type React from "react";

import { useEffect, useState } from "react";
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
import dynamic from "next/dynamic";
const SummernoteEditor = dynamic(() => import("@/components/ui/SummernoteEditor"), { ssr: false });
const BrandSelector = dynamic(() => import("@/components/ui/BrandSelector"), {
  ssr: false,
});


export default function NewProductPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

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
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const [price, setPrice] = useState("");
  const [compareAtPrice, setCompareAtPrice] = useState("");
  const [cost, setCost] = useState("");
  const [inventory, setInventory] = useState("");
  const [trackInventory, setTrackInventory] = useState(false);

  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColorIds, setSelectedColorIds] = useState<string[]>([]);
  const [colorImages, setColorImages] = useState<{
    [colorId: string]: { urls: string[]; mainIndex: number };
  }>({});

  const [globalColors, setGlobalColors] = useState<
    { id: string; label: string; hex: string }[]
  >([]);
  const [newColorLabel, setNewColorLabel] = useState("");
  const [newColorHex, setNewColorHex] = useState("#000000");
  const [existingSizeChart, setExistingSizeChart] = useState([]);
  const [activeTab, setActiveTab] = useState("general");

  const [sizeChartRows, setSizeChartRows] = useState([
    { size: "XXS", uk: "4", bust: "", waist: "", hip: "" },
    { size: "XS", uk: "6", bust: "", waist: "", hip: "" },
    { size: "S", uk: "8", bust: "", waist: "", hip: "" },
    { size: "M", uk: "10", bust: "", waist: "", hip: "" },
    { size: "L", uk: "12", bust: "", waist: "", hip: "" },
    { size: "XL", uk: "14", bust: "", waist: "", hip: "" },
    { size: "XXL", uk: "16", bust: "", waist: "", hip: "" },
  ]);

  const handleAddColor = async () => {
    if (!newColorLabel.trim()) return;

    const res = await fetch(`${apiUrl}/api/colors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: newColorLabel.trim(), hex: newColorHex }),
    });

    const data = await res.json();
    if (res.ok) {
      setGlobalColors((prev) => [...prev, data.color]);
      setNewColorLabel("");
      setNewColorHex("#000000");
    } else {
      alert(data.error || "Failed to add color");
    }
  };

  const [variants, setVariants] = useState<{
    [key: string]: { sku: string; inventory: number };
  }>({});

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };
  const isHtmlEmpty = (html: string) => {
    console.log("DESCRIPTION BEFORE SUBMIT:", html); // Add this
    const stripped = html.replace(/<[^>]+>/g, "").trim();
    return stripped.length === 0;
  };

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/colors`);
        const data = await res.json();
        setGlobalColors(data.colors || []);
      } catch (err) {
        console.error("Color fetch failed", err);
      }
    };
    fetchColors();
  }, []);

  useEffect(() => {
    if (!brand) return;

    const fetchSizeChart = async () => {
      try {
        const res = await fetch(
          `${apiUrl}/api/admin/sizechart?brand=${encodeURIComponent(brand)}`
        );
        const data = await res.json();
        if (res.ok && data.sizeChart) {
          setSizeChartRows(data.sizeChart);
          setExistingSizeChart(data.sizeChart); // Optional: for future comparison
        }
      } catch (err) {
        console.error("Size chart fetch failed", err);
      }
    };

    fetchSizeChart();
  }, [brand]);

  useEffect(() => {
    const newVariants: typeof variants = {};

    selectedSizes.forEach((size) => {
      selectedColorIds.forEach((colorId) => {
        const key = `${size}_${colorId}`;
        newVariants[key] = variants[key] || { sku: "", inventory: 0 };
      });
    });

    setVariants(newVariants);
  }, [selectedSizes, selectedColorIds]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsImageUploading(true);

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${apiUrl}/api/admin/products/upload-image`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setImages((prev) => [...prev, data.imageUrl]);
        } else {
          alert("Image upload failed");
        }
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

    // 🚫 Prevent empty required fields
    if (!name || !sku || !category || !brand || isHtmlEmpty(description)) {
      alert("Fill the Required Fields!");
      setIsSubmitting(false);
      return;
    }
    console.log("SUBMITTING WITH:", description);

    try {
      const res = await fetch(`${apiUrl}/api/admin/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          sku,
          description,
          category,
          brand: brand.trim().toLowerCase(),
          sizeChart: sizeChartRows,
          price: parseFloat(price),
          compare_price: parseFloat(compareAtPrice),
          cost: parseFloat(cost),
          inventory: parseInt(inventory),
          material,
          weight: parseFloat(weight),
          sizes: selectedSizes,
          colors: selectedColorIds,
          images,
          mainImageIndex,
          published,
          track_inventory: trackInventory,
          product_color_images: Object.entries(colorImages).map(
            ([color_id, data]) => ({
              color_id,
              image_urls: data.urls,
              main_index: data.mainIndex,
            })
          ),

          variants: Object.entries(variants).map(([key, val]) => {
            const [size, color] = key.split("_");
            return {
              size,
              color,
              sku: val.sku,
              inventory: val.inventory,
            };
          }),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        // ✅ Save size chart to size_charts table
        await fetch(`${apiUrl}/api/admin/sizechart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            brand: brand.trim().toLowerCase(),
            chart_data: sizeChartRows,
          }),
        });

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
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
            <TabsTrigger value="attributes">Attributes</TabsTrigger>
            <TabsTrigger value="colorImages">Color Images</TabsTrigger>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="sizechart">Size Chart</TabsTrigger>
          </TabsList>

          {/* GENERAL */}
          <div className={activeTab === "general" ? "block" : "hidden"}>
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
                  <SummernoteEditor value={description} onChange={setDescription} />

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
                        <SelectItem value="Dresses">Dresses</SelectItem>
                        <SelectItem value="CordSets">Cord-Sets</SelectItem>
                        <SelectItem value="Saree">Saree</SelectItem>
                        <SelectItem value="Suit">Suit</SelectItem>
                        <SelectItem value="Accessories">Jumpsuits</SelectItem>
                        <SelectItem value="Jumpsuits">Lehngas</SelectItem>
                        <SelectItem value="Tops">Tops | Shirts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <BrandSelector value={brand} onChange={setBrand} />

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
          </div>

          {/* IMAGES */}
          <TabsContent value="colorImages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Images by Color</CardTitle>
                <CardDescription>
                  Upload images for each selected color. Only one color’s images
                  will be shown at a time.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {selectedColorIds.map((colorId) => {
                  const color = globalColors.find((c) => c.id === colorId);
                  if (!color) return null;

                  return (
                    <div key={colorId}>
                      <Label className="block mb-2">{color.label}</Label>
                      <div className="flex flex-wrap gap-4 mb-2">
                        {(colorImages[colorId]?.urls || []).map(
                          (url, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={url}
                                alt={`Color ${color.label}`}
                                className={`h-24 w-24 rounded object-cover border ${
                                  colorImages[colorId]?.mainIndex === index
                                    ? "border-blue-500"
                                    : "border-gray-300"
                                }`}
                              />
                              <Button
                                type="button"
                                size="icon"
                                variant="destructive"
                                className="absolute -top-2 -right-2 h-6 w-6"
                                onClick={() => {
                                  const updated = [
                                    ...(colorImages[colorId]?.urls || []),
                                  ];
                                  updated.splice(index, 1);
                                  setColorImages((prev) => ({
                                    ...prev,
                                    [colorId]: {
                                      urls: updated,
                                      mainIndex:
                                        prev[colorId]?.mainIndex === index
                                          ? 0
                                          : Math.max(
                                              0,
                                              prev[colorId]?.mainIndex > index
                                                ? prev[colorId]?.mainIndex - 1
                                                : prev[colorId]?.mainIndex
                                            ),
                                    },
                                  }));
                                }}
                              >
                                <Trash className="h-3 w-3" />
                              </Button>

                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="absolute bottom-1 left-1 text-xs"
                                onClick={() =>
                                  setColorImages((prev) => ({
                                    ...prev,
                                    [colorId]: {
                                      ...prev[colorId],
                                      mainIndex: index,
                                    },
                                  }))
                                }
                              >
                                {colorImages[colorId]?.mainIndex === index
                                  ? "Main Image"
                                  : "Set as Main"}
                              </Button>
                            </div>
                          )
                        )}
                      </div>
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={async (e) => {
                          const files = e.target.files;
                          if (!files) return;
                          setIsImageUploading(true);
                          try {
                            for (const file of files) {
                              const formData = new FormData();
                              formData.append("file", file);
                              const res = await fetch(
                                `${apiUrl}/api/admin/products/upload-image`,
                                {
                                  method: "POST",
                                  body: formData,
                                }
                              );
                              const data = await res.json();
                              if (res.ok) {
                                setColorImages((prev) => {
                                  const current = prev[colorId]?.urls || [];
                                  return {
                                    ...prev,
                                    [colorId]: {
                                      urls: [...current, data.imageUrl],
                                      mainIndex: prev[colorId]?.mainIndex ?? 0,
                                    },
                                  };
                                });
                              }
                            }
                          } catch (err) {
                            alert("Image upload error");
                          } finally {
                            setIsImageUploading(false);
                          }
                        }}
                      />
                    </div>
                  );
                })}
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
                    {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
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
                  <Label>Select Colors</Label>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {globalColors.map((color) => {
                      const isSelected = selectedColorIds.includes(color.id);
                      return (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() =>
                            setSelectedColorIds((prev) =>
                              isSelected
                                ? prev.filter((id) => id !== color.id)
                                : [...prev, color.id]
                            )
                          }
                          className={`w-10 h-10 rounded-full border-2 ${
                            isSelected ? "ring-2 ring-black" : "border-gray-300"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.label}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-2 mt-6">
                  <Label>Add New Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="Color Name (e.g. Peach Blush)"
                      value={newColorLabel}
                      onChange={(e) => setNewColorLabel(e.target.value)}
                      className="w-48"
                    />
                    <Input
                      type="color"
                      value={newColorHex}
                      onChange={(e) => setNewColorHex(e.target.value)}
                      className="w-12 p-1"
                    />
                    <Button type="button" onClick={handleAddColor}>
                      Add
                    </Button>
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

          <TabsContent value="variants" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Variants</CardTitle>
                <CardDescription>
                  Assign SKU and Inventory to each Size + Color combination.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.keys(variants).length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Select at least one size and one color to add variants.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(variants).map(([key, val]) => {
                      const [size, colorId] = key.split("_");
                      const color = globalColors.find((c) => c.id === colorId);
                      if (!color) return null;

                      return (
                        <div
                          key={key}
                          className="grid grid-cols-5 gap-4 items-center"
                        >
                          <div className="col-span-1 font-medium">{size}</div>
                          <div className="col-span-1 font-medium">
                            {color.label}
                          </div>
                          <Input
                            placeholder="SKU"
                            value={val.sku}
                            onChange={(e) =>
                              setVariants((prev) => ({
                                ...prev,
                                [key]: {
                                  ...prev[key],
                                  sku: e.target.value,
                                },
                              }))
                            }
                          />
                          <Input
                            placeholder="Inventory"
                            type="number"
                            value={val.inventory?.toString() || ""}
                            onChange={(e) =>
                              setVariants((prev) => ({
                                ...prev,
                                [key]: {
                                  ...prev[key],
                                  inventory:
                                    e.target.value === ""
                                      ? 0
                                      : parseInt(e.target.value),
                                },
                              }))
                            }
                          />

                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              setVariants((prev) => {
                                const copy = { ...prev };
                                delete copy[key];
                                return copy;
                              })
                            }
                          >
                            Remove
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sizechart" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Brand-Specific Size Chart</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="overflow-auto">
                  <table className="w-full text-sm text-left border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border p-2">Size</th>
                        <th className="border p-2">UK</th>
                        <th className="border p-2">Bust</th>
                        <th className="border p-2">Waist</th>
                        <th className="border p-2">Hip</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChartRows.map((row, index) => (
                        <tr key={index}>
                          <td className="border p-2">{row.size}</td>
                          <td className="border p-2">
                            <Input
                              value={row.uk}
                              onChange={(e) => {
                                const rows = [...sizeChartRows];
                                rows[index].uk = e.target.value;
                                setSizeChartRows(rows);
                              }}
                            />
                          </td>
                          <td className="border p-2">
                            <Input
                              value={row.bust}
                              onChange={(e) => {
                                const rows = [...sizeChartRows];
                                rows[index].bust = e.target.value;
                                setSizeChartRows(rows);
                              }}
                            />
                          </td>
                          <td className="border p-2">
                            <Input
                              value={row.waist}
                              onChange={(e) => {
                                const rows = [...sizeChartRows];
                                rows[index].waist = e.target.value;
                                setSizeChartRows(rows);
                              }}
                            />
                          </td>
                          <td className="border p-2">
                            <Input
                              value={row.hip}
                              onChange={(e) => {
                                const rows = [...sizeChartRows];
                                rows[index].hip = e.target.value;
                                setSizeChartRows(rows);
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
}
