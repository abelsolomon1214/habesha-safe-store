import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/products"
        className="inline-flex items-center text-sm font-medium text-amber-900 hover:text-amber-800 mb-8 transition-colors"
      >
        ← Back to Catalogue
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-sm bg-stone-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
          <div>
            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-stone-900 mb-2">{product.name}</h1>
            <div className="text-2xl font-bold text-amber-900">{product.price} ETB</div>
          </div>

          <p className="text-stone-600 leading-relaxed">{product.description}</p>

          <div className="border-t border-stone-100 pt-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-stone-500">
              <span>Availability: In Stock</span>
              <span>Origin: Ethiopia</span>
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
