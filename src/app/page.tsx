import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-amber-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Habesha Coffee & Spice Market</h1>
          <p className="mt-4 text-lg text-amber-200">
            Our store helps coffee lovers and cultural enthusiasts find and buy authentic Ethiopian coffee beans, traditional spices, and handmade crafts.
          </p>
          <div className="mt-8">
            <Link
              href="/products"
              className="bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 px-8 rounded-lg shadow transition text-lg"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link href="/products" className="text-amber-700 hover:underline font-medium text-sm">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
