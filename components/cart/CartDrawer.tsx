"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
    const { isCartOpen, toggleCart, items, removeItem, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col border-l border-gold-100"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
                            <h2 className="font-serif text-2xl font-bold flex items-center">
                                <span className="text-gold-500 mr-2">✦</span> Your Bag
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
                                aria-label="Close cart"
                            >
                                <X className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-500">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                        <ShoppingBag className="w-8 h-8 text-gray-300" />
                                    </div>
                                    <p className="font-serif text-xl text-gray-900 mb-2">Giỏ hàng trống</p>
                                    <p className="text-sm font-light">Hãy thêm chút lấp lánh vào bộ sưu tập của bạn.</p>
                                    <button onClick={toggleCart} className="mt-8 text-gold-600 hover:text-gold-700 font-bold uppercase tracking-widest text-xs border-b border-gold-200 pb-1">
                                        Tiếp Tục Mua Sắm
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-24 h-32 flex-shrink-0 bg-gray-50 rounded-sm overflow-hidden border border-gray-100">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-serif text-lg font-medium text-gray-900 line-clamp-2 leading-tight mb-1">
                                                        <Link href={`/product/${item.id}`} onClick={toggleCart} className="hover:text-gold-600 transition-colors">
                                                            {item.name}
                                                        </Link>
                                                    </h3>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-gray-300 hover:text-red-500 transition-colors -mr-2 p-2"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-sm text-gray-500 bg-gray-50 inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">{item.category}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center border border-gray-200 rounded-full h-8">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-full flex items-center justify-center hover:text-gold-600 disabled:opacity-30 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-6 text-center text-xs font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-full flex items-center justify-center hover:text-gold-600 transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 bg-gray-50 border-t border-gray-100">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Tạm Tính</span>
                                    <span className="font-serif text-2xl font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
                                </div>
                                <Link href="/checkout" onClick={toggleCart} className="w-full bg-black text-white py-4 font-bold hover:bg-gold-500 transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3">
                                    Thanh Toán <span className="text-gold-500">→</span>
                                </Link>
                                <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-wider">
                                    Miễn phí vận chuyển cho đơn hàng &gt; $500
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
