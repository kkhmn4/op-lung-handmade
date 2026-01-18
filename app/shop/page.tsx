"use client";

import React, { useState, useMemo, Suspense } from 'react';
import ProductCard from "@/components/ui/ProductCard";
import products from "@/data/products.json";
import { useSearchParams } from 'next/navigation';

function ShopContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen pb-20 pt-10 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 relative py-12">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <h1 className="text-9xl font-serif font-bold text-gray-900 tracking-tighter">LUXE</h1>
                    </div>
                    <div className="relative z-10">
                        <span className="text-gold-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Official Store</span>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-gray-900">The Collection</h1>
                        <p className="text-gray-500 max-w-xl mx-auto font-light text-lg">
                            Khám phá những tuyệt tác đính đá thủ công. <br />
                            Nơi nghệ thuật gặp gỡ phong cách sống.
                        </p>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16 sticky top-24 z-30 py-4">
                    <div className="glass p-2 rounded-full flex gap-2 overflow-x-auto max-w-full">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                                        ? 'bg-black text-white shadow-lg'
                                        : 'text-gray-500 hover:text-gold-600 hover:bg-gold-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="font-serif text-2xl text-gray-400 italic">"Chưa có sản phẩm nào trong danh mục này."</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Shop() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ShopContent />
        </Suspense>
    );
}
