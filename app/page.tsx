"use client";

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Nội dung chính */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          🌟 Studio ThaiQue A.I 🌟
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6 drop-shadow-md">
          Tạo ảnh A.I siêu thực — phong cảnh, trang phục, thời tiết, và hơn thế nữa...
        </p>
        <button className="px-6 py-3 bg-white/80 text-black font-semibold rounded-xl shadow-lg hover:bg-white transition">
          🚀 Khám phá ngay
        </button>
      </div>

      {/* Footer nhỏ */}
      <footer className="absolute bottom-4 text-sm opacity-75">
        © 2026 Studio ThaiQue A.I — Zalo & ĐT: 0918295325 | Facebook: ThaiQue A.I
      </footer>
    </main>
  );
}
