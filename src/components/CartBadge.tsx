"use client";

import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
      {totalItems}
    </span>
  );
}
