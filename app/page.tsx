"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    caption: "🌸 Sương sớm Đà Lạt",
  },
  {
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1600&q=80",
    caption: "🌊 Vịnh Hạ Long huyền ảo",
  },
  {
    image: "https://images.unsplash.com/photo-1602491673985-0e9a2cbe2e5a?auto=format&fit=crop&w=1600&q=80",
    caption: "🏯 Cố đô Huế – nét đẹp trầm mặc",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    caption: "🍁 Mùa thu vàng Châu Âu",
  },
  {
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80",
    caption: "🤖 Cô gái A.I – Vẻ đẹp tương lai",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Tự động chuyển ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // đổi ảnh mỗi 4 giây
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-16 w-full text-center text-white text-2xl font-semibold drop-shadow-lg">
            {slide.caption}
          </div>
        </div>
      ))}

      {/* Overlay nội dung chính */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
          🌟 Studio ThaiQue A.I 🌟
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6 drop-shadow-md">
          Tạo ảnh A.I siêu thực – chân dung, phong cảnh, thời trang, động vật,
          và hơn thế nữa...
        </p>
        <button className="px-6 py-3 bg-white/80 text-black font-semibold rounded-xl shadow-lg hover:bg-white transition">
          🚀 Khám phá ngay
        </button>
      </div>
    </main>
  );
}
