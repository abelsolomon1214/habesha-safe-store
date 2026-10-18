import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Link from "next/link";
import CartBadge from "@/components/CartBadge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habesha Coffee & Spice Market",
  description: "Authentic Ethiopian coffee, spices, and traditional crafts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900 min-h-screen flex flex-col`}
      >
        <CartProvider>
          <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link href="/" className="font-bold text-xl tracking-tight text-amber-900 flex items-center gap-2">
                <span>☕</span> Habesha Market
              </Link>
              <nav className="flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:text-amber-800 transition-colors">
                  Home
                </Link>
                <Link href="/products" className="text-sm font-medium hover:text-amber-800 transition-colors">
                  Catalogue
                </Link>
                <Link
                  href="/cart"
                  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900 text-white text-sm font-medium hover:bg-amber-800 transition-colors shadow-sm"
                >
                  <span>🛒 Cart</span>
                  <CartBadge />
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-stone-900 text-stone-300 py-8 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 text-center text-sm">
              <p>© {new Date().getFullYear()} Habesha Coffee & Spice Market. Built with Next.js & TypeScript.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
