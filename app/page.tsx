"use client";

import Image from "next/image";
import Link from 'next/link';
import ProductCard from "@/components/ui/ProductCard";
import products from "@/data/products.json";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  // Group products
  const tumblers = products.filter(p => p.category === 'Bling Tumblers').slice(0, 4);
  const snowWhite = products.filter(p => p.category === 'Snow White Series').slice(0, 4);
  const cuteness = products.filter(p => p.category === 'Cuteness Overload').slice(0, 4);

  return (
    <div className="min-h-screen bg-black-rich text-white overflow-hidden">
      {/* Luxury Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/24fbdd8db3ca05945cdb10.jpg" // Using a high-quality product image as atmospheric background
            alt="Hero Background"
            fill
            className="object-cover opacity-30 scale-110 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-black-rich/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <span className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase border-y border-gold-400/30 py-2 px-6">
              Handmade Luxury
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white tracking-tight leading-none text-glow">
            Luxe <span className="text-gold-400 italic">Cases</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Kết tinh của nghệ thuật thủ công và sự lấp lánh vĩnh cửu. <br />
            Khẳng định đẳng cấp riêng biệt.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/shop" className="bg-gold-500 text-black px-12 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Khám Phá Bộ Sưu Tập
            </Link>
            <Link href="#custom" className="border border-white text-white px-12 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Đặt Thiết Kế Riêng
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="custom" className="py-32 bg-black-soft relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Tuyệt Tác <br />
                <span className="text-gold-400">Thủ Công</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                Mỗi viên đá rhinestone đều được nghệ nhân của chúng tôi đính kết thủ công tỉ mỉ trong hàng giờ liền.
                Chúng tôi không tạo ra sản phẩm công nghiệp, chúng tôi tạo ra những tác phẩm nghệ thuật mang đậm dấu ấn cá nhân của bạn.
              </p>
              <div className="flex gap-12 border-t border-gray-800 pt-8">
                <div>
                  <span className="block text-4xl font-serif text-gold-400 mb-2">100%</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Handmade</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif text-gold-400 mb-2">∞</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Bảo Hành Đá</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square border border-gray-800 p-8 rotate-3"
            >
              <div className="absolute inset-0 bg-gold-400/10 -rotate-6 transform origin-center z-0"></div>
              <div className="relative z-10 w-full h-full bg-gray-900 border border-gold-400/30 flex items-center justify-center overflow-hidden group">
                <Image
                  src="/images/1c643a775530e36eba211.jpg"
                  alt="Craftsmanship"
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl animate-pulse">💎</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collection: Bling Tumblers */}
      <section className="py-32 bg-white text-black-rich">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold-600 font-bold tracking-widest uppercase text-sm block mb-3">Best Sellers</span>
              <h2 className="font-serif text-5xl font-bold">Bling Tumblers</h2>
            </div>
            <Link href="/shop?category=Bling%20Tumblers" className="hidden md:block text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2 hover:text-gold-600 hover:border-gold-600 transition-all">
              Xem Tất Cả
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {tumblers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Highlight: Snow White */}
      <section className="py-32 bg-black-rich relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/24fbdd8db3ca05945cdb10.jpg')] bg-fixed bg-cover opacity-20 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black-rich via-transparent to-black-rich"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Limited Edition</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">Snow White Series</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Tái hiện cổ tích dưới góc nhìn hiện đại. Sự kết hợp táo bạo giữa vẻ đẹp kinh điển và phong cách Kidcore thời thượng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {snowWhite.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/shop?category=Snow%20White%20Series" className="inline-block border border-white text-white px-10 py-3 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Xem Bộ Sưu Tập
            </Link>
          </div>
        </div>
      </section>

      {/* Cuteness Overload */}
      <section className="py-32 bg-gold-50 text-black-rich">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Cuteness Overload</h2>
            <p className="text-gray-500">Những liều thuốc tinh thần mang lại sự thư thái và vui tươi mỗi ngày.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cuteness.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
