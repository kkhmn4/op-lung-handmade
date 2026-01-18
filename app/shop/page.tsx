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
        <div className="min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl font-bold mb-4 text-gray-900">The Collection</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Browse our complete catalog of handmade rhinestone masterpieces.
                        Filter by category to find your perfect match.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-black text-white shadow-lg scale-105'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gold-500 hover:text-gold-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No products found in this category.
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
