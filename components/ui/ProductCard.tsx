"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 left-2">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium uppercase tracking-wider rounded-sm">
                        {product.category}
                    </span>
                </div>
            </Link>

            <div className="p-4">
                <h3 className="font-serif text-lg font-medium text-gray-900 line-clamp-1 mb-1">
                    <Link href={`/product/${product.id}`} className="hover:text-gold-600 transition-colors">
                        {product.name}
                    </Link>
                </h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-gold-600 font-bold">${product.price.toFixed(2)}</span>
                    <button className="p-2 bg-black text-white rounded-full hover:bg-gold-500 hover:scale-110 transition-all duration-300">
                        <ShoppingCart className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
