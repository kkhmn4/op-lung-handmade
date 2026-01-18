"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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
    const { addItem } = useCart();

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
    };

    return (
        <div className="group relative">
            {/* Image Container */}
            <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 mb-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 flex gap-2">
                    <button
                        onClick={handleQuickAdd}
                        className="flex-1 bg-white/90 backdrop-blur text-black font-medium py-3 text-xs uppercase tracking-widest hover:bg-gold-400 hover:text-white transition-colors"
                    >
                        Add to Cart
                    </button>
                    <button className="bg-white/90 backdrop-blur text-black p-3 hover:bg-gold-400 hover:text-white transition-colors">
                        <Eye className="w-4 h-4" />
                    </button>
                </div>
            </Link>

            {/* Info */}
            <div className="text-center">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{product.category}</div>
                <h3 className="font-serif text-lg text-gray-900 group-hover:text-gold-600 transition-colors mb-2">
                    <Link href={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>
                <span className="text-gold-600 font-bold">${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
}
