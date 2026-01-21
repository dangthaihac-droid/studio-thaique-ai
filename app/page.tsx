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

  // Chạy tự động đổi ảnh mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay làm mờ nền */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Nội dung */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          🌟 Studio ThaiQue A.I 🌟
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6 drop-shadow-md">
          {slide.caption}
        </p>
        <button className="px-6 py-3 bg-white/80 text-black font-semibold rounded-xl shadow-lg hover:bg-white transition">
          🚀 Khám phá ngay
        </button>
      </div>
    </main>
  );
}
