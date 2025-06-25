'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function AddCategoryPage() {
  const router = useRouter();
  const [name, setName] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !imageFile) return alert('Fill all fields')

    const formData = new FormData()
    formData.append('name', name)
    formData.append('image', imageFile)

    const res = await fetch(`${apiUrl}/api/admin/categories/add`, {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    if (res.ok){
         alert('Category added!')
         router.push('/admin/categories')
    }
    else alert('Error: ' + data.error)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        className="w-full p-2 border"
      />
      <button type="submit" className="bg-black text-white px-4 py-2">Add Category</button>
    </form>
  )
}
