
"use client";

import React from 'react';
import Link from 'next/link';

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
                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            Nâng tầm phong cách sống với những thiết kế đính đá thủ công tinh xảo.
                            Mỗi sản phẩm là một tác phẩm nghệ thuật độc bản dành riêng cho bạn.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'instagram', 'tiktok'].map((social) => (
                                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-all">
                                    <span className="capitalize text-xs">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-serif text-lg text-white mb-6">Khám Phá</h4>
                        <ul className="space-y-4">
                            <li><Link href="/shop" className="text-gray-400 hover:text-gold-400 transition-colors">Cửa Hàng</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-gold-400 transition-colors">Câu Chuyện</Link></li>
                            <li><Link href="/collections" className="text-gray-400 hover:text-gold-400 transition-colors">Bộ Sưu Tập</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-gold-400 transition-colors">Tạp Chí</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="font-serif text-lg text-white mb-6">Đăng Ký Nhận Tin</h4>
                        <p className="text-gray-400 text-sm mb-4">Nhận thông tin về bộ sưu tập mới và ưu đãi độc quyền.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email của bạn..."
                                className="w-full bg-white/5 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                            />
                            <button className="w-full bg-gold-500 text-black font-medium py-3 rounded-lg hover:bg-gold-400 transition-colors uppercase text-sm tracking-wider">
                                Đăng Ký
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
                    <p>© 2026 Luxe Cases. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
