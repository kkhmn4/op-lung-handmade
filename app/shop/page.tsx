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
        <div className="min-h-screen pb-20 pt-24 bg-[#050505] text-white">
            <div className="container mx-auto px-4">
                {/* Shop Header */}
                <div className="text-center mb-16 relative py-12">
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                        <h1 className="text-[12rem] font-serif font-bold text-white tracking-widest blur-sm">VAULT</h1>
                    </div>
                    <div className="relative z-10">
                        <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block border border-gold-500/30 rounded-full py-1 px-3 inline-block backdrop-blur-md">
                            Official Collection
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Masterpieces</span>
                        </h1>
                        <p className="text-gray-400 max-w-xl mx-auto font-light text-lg leading-relaxed">
                            Khám phá những tuyệt tác đính đá thủ công. <br />
                            Sự kết hợp hoàn hảo giữa nghệ thuật và đẳng cấp.
                        </p>
                    </div>
                </div>

                {/* Filter Tabs - Glass Style */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-20 sticky top-24 z-30 py-6 pointer-events-none">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-full flex gap-2 overflow-x-auto max-w-full pointer-events-auto shadow-2xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                                    ? 'bg-gold-500 text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-32 border border-white/5 rounded-lg bg-white/5">
                        <p className="font-serif text-2xl text-gray-500 italic">"Chưa có sản phẩm nào trong danh mục này."</p>
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className="mt-6 text-gold-500 hover:text-gold-400 text-sm uppercase tracking-widest border-b border-gold-500/50 pb-1"
                        >
                            Xem tất cả sản phẩm
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Shop() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-gold-500">Loading Vault...</div>}>
            <ShopContent />
        </Suspense>
    );
}
