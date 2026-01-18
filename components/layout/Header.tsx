"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold text-gray-900">
                    Luxe<span className="text-gold-500">Cases</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-sm font-medium hover:text-gold-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/" className="text-sm font-medium hover:text-gold-600 transition-colors">
                        Shop
                    </Link>
                    <Link href="/" className="text-sm font-medium hover:text-gold-600 transition-colors">
                        Our Story
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleCart}
                        className="relative p-2 hover:bg-black/5 rounded-full transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5 text-gray-800" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-gold-500 text-white text-[10px] flex items-center justify-center rounded-full animate-bounce">
                                {cartCount}
                            </span>
                        )}
                        {cartCount === 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-gold-500 text-white text-[10px] flex items-center justify-center rounded-full">
                                0
                            </span>
                        )}
                    </button>

                    <button
                        className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            <Link href="/" className="text-sm font-medium hover:text-gold-600">Home</Link>
                            <Link href="/shop" className="text-sm font-medium hover:text-gold-600">Shop</Link>
                            <Link href="/about" className="text-sm font-medium hover:text-gold-600">Our Story</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
