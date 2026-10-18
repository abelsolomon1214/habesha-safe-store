"use client";

import { Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents triggering parent link navigation if clicked
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">
      <Link href={`/products/${product.id}`} className="relative h-56 w-full bg-stone-100 overflow-hidden block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-amber-900 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
      </Link>

      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold text-stone-900 text-lg hover:text-amber-900 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-stone-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="space-y-3 pt-2 border-t border-stone-100">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-amber-900">{product.price} ETB</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/products/${product.id}`}
              className="py-2.5 px-3 text-center rounded-xl text-sm font-medium border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors"
            >
              View Details
            </Link>
            <button
              onClick={handleAdd}
              className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all shadow-sm ${
                added
                  ? "bg-emerald-700 text-white"
                  : "bg-amber-900 text-white hover:bg-amber-800"
              }`}
            >
              {added ? "✓ Added" : "+ Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
