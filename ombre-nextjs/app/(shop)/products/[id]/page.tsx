"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/product-card";
import { useCart } from "@/hooks/use-cart";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import MediaRenderer from "@/components/ui/MediaRenderer";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  colors: { name: string; value: string }[];
  sizes: { size: string; inventory: number }[];
  imagesByColor: { [colorId: string]: string[] }; // <-- new
  features: string[];
  mainImageByColor: { [colorId: string]: string };
};

export default function ProductPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  
  const { items, addItem } = useCart();

  const { toggleItem, isFavorite } = useFavorites();

  // Add this inside the component
  const [product, setProduct] = useState<Product | null>(null);
  

  
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

useEffect(() => {
  if (product && selectedColor) {
    const mainImage = product.mainImageByColor?.[selectedColor];
    const imageList = product.imagesByColor?.[selectedColor] || [];

    const index = imageList.findIndex((img) => img === mainImage);
    setActiveImageIndex(index >= 0 ? index : 0);
  }
}, [selectedColor, product]);


  useEffect(() => {
    setActiveImageIndex(0); // reset to first image when color changes
  }, [selectedColor]);

  const [loading, setLoading] = useState(true);
  const favorite = product ? isFavorite(product.id) : false;

  const params = useParams();
  const id = params?.id;
  const allSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
        
      } catch (err) {
        console.error("Failed to load product", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
  if (product && !selectedColor && product.colors.length > 0) {
    setSelectedColor(product.colors[0].value); // default to first color’s hex
  }
}, [product, selectedColor]);


  const [relatedProducts, setRelatedProducts] = useState([]);

  // useEffect(() => {
  //   if (product?.category) {
  //     fetch(`${apiUrl}/api/products/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setRelatedProducts(data.products || []));
  //   }
  // }, [product]);
  // Get the token from localStorage
  const router = useRouter();
const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

const [isInCart, setIsInCart] = useState(false);

useEffect(() => {
  if (!product || !selectedSize || !selectedColor) return;
  const token = localStorage.getItem("token");
if (!token) {
  setIsInCart(false);
  return;
}

fetch(
  `${apiUrl}/api/cart?` +
    `product=${product.id}` +
    `&size=${selectedSize}` +
    `&color=${encodeURIComponent(selectedColor)}`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,     // ← this line
    },
  }
)
  .then(r => r.json())
  .then(d => setIsInCart(!!d.inCart))
  .catch(() => setIsInCart(false));

}, [product, selectedSize, selectedColor, items]);

console.log("Product:", product);
console.log("isInCart:", isInCart);
  const handleAddToCart = () => {
    if (!product) return;
    if (!token) {
    localStorage.setItem(
      "pendingAction",
      JSON.stringify({
        type: "cart",
        item: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: selectedColor ? product.imagesByColor?.[selectedColor]?.[0] : "/placeholder.svg",
          quantity,
          size: selectedSize,
          color: selectedColor ?? "",
        },
      })
    );
    router.push(`/login?redirect=/products/${product.id}`);
    return;
  }
  console.log("Adding to cart with:", {
  id: product.id,
  size: selectedSize,
  color: selectedColor,
});

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedColor ? product.imagesByColor?.[selectedColor]?.[0] : "/placeholder.svg",
      quantity: quantity,
      size: selectedSize,
      color: selectedColor ?? "",
    });
  };

  const handleToggleFavorite = () => {
    if (!product) return;
     if (!token) {
    localStorage.setItem(
      "pendingAction",
      JSON.stringify({
        type: "favorite",
        item: {
          id: product.id,
          name: product.name,
          price: product.price,
          image:
            selectedColor
              ? product.mainImageByColor?.[selectedColor] ||
                product.imagesByColor?.[selectedColor]?.[0]
              : "/placeholder.svg",
          category: product.category,
          size: selectedSize,
          color: selectedColor ?? undefined,
        },
      })
    );
    router.push(`/login?redirect=/products/${product.id}`);
    return;
  }

    toggleItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedColor
        ? product.mainImageByColor?.[selectedColor] ||
          product.imagesByColor?.[selectedColor]?.[0] ||
          "/placeholder.svg"
        : "/placeholder.svg",
      category: product.category,
      size: selectedSize,
      color: selectedColor ?? undefined,
    });
  };

  // Update the quantity handlers
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  if (loading) {
    return <div className="text-center py-20">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500">Product not found.</div>
    );
  }

  // Get images for selectedColor
  const imagesForColor =
    selectedColor && product?.imagesByColor?.[selectedColor]
      ? product.imagesByColor[selectedColor]
      : ["/placeholder.svg"];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link
          href="/products"
          className="text-muted-foreground hover:text-foreground"
        >
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link
          href={`/category/${product.category.toLowerCase()}`}
          className="text-muted-foreground hover:text-foreground"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
            <MediaRenderer
              src={imagesForColor[activeImageIndex]}
              alt={product.name}
              width={600}
              height={800}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {imagesForColor.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "aspect-[3/4] overflow-hidden rounded-lg bg-muted cursor-pointer",
                  activeImageIndex === index ? "ring-2 ring-primary" : ""
                )}
                onClick={() => setActiveImageIndex(index)}
              >
                <MediaRenderer
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  width={150}
                  height={200}
                  className="h-full w-full object-cover object-center hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-medium mt-2">
            ₹{product.price.toFixed(2)}
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-medium mb-2">Color</h2>
            <RadioGroup
              value={selectedColor ?? undefined}
              onValueChange={setSelectedColor}
              className="flex gap-3"
            >
              {product.colors.map((color) => (
                <div key={color.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={color.value}
                    id={`color-${color.value}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`color-${color.value}`}
                    className="flex flex-col items-center gap-1 rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <span
                      className="h-8 w-8 rounded-full"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="text-xs">{color.name}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium mb-2">Size</h2>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              className="flex flex-wrap gap-3"
            >
              {allSizes.map((size) => {
                const match = product.sizes.find((s) => s.size === size);
                const inventory = match?.inventory ?? 0;

                return (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="peer sr-only"
                      disabled={inventory === 0}
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                        inventory === 0 &&
                          "line-through opacity-50 cursor-not-allowed"
                      )}
                    >
                      {size}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>

            <Link
              href="/size-guide"
              className="text-sm text-muted-foreground hover:text-foreground mt-2 inline-block"
            >
              Size Guide
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium mb-2">Quantity</h2>
            <div className="flex items-center border rounded-md w-32">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={decreaseQuantity}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="flex-1 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={increaseQuantity}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              {isInCart ? (
  <Button size="lg" className="flex-1" onClick={() => router.push("/cart")}>
    <ShoppingBag className="mr-2 h-5 w-5" />
    Go to Cart
  </Button>
) : (
  <Button size="lg" className="flex-1" onClick={handleAddToCart}>
    <ShoppingBag className="mr-2 h-5 w-5" />
    Add to Cart
  </Button>
)}


              <Button
                variant="outline"
                size="icon"
                className={cn("h-12 w-12", favorite ? "text-red-500" : "")}
                onClick={handleToggleFavorite}
              >
                <Heart
                  className={cn("h-5 w-5", favorite ? "fill-current" : "")}
                />
                <span className="sr-only">
                  {favorite ? "Remove from favorites" : "Add to favorites"}
                </span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="description" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </TabsContent>

            <TabsContent value="features" className="mt-4">
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {product?.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <div className="text-muted-foreground">
                <p className="mb-2">
                  Free standard shipping on all orders over $100.
                </p>
                <p className="mb-2">
                  Express shipping available for an additional fee.
                </p>
                <p>
                  Returns accepted within 30 days of delivery. Item must be
                  unworn with original tags attached.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
