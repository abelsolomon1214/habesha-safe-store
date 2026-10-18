"use client";

import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleAdd}
      className={`w-full py-3 px-6 rounded-xl font-medium transition-all shadow-sm flex items-center justify-center gap-2 ${
        added
          ? "bg-emerald-700 text-white"
          : "bg-amber-900 text-white hover:bg-amber-800"
      }`}
    >
      <span>{added ? "✓ Added to Cart!" : "🛒 Add to Cart"}</span>
    </button>
  );
}
