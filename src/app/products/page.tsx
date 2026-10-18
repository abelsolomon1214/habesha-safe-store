"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const CATEGORIES = ["All", "Coffee", "Spices", "Crafts"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 tracking-tight">Market Catalogue</h1>
        <p className="text-stone-600 mt-1">
          Browse authentic Ethiopian single-origin coffees, organic spices, and handcrafted goods.
        </p>

        {/* Phase 3 Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <span className="text-xs font-semibold text-stone-500 uppercase mr-2">Filter by:</span>
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-amber-900 text-white shadow-sm"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-stone-400 mt-3">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
          <p className="text-stone-500">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
