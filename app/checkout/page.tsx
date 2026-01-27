"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CheckoutPage() {
    const { items, cartTotal } = useCart();
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success

    if (items.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
                <h1 className="font-serif text-3xl mb-4">Your bag is empty</h1>
                <Link href="/shop" className="text-gold-500 hover:text-white transition-colors border-b border-gold-500 pb-1">
                    Return to Shop
                </Link>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <Link href="/shop" className="inline-flex items-center text-gray-400 hover:text-gold-500 mb-8 transition-colors text-sm uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
                </Link>

                {step === 3 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto text-center py-20 bg-white/5 border border-white/10"
                    >
                        <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-gold-500" />
                        </div>
                        <h1 className="font-serif text-4xl font-bold mb-4">Order Confirmed!</h1>
                        <p className="text-gray-400 mb-8">Thank you for your purchase. A confirmation email has been sent.</p>
                        <Link href="/" className="inline-block bg-gold-500 text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all">
                            Back to Home
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Left Column: Form */}
                        <div>
                            <div className="mb-8">
                                <h1 className="font-serif text-3xl font-bold mb-2">Checkout</h1>
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <span className={step === 1 ? 'text-gold-500 font-bold' : ''}>Shipping</span>
                                    <span>&gt;</span>
                                    <span className={step === 2 ? 'text-gold-500 font-bold' : ''}>Payment</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {step === 1 ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-gray-500">First Name</label>
                                                <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-gray-500">Last Name</label>
                                                <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-gray-500">Email Address</label>
                                            <input required type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-wider text-gray-500">Address</label>
                                            <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-gray-500">City</label>
                                                <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-gray-500">Postal Code</label>
                                                <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full bg-gold-500 text-black py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all mt-8">
                                            Continue to Payment
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                        <div className="p-4 border border-gold-500/30 bg-gold-500/5 rounded flex items-center justify-between mb-6">
                                            <span className="text-sm text-gold-500">Secure Payment SSL Encrypted</span>
                                            <Lock className="w-4 h-4 text-gold-500" />
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-gray-500">Card Number box</label>
                                                <div className="relative">
                                                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors pl-12" />
                                                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs uppercase tracking-wider text-gray-500">Expiry Date</label>
                                                    <input required type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs uppercase tracking-wider text-gray-500">CVC</label>
                                                    <input required type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-wider text-gray-500">Cardholder Name</label>
                                                <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                                            </div>
                                        </div>

                                        <div className="flex gap-4 mt-8">
                                            <button type="button" onClick={() => setStep(1)} className="flex-1 border border-white/20 text-white py-4 font-bold uppercase tracking-widest text-sm hover:border-white transition-all">
                                                Back
                                            </button>
                                            <button type="submit" className="flex-[2] bg-gold-500 text-black py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all">
                                                Place Order
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="bg-[#0a0a0a] border border-white/10 p-8 h-fit lg:sticky lg:top-32">
                            <h2 className="font-serif text-xl font-bold mb-6 text-white pb-4 border-b border-white/10">Order Summary</h2>
                            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-16 h-20 bg-white/5 border border-white/10 flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-gold-500 text-black rounded-full flex items-center justify-center text-xs font-bold">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-sm text-white line-clamp-2 mb-1">{item.name}</h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">{item.category}</p>
                                            <p className="text-sm font-bold text-gold-500 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-white/10 text-sm">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-white/10 mt-4">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
