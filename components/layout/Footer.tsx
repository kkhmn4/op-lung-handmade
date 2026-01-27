
"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black-rich text-white border-t border-gray-premium">
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block text-3xl font-serif font-bold text-white mb-6">
                            Luxe<span className="text-gold-400">Cases</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Nâng tầm phong cách với những chiếc ốp lưng và bình giữ nhiệt thủ công cao cấp. Khẳng định đẳng cấp độc bản.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500 transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gold-500">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/shop" className="hover:text-white transition-colors">Tất Cả Sản Phẩm</Link></li>
                            <li><Link href="/shop?category=Bling%20Tumblers" className="hover:text-white transition-colors">Bling Tumblers</Link></li>
                            <li><Link href="/shop?category=Snow%20White%20Series" className="hover:text-white transition-colors">Snow White Series</Link></li>
                            <li><Link href="/custom" className="hover:text-white transition-colors">Thiết Kế Riêng</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gold-500">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">Về Chúng Tôi</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Liên Hệ</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">Câu Hỏi Thường Gặp</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Vận Chuyển</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gold-500">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Đăng ký để nhận thông tin về bộ sưu tập mới nhất.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 flex-1 w-full"
                            />
                            <button className="bg-gold-500 text-black px-4 py-3 font-bold text-xs uppercase hover:bg-gold-400 transition-colors">
                                Gửi
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2024 Antigravity Luxe. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
