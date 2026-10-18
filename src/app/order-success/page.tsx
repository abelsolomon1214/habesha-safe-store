"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface OrderData {
  orderId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  items: Array<{ product: { id: string; name: string; price: number }; quantity: number }>;
  total: number;
  date: string;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("last_order");
    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch (e) {
        console.error("Failed to parse order", e);
      }
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-stone-200 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
          ✓
        </div>

        <div>
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Order Confirmed Successfully!</h1>
          <p className="text-stone-600">
            Thank you for your purchase from Habesha Coffee & Spice Market. Your order has been registered.
          </p>
        </div>

        {order ? (
          <div className="bg-stone-50 p-6 rounded-xl text-left space-y-4 border border-stone-200 text-sm">
            <div className="flex flex-col sm:flex-row justify-between border-b border-stone-200 pb-3 gap-1">
              <div>
                <span className="text-stone-500 block text-xs uppercase font-semibold">Order Reference</span>
                <span className="font-bold text-amber-900 text-base">{order.orderId}</span>
              </div>
              <div className="sm:text-right">
                <span className="text-stone-500 block text-xs uppercase font-semibold">Date</span>
                <span className="font-medium text-stone-800">{order.date}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-stone-500 block text-xs uppercase font-semibold">Customer Details</span>
                <p className="font-medium text-stone-800">{order.name}</p>
                <p className="text-stone-600">{order.email}</p>
                <p className="text-stone-600">{order.phone}</p>
              </div>
              <div>
                <span className="text-stone-500 block text-xs uppercase font-semibold">Delivery Address</span>
                <p className="text-stone-700 whitespace-pre-line">{order.address}</p>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-3">
              <span className="text-stone-500 block text-xs uppercase font-semibold mb-2">Ordered Items</span>
              <div className="space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-stone-800">
                    <span>
                      {item.product.name} <span className="text-stone-500 text-xs">x{item.quantity}</span>
                    </span>
                    <span className="font-medium">{(item.product.price * item.quantity).toLocaleString()} ETB</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone-200 mt-3 pt-3 flex justify-between font-bold text-stone-900">
                <span>Total Paid</span>
                <span className="text-amber-900">{order.total.toLocaleString()} ETB</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-stone-500 text-sm italic">
            No active order session found in current view.
          </div>
        )}

        <div className="pt-4">
          <Link
            href="/products"
            className="inline-block bg-amber-900 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-amber-800 transition-colors shadow-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
