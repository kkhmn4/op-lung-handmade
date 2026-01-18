"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { toggleCart, cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'glass-dark py-2' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-current hover:text-gold-400 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Desktop Nav (Left) */}
                <nav className="hidden md:flex items-center space-x-10 w-1/3">
                    <Link href="/" className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold-400 ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
                        Trang Chủ
                    </Link>
                    <Link href="/shop" className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold-400 ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
                        Cửa Hàng
                    </Link>
                    <Link href="/about" className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold-400 ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
                        Câu Chuyện
                    </Link>
                </nav>

                {/* Logo (Center) */}
                <div className="w-1/3 flex justify-center">
                    <Link href="/" className={`font-serif text-3xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
                        Luxe<span className="text-gold-400">Cases</span>
                    </Link>
                </div>

                {/* Actions (Right) */}
                <div className="flex items-center justify-end space-x-6 w-1/3">
                    <button
                        onClick={toggleCart}
                        className={`relative p-2 transition-colors hover:text-gold-400 ${isScrolled ? 'text-white' : 'text-gray-900'}`}
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-black text-[10px] font-bold flex items-center justify-center rounded-full animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40 md:hidden"
                    >
                        <nav className="flex flex-col items-center justify-center h-full space-y-8">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-white hover:text-gold-400">Trang Chủ</Link>
                            <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-white hover:text-gold-400">Cửa Hàng</Link>
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-white hover:text-gold-400">Câu Chuyện</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
