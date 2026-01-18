"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Image from 'next/image';

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
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
                            <h2 className="font-serif text-xl font-bold flex items-center">
                                <ShoppingBag className="w-5 h-5 mr-2 text-gold-500" />
                                Your Bag
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close cart"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-500">
                                    <ShoppingBag className="w-16 h-16 mb-4 text-gray-200" />
                                    <p className="text-lg font-medium">Your bag is empty</p>
                                    <p className="text-sm">Start adding some luxury to your life.</p>
                                    <button onClick={toggleCart} className="mt-6 text-gold-600 hover:text-gold-700 font-medium">
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="relative w-20 h-24 flex-shrink-0 bg-white rounded-md overflow-hidden border border-gray-200">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                                                <p className="text-gold-600 font-semibold">${item.price.toFixed(2)}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center bg-white border border-gray-200 rounded-md">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-1 hover:text-gold-600 disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-1 hover:text-gold-600"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-4 bg-white border-t border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-serif text-xl font-bold">${cartTotal.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-black text-white py-4 font-medium hover:bg-gold-500 transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                                    Checkout <ShoppingBag className="w-4 h-4" />
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-3">
                                    Shipping & taxes calculated at checkout
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
