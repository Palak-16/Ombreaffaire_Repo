'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function EditCategoryPage() {
  const router = useRouter()
  const { id } = useParams()
  const [name, setName] = useState('')
  const [existingImage, setExistingImage] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    fetch(`${apiUrl}/api/admin/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.category) {
          setName(data.category.name)
          setExistingImage(data.category.image_url)
        }
      })
  }, [id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = new FormData()
    form.append('name', name)
    if (imageFile) form.append('image', imageFile)

    const res = await fetch(`${apiUrl}/api/admin/categories/${id}`, {
      method: 'PUT',
      body: form,
    })

    if (res.ok) {
      router.push('/admin/categories')
    } else {
      alert('Update failed')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Edit Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Category Name"
          className="border w-full px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
        {existingImage && (
          <div>
            <p className="text-sm text-muted">Current Image:</p>
            <img src={existingImage} alt="Current" className="w-48 rounded" />
          </div>
        )}
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  )
}
