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
            <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-900 border border-white/5 mb-4 group-hover:border-gold-500/30 transition-colors duration-500">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Quick Actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 flex gap-2">
                    <button
                        onClick={handleQuickAdd}
                        className="flex-1 bg-gold-500 text-black font-bold py-3 text-xs uppercase tracking-widest hover:bg-white transition-colors shadow-lg"
                    >
                        Add to Bag
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-colors">
                        <Eye className="w-4 h-4" />
                    </button>
                </div>

                {/* Badge (Optional - can be added later based on logic) */}
                {/* <div className="absolute top-3 left-3 bg-gold-500 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                    New
                </div> */}
            </Link>

            {/* Info */}
            <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 border-l border-gold-500/50 pl-2">{product.category}</div>
                <h3 className="font-serif text-lg text-white group-hover:text-gold-400 transition-colors mb-2 leading-tight">
                    <Link href={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>
                <span className="block text-gold-500 font-bold tracking-wide">${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
}
