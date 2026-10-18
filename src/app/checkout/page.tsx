"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !address.trim()) {
      setError("Please fill in all required customer and delivery details.");
      return;
    }

    // Save order summary to sessionStorage for the success confirmation page
    const orderData = {
      orderId: "HAB-" + Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      phone,
      address,
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleDateString(),
    };

    sessionStorage.setItem("last_order", JSON.stringify(orderData));
    clearCart();
    router.push("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-stone-200">
          <div className="text-5xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Your Cart is Empty</h1>
          <p className="text-stone-600 mb-6">Add items to your cart before proceeding to checkout.</p>
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
      <div className="mb-8">
        <Link href="/cart" className="text-sm font-medium text-amber-900 hover:text-amber-800">
          ← Back to Cart
        </Link>
        <h1 className="text-3xl font-bold text-stone-900 mt-2">Checkout & Delivery Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Order Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Customer Information</h2>

          {error && <div className="mb-6 bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-200">{error}</div>}

          <form onSubmit={handleSubmitOrder} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Abebe Bikila"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abebe@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+251 91 234 5678"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Delivery Address & Notes *</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Bole Road, Addis Ababa near Edna Mall. Gate code or special instructions."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-900 resize-none"
              />
            </div>

            <div className="pt-4 border-t border-stone-100">
              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-4 rounded-xl font-medium hover:bg-amber-800 transition-colors shadow-sm text-base"
              >
                Submit Order ({totalPrice.toLocaleString()} ETB)
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm h-fit space-y-6">
          <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-4">Order Summary</h2>

          <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center text-sm">
                <span className="text-stone-600 line-clamp-1 flex-grow mr-2">
                  {item.product.name} <span className="text-xs text-stone-400">x{item.quantity}</span>
                </span>
                <span className="font-medium text-stone-900 flex-shrink-0">
                  {(item.product.price * item.quantity).toLocaleString()} ETB
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100 pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Items ({totalItems})</span>
              <span>{totalPrice.toLocaleString()} ETB</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Delivery (Addis Ababa)</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-stone-900 pt-2 border-t border-stone-100">
              <span>Total Due</span>
              <span className="text-amber-900">{totalPrice.toLocaleString()} ETB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
