"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://i.imgur.com/tOZQeI5.jpg",
    caption: "🌸 Sương sớm Đà Lạt",
  },
  {
    image: "https://i.imgur.com/8RkduiI.jpg",
    caption: "🌊 Vịnh Hạ Long huyền ảo",
  },
  {
    image: "https://i.imgur.com/cv4UifR.jpg",
    caption: "🏯 Cố đô Huế – nét đẹp trầm mặc",
  },
  {
    image: "https://i.imgur.com/BtG8AnY.jpg",
    caption: "🍁 Mùa thu vàng Châu Âu",
  },
  {
    image: "https://i.imgur.com/0R6rZgL.jpg",
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
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Slider background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-16 w-full text-center text-2xl font-semibold drop-shadow-lg">
            {slide.caption}
          </div>
        </div>
      ))}

      {/* Nội dung chính */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          🌟 Studio ThaiQue A.I 🌟
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6 drop-shadow-md">
          Tạo ảnh A.I siêu thực – phong cảnh, trang phục, thời tiết, và nhiều hơn nữa...
        </p>
        <button className="px-6 py-3 bg-white/80 text-black font-semibold rounded-xl shadow-lg hover:bg-white transition">
          🚀 Khám phá ngay
        </button>
      </div>
    </main>
  );
}
