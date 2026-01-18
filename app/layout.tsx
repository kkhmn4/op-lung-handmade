import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Cases | Handmade Rhinestone Masterpieces",
  description: "Exclusive handmade phone cases with premium rhinestones and elegant designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="pt-20 min-h-screen">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
