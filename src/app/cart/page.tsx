"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-stone-200">
          <div className="text-5xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Your Cart is Empty</h1>
          <p className="text-stone-600 mb-6">Explore our authentic Ethiopian coffee, spices, and crafts to fill your cart.</p>
          <Link
            href="/products"
            className="inline-block bg-amber-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-amber-800 transition-colors"
          >
            Browse Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-stone-900 mb-8">Shopping Cart ({totalItems} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-stone-900">{item.product.name}</h3>
                <p className="text-sm text-stone-500 mb-2">{item.product.category}</p>
                <div className="text-amber-900 font-semibold">{item.product.price} ETB</div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-lg border border-stone-300 flex items-center justify-center hover:bg-stone-100 font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-lg border border-stone-300 flex items-center justify-center hover:bg-stone-100 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium p-2"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-stone-500 hover:text-red-600 text-sm font-medium transition-colors pt-2"
          >
            Clear Entire Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm h-fit space-y-6">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-4">Order Summary</h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span>{totalPrice.toLocaleString()} ETB</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Shipping (Addis Ababa)</span>
              <span>Free</span>
            </div>
            <div className="border-t border-stone-100 pt-3 flex justify-between text-lg font-bold text-stone-900">
              <span>Total</span>
              <span className="text-amber-900">{totalPrice.toLocaleString()} ETB</span>
            </div>
          </div>

          <button
            onClick={() => router.push("/checkout")}
            className="w-full bg-amber-900 text-white py-3.5 rounded-xl font-medium hover:bg-amber-800 transition-colors shadow-sm text-center block"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
