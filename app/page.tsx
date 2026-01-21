"use client";
import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState("Nữ");
  const [location, setLocation] = useState("");
  const [outfit, setOutfit] = useState("");
  const [weather, setWeather] = useState("");
  const [pose, setPose] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");

  const handleSubmit = () => {
    alert(`
      🎨 Thông tin bạn đã chọn:
      👤 Giới tính: ${gender}
      📍 Địa điểm: ${location}
      👗 Trang phục: ${outfit}
      🌤️ Thời tiết: ${weather}
      🧍 Tư thế: ${pose}
      💬 Prompt thêm: ${customPrompt}
    `);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-center mt-8">🌟 Studio ThaiQue A.I 🌟</h1>
      <p className="text-lg text-center max-w-2xl mb-10">
        Tạo ảnh A.I siêu thực — phong cảnh, trang phục, thời tiết, và nhiều hơn nữa ✨
      </p>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-3xl space-y-6">
        {/* Giới tính */}
        <div>
          <label className="block mb-2 font-semibold">👤 Chọn giới tính:</label>
          <select
            className="w-full p-3 rounded-lg text-black"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Nam</option>
            <option>Nữ</option>
          </select>
        </div>

        {/* Địa điểm */}
        <div>
          <label className="block mb-2 font-semibold">📍 Chọn địa điểm:</label>
          <select
            className="w-full p-3 rounded-lg text-black"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">-- Chọn địa điểm --</option>
            <option>Hà Nội - Hồ Gươm</option>
            <option>Đà Lạt - Hồ Xuân Hương</option>
            <option>Sa Pa - Núi Fansipan</option>
            <option>Paris - Tháp Eiffel</option>
            <option>Tokyo - Shibuya</option>
            <option>New York - Central Park</option>
            <option>Venice - Kênh đào lãng mạn</option>
          </select>
        </div>

        {/* Trang phục */}
        <div>
          <label className="block mb-2 font-semibold">👗 Chọn trang phục:</label>
          <select
            className="w-full p-3 rounded-lg text-black"
            value={outfit}
            onChange={(e) => setOutfit(e.target.value)}
          >
            <option value="">-- Chọn trang phục --</option>
            <option>Áo dài Việt Nam</option>
            <option>Vest doanh nhân</option>
            <option>Váy dạ hội</option>
            <option>Kimono Nhật Bản</option>
            <option>Hanbok Hàn Quốc</option>
            <option>Trang phục cổ trang</option>
          </select>
        </div>

        {/* Thời tiết */}
        <div>
          <label className="block mb-2 font-semibold">🌤️ Chọn thời tiết:</label>
          <select
            className="w-full p-3 rounded-lg text-black"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          >
            <option value="">-- Chọn thời tiết --</option>
            <option>Nắng nhẹ</option>
            <option>Mưa lất phất</option>
            <option>Tuyết rơi</option>
            <option>Hoàng hôn</option>
            <option>Sương mù</option>
          </select>
        </div>

        {/* Tư thế */}
        <div>
          <label className="block mb-2 font-semibold">🧍 Chọn tư thế:</label>
          <select
            className="w-full p-3 rounded-lg text-black"
            value={pose}
            onChange={(e) => setPose(e.target.value)}
          >
            <option value="">-- Chọn tư thế --</option>
            <option>Đứng thẳng</option>
            <option>Ngồi ghế</option>
            <option>Nghiêng trái</option>
            <option>Nghiêng phải</option>
            <option>Quay lưng</option>
            <option>Chụp toàn thân</option>
          </select>
        </div>

        {/* Prompt tùy chỉnh */}
        <div>
          <label className="block mb-2 font-semibold">💬 Thêm mô tả tùy chỉnh:</label>
          <input
            className="w-full p-3 rounded-lg text-black"
            placeholder="VD: Cầm ô đỏ, đội nón trắng, đeo kính..."
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
          />
        </div>

        {/* Nút tạo ảnh */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-purple-100 transition"
          >
            🚀 Tạo ảnh ngay
          </button>
        </div>
      </div>

      <footer className="mt-8 text-sm opacity-80">
        © 2026 Studio ThaiQue A.I — Zalo & ĐT: 0918295325 | Facebook: ThaiQue A.I
      </footer>
    </main>
  );
}
