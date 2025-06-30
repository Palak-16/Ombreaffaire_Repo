import { redirect } from "next/navigation";

export default function CategoryRedirectPage({ params }: { params: { slug: string } }) {
  return redirect(`/products?category=${params.slug}`);
}
