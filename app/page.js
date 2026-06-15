"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Instagram, Facebook } from "lucide-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Colors from "../components/Colors";
import Videos from "../components/Videos";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import OrderForm from "../components/OrderForm";
import Testimonials from "../components/Testimonials";
import { PRICE_ONE, PRICE_TWO, SOCIAL } from "./data";

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("green");
  const formRef = useRef(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const total = quantity === 2 ? PRICE_TWO : PRICE_ONE;

  return (
    <main className="min-h-screen pb-24">
      <Header onOrder={scrollToForm} />
      <Hero onOrder={scrollToForm} />
      <Gallery />
      <Colors selected={color} setSelected={setColor} />
      <Videos />
      <Features />
      <Testimonials />
      <Pricing quantity={quantity} setQuantity={setQuantity} onOrder={scrollToForm} />
      <OrderForm
        quantity={quantity} setQuantity={setQuantity}
        color={color} setColor={setColor}
        formRef={formRef}
      />

      {/* الفوتر */}
      <footer className="royal-gradient text-cream pt-10 pb-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden ring-2 ring-gold/40">
            <Image src="/media/logo.jpeg" alt="لقطة كوليكشن" fill className="object-cover" />
          </div>
          <h3 className="font-display text-xl font-bold mt-3 gold-text">لقطة كوليكشن</h3>
          <p className="text-cream/75 text-sm mt-2 max-w-md mx-auto">
            عبايات فاخرة مفصّلة على قياسك. جودة حقيقية، توصيل مجاني لكل محافظات الأردن، والدفع عند الاستلام.
          </p>

          <p className="text-goldLight text-sm mt-6 mb-3">تابعونا ليوصلكم كل جديد</p>
          <div className="flex items-center justify-center gap-3">
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer"
               className="flex items-center gap-2 rounded-full px-5 py-2.5 text-cream font-bold text-sm shadow-soft active:scale-95 transition"
               style={{ background: "linear-gradient(45deg,#feda75,#d62976 45%,#962fbf 75%,#4f5bd5)" }}>
              <Instagram size={18} /> انستغرام
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer"
               className="flex items-center gap-2 rounded-full px-5 py-2.5 text-cream font-bold text-sm shadow-soft active:scale-95 transition"
               style={{ background: "#1877F2" }}>
              <Facebook size={18} /> فيسبوك
            </a>
          </div>
          <p className="text-cream/50 text-xs mt-6">© {new Date().getFullYear()} لقطة كوليكشن — جميع الحقوق محفوظة</p>
        </div>
      </footer>

      {/* شريط سفلي ثابت للتحويل */}
      <motion.div
        initial={{ y: 80 }} animate={{ y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed bottom-0 inset-x-0 z-40 glass border-t border-gold/25 px-4 py-3"
      >
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="leading-tight">
            <p className="text-[11px] text-earth">شامل التوصيل</p>
            <p className="font-display text-xl font-bold gold-text">{total} دينار</p>
          </div>
          <button
            onClick={scrollToForm}
            className="flex-1 gold-gradient text-royalDark font-extrabold py-3 rounded-xl shadow-gold active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} /> اطلبي الآن
          </button>
        </div>
      </motion.div>
    </main>
  );
}
