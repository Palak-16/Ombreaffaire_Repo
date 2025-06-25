"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Category = {
  id: string;
  slug: string;
  name: string;
  image_url: string;
};

export default function CategoryListPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/admin/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return

    const res = await fetch(`http://localhost:3001/api/admin/categories/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      setCategories(categories.filter((cat) => cat.id !== id))
    } else {
      alert('Failed to delete category')
    }
  }


  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Categories</h2>
        <Button asChild>
          <Link href="/admin/categories/new">+ Add Category</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="rounded shadow p-4">
            <Image
              src={cat.image_url}
              alt={cat.name}
              width={300}
              height={200}
              className="rounded mb-2"
            />
            <h3 className="font-semibold">{cat.name}</h3>
            <p className="text-sm text-muted-foreground">{cat.slug}</p>
            <div className="mt-2 flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/categories/${cat.id}/edit`}>Edit</Link>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(cat.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
