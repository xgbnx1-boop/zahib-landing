
import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-yellow-400 font-sans">
      <header className="flex justify-between items-center p-4 border-b border-yellow-400">
        <h1 className="text-3xl font-bold">زاهب • Zahib</h1>
        <div className="flex items-center space-x-4">
          <button className="text-yellow-400 hover:text-white">العربية</button>
          <button className="text-yellow-400 hover:text-white">English</button>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">جوعان؟ زاهب يوصلك كل شيء</h2>
        <p className="text-lg text-yellow-200 max-w-xl mb-8">
          اطلب من مطاعمك المفضلة بخطوات بسيطة وسريعة عبر زاهب.
        </p>
        <Button className="bg-yellow-400 text-black text-lg px-6 py-3 hover:bg-yellow-300">
          <ShoppingBag className="mr-2" /> ابدأ الطلب الآن
        </Button>
      </section>

      <section className="bg-yellow-50 text-black py-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">مطاعم مقترحة</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["برجر ستيشن", "شاورما تايم", "بيتزا زون"].map((name, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <img
                src={`https://via.placeholder.com/300x180?text=${name}`}
                alt={name}
                className="rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold mb-2">{name}</h4>
              <p className="text-gray-700">توصيل سريع، طعم لذيذ، اطلب الآن!</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-yellow-300 border-t border-yellow-400">
        &copy; 2025 زاهب. جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}
