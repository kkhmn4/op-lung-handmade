"use client";

import React, { use } from 'react';
import Image from 'next/image';
import { ShoppingBag, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import products from '@/data/products.json';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    // Unwrapping params for Next.js 15+ (if applicable, but safe for 14 too usually if awaited or using 'use')
    // In Next.js 15 params is a promise. In 14 it's an object. 
    // Given I installed 'latest', it might be 15. The 'use' hook is safe.
    const { id } = use(params);
    const product = products.find(p => p.id === id);
    const { addItem, toggleCart } = useCart();

    if (!product) {
        notFound();
    }

    const handleAddToCart = () => {
        addItem(product);
        // Optional: auto open cart
        // toggleCart(); 
    };

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="container mx-auto px-4 py-8">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gold-600 transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                            <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-gray-900 border border-white/50">
                                {product.category} Series
                            </div>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Thumbnails (Mock) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`relative aspect-square rounded-md overflow-hidden cursor-pointer border ${i === 1 ? 'border-gold-500 ring-1 ring-gold-500' : 'border-gray-200 hover:border-gold-300'}`}>
                                    <Image src={product.image} alt="Thumbnail" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>

                        <div className="flex items-center mb-6 space-x-4">
                            <span className="text-2xl font-medium text-gold-600">${product.price.toFixed(2)}</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                                <span className="text-gray-400 ml-2">(24 reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {product.description}
                            <br /><br />
                            Each case is meticulously handcrafted using premium materials to ensure durability and a luxurious finish.
                            Because you deserve a phone case as unique and beautiful as you are.
                        </p>

                        <div className="space-y-6">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <span className="text-sm font-medium text-gray-900 block mb-2">Compatibility</span>
                                <select className="w-full p-2 bg-white border border-gray-200 rounded-md text-gray-700 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none">
                                    <option>iPhone 15 Pro Max</option>
                                    <option>iPhone 15 Pro</option>
                                    <option>iPhone 15</option>
                                    <option>iPhone 14 Pro Max</option>
                                    <option>Samsung Galaxy S24 Ultra</option>
                                </select>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-black text-white py-4 rounded-full font-medium hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-gold-500/25 flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag className="w-5 h-5" /> Add to Bag
                                </button>
                                {/* Like button */}
                                <button className="p-4 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-400 hover:text-red-500">
                                    <div className="w-6 h-6">❤️</div>
                                </button>
                            </div>

                            <ul className="text-sm text-gray-500 space-y-2 mt-4">
                                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> In stock, ready to ship</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span> Free shipping on orders over $100</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span> 30-day satisfaction guarantee</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-24">
                        <h3 className="font-serif text-3xl font-bold mb-8 text-center">You May Also Adore</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
