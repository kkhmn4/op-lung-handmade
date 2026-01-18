import Image from "next/image";
import Link from 'next/link';
import ProductCard from "@/components/ui/ProductCard";
import products from "@/data/products.json";

export default function Home() {
  // Group products
  const tumblers = products.filter(p => p.category === 'Bling Tumblers').slice(0, 4);
  const snowWhite = products.filter(p => p.category === 'Snow White Series').slice(0, 4);
  const cuteness = products.filter(p => p.category === 'Cuteness Overload').slice(0, 4);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gold-50/30 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold tracking-wider uppercase border border-gold-200">
            Handmade with Love & Passion
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
            Sự Độc Bản & <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-600">Phong Cách Sống Lấp Lánh</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi không chỉ bán một chiếc ốp lưng hay ly giữ nhiệt.<br />
            Chúng tôi trao cho bạn một tác phẩm nghệ thuật, một tuyên ngôn cá tính riêng biệt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gold-500 hover:scale-105 transition-all duration-300 shadow-xl shadow-gold-500/20">
              Khám Phá Bộ Sưu Tập
            </Link>
            <Link href="#custom" className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-full font-medium hover:border-gold-500 hover:text-gold-600 transition-all duration-300">
              Đặt Thiết Kế Riêng
            </Link>
          </div>
        </div>
      </section>

      {/* Handmade & Customization Value Prop */}
      <section id="custom" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Tuyệt Tác Thủ Công <br />
                <span className="text-gold-400 italic">Được Làm Riêng Cho Bạn</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Mỗi viên đá rhinestone đều được nghệ nhân của chúng tôi đính kết thủ công trong hàng giờ liền.
                Bạn có thể khắc tên, chọn màu hay yêu cầu một thiết kế độc nhất vô nhị để khẳng định "cái tôi" đầy kiêu hãnh.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-black font-bold">✓</span>
                  <span>100% Handmade tỉ mỉ từng chi tiết</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-black font-bold">✓</span>
                  <span>Tùy chỉnh tên & thiết kế (Customization)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-black font-bold">✓</span>
                  <span>Độ bền cao & bắt sáng cực đỉnh</span>
                </li>
              </ul>
              <button className="text-gold-400 border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-colors">
                Liên hệ tư vấn thiết kế &rarr;
              </button>
            </div>
            <div className="relative">
              {/* Decorative abstract visual for craftsmanship */}
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-700 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center">
                  <span className="text-6xl mb-4 block">💎</span>
                  <h3 className="font-serif text-2xl font-bold mb-2">Đẳng Cấp & Tinh Tế</h3>
                  <p className="text-gray-400">Sự sang trọng nằm ở chi tiết.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bling Tumblers Section */}
      <section className="container mx-auto px-4 py-24 border-b border-gray-100">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">Bling Tumblers</span>
            <h2 className="font-serif text-4xl font-bold mt-2 text-gray-900">Nghệ Thuật Trên Từng Ngụm Nước</h2>
            <p className="text-gray-500 mt-4">Biểu tượng của sự chăm sóc bản thân và gu thẩm mỹ. Mỗi chiếc ly là một trải nghiệm sang trọng.</p>
          </div>
          <Link href="/shop?category=Bling%20Tumblers" className="mt-6 md:mt-0 text-gray-900 hover:text-gold-600 font-medium transition-colors border-b border-black hover:border-gold-600 pb-1">
            Xem Tất Cả Ly Giữ Nhiệt
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tumblers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Snow White Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Snow White Series</span>
            <h2 className="font-serif text-4xl font-bold mt-2 text-gray-900">Nàng Công Chúa Hiện Đại</h2>
            <p className="text-gray-500 mt-4">Tái hiện cổ tích dưới góc nhìn Gen Z. Bạch Tuyết, trà sữa và phong cách Kidcore sang chảnh.</p>
          </div>
          <Link href="/shop?category=Snow%20White%20Series" className="mt-6 md:mt-0 text-gray-900 hover:text-red-600 font-medium transition-colors border-b border-black hover:border-red-600 pb-1">
            Xem Bộ Sưu Tập Bạch Tuyết
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {snowWhite.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Cuteness Overload Section */}
      <section className="bg-pink-50/50 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="max-w-xl">
              <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Healing Vibes</span>
              <h2 className="font-serif text-4xl font-bold mt-2 text-gray-900">Cuteness Overload</h2>
              <p className="text-gray-500 mt-4">Gấu trắng & Capybara - Những liều thuốc tinh thần mang lại sự thư thái và vui tươi mỗi ngày.</p>
            </div>
            <Link href="/shop?category=Cuteness%20Overload" className="mt-6 md:mt-0 text-gray-900 hover:text-pink-500 font-medium transition-colors border-b border-black hover:border-pink-500 pb-1">
              Xem Thêm Sự Dễ Thương
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cuteness.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories Teaser */}
      <section className="py-20 text-center container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold mb-12">Khám Phá Thêm Phong Cách Của Bạn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/shop?category=Fashion%20%26%20Patterns" className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
            <Image src="/images/1c643a775530e36eba211.jpg" alt="Fashion" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <h3 className="text-white font-serif text-2xl font-bold border-b-2 border-transparent group-hover:border-white transition-all">Fashion & Patterns</h3>
            </div>
          </Link>
          <Link href="/shop?category=Love%20%26%20Rich" className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
            <Image src="/images/9cb476ba04fdb2a3ebec16.jpg" alt="Love" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <h3 className="text-white font-serif text-2xl font-bold border-b-2 border-transparent group-hover:border-white transition-all">Love & Rich</h3>
            </div>
          </Link>
          <Link href="/shop?category=Nature%20%26%20Fairy%20Tales" className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
            <Image src="/images/ae54bbbfcaf87ca625e920.jpg" alt="Nature" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <h3 className="text-white font-serif text-2xl font-bold border-b-2 border-transparent group-hover:border-white transition-all">Nature & Fairy Tales</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
