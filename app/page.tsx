"use client";

import Image from "next/image";
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
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
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/24fbdd8db3ca05945cdb10.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20 scale-105 animate-pulse-slow blur-sm grayscale hover:grayscale-0 transition-all duration-[3s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-8">
            <span className="text-gold-400 text-xs font-bold tracking-[0.4em] uppercase border border-gold-400/30 py-3 px-8 rounded-full backdrop-blur-md">
              Handmade Luxury
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white tracking-tight leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Antigravity <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic">Sparkle</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Tác phẩm nghệ thuật đính đá thủ công. <br className="hidden md:block" />
            Nơi vẻ đẹp lấp lánh khẳng định đẳng cấp độc bản của bạn.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/shop"
              className="group relative px-10 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-gold-400 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-overlay" />
            </Link>
            <Link
              href="/about"
              className="group px-10 py-4 border border-white/20 hover:border-gold-500 text-white hover:text-gold-400 font-bold uppercase tracking-widest text-sm transition-all duration-300 backdrop-blur-sm"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Curated Collections</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Bling Tumblers", image: "/images/055a846ff6284076193915.jpg", desc: "Ly giữ nhiệt đính đá", link: "Bling%20Tumblers" },
              { title: "Snow White Series", image: "/images/3a0a21325375e52bbc6413.jpg", desc: "Bộ sưu tập Bạch Tuyết", link: "Snow%20White%20Series" },
              { title: "Fashion Cases", image: "/images/1c643a775530e36eba211.jpg", desc: "Ốp lưng thời trang", link: "Fashion%20&%20Patterns" },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-[500px] overflow-hidden border border-white/5 bg-white/5"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-gold-400 transition-colors">{cat.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.desc}</p>
                  <Link href={`/shop?category=${cat.link}`} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white border-b border-gold-500 pb-1 hover:text-gold-400 transition-colors">
                    Explore <ArrowRight className="w-3 h-3 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Highlight 1: Snow White */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gold-500/20 blur-3xl rounded-full opacity-20 pointer-events-none" />
              <div className="relative aspect-[4/5] border border-white/10 overflow-hidden">
                <Image src="/images/24fbdd8db3ca05945cdb10.jpg" alt="Snow White" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Limited Edition</span>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-none">Snow White <br /><span className="italic text-gray-500">Series</span></h2>
              <p className="text-gray-400 text-lg font-light mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                Tái hiện cổ tích dưới góc nhìn hiện đại. Sự kết hợp táo bạo giữa vẻ đẹp kinh điển và phong cách Kidcore thời thượng.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {snowWhite.slice(0, 2).map((product) => (
                  <div key={product.id} className="text-left group">
                    <div className="relative aspect-square overflow-hidden mb-3 border border-white/5 bg-white/5">
                      <Image src={product.image} alt={product.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="font-serif text-sm text-gray-300 truncate">{product.name}</h4>
                    <p className="text-gold-500 text-xs font-bold">${product.price}</p>
                  </div>
                ))}
              </div>

              <Link href="/shop?category=Snow%20White%20Series" className="inline-block px-8 py-3 border border-gold-500/50 text-gold-500 font-bold uppercase tracking-widest text-xs hover:bg-gold-500 hover:text-black transition-all">
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Text */}
      <div className="py-6 bg-gold-500 text-black overflow-hidden whitespace-nowrap border-y border-gold-400">
        <div className="animate-marquee inline-block">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className="mx-12 font-serif text-xl font-bold uppercase tracking-[0.2em] flex items-center gap-12">
              Antigravity Sparkle <span className="text-2xl">✦</span> Handmade Luxury <span className="text-2xl">✦</span> Shine Your Way
            </span>
          ))}
        </div>
      </div>

      {/* Collection Highlight 2: Bling Tumblers */}
      <section className="py-32 bg-black text-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-gray-500 font-bold tracking-widest uppercase text-sm block mb-3">Best Sellers</span>
              <h2 className="font-serif text-5xl font-bold">Bling Tumblers</h2>
            </div>
            <Link href="/shop?category=Bling%20Tumblers" className="hidden md:block text-sm font-bold uppercase tracking-widest border-b border-gold-500 pb-2 hover:text-gold-500 transition-all">
              Xem Tất Cả
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tumblers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/shop?category=Bling%20Tumblers" className="inline-block text-sm font-bold uppercase tracking-widest border-b border-gold-500 pb-2 hover:text-gold-500 transition-all">
              Xem Tất Cả
            </Link>
          </div>
        </div>
      </section>

      {/* Cuteness Overload */}
      <section className="py-32 bg-[#111] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Cuteness Overload</h2>
            <p className="text-gray-400 font-light text-lg">Những liều thuốc tinh thần mang lại sự thư thái và vui tươi mỗi ngày.</p>
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
