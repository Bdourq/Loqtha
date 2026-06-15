"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Instagram, Facebook, Sparkles } from "lucide-react";
import { SOCIAL, TAGLINE } from "../app/data";

export default function Header({ onOrder }) {
  return (
    <>
      {/* شريط علوي متحرك */}
      <div className="royal-gradient text-cream text-[12px] sm:text-sm">
        <div className="relative overflow-hidden py-2">
          <motion.div
            className="flex whitespace-nowrap gap-10 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="flex items-center gap-2"><Truck size={15} className="text-goldLight" /> توصيل مجاني لكل محافظات الأردن</span>
                <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-goldLight" /> الدفع عند الاستلام</span>
                <span className="flex items-center gap-2 gold-text font-bold">عرض القطعتين: 32 دينار فقط</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* هيدر ثابت */}
      <header className="sticky top-0 z-40 glass border-b border-gold/20">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-gold/50 shadow-gold">
              <Image src="/media/logo.jpeg" alt="لقطة كوليكشن" fill className="object-cover" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-lg font-bold text-royal">لقطة كوليكشن</p>
              <p className="text-[11px] gold-text font-extrabold -mt-0.5 flex items-center gap-1">
                <Sparkles size={11} className="text-gold" /> {TAGLINE}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="انستغرام"
               className="w-9 h-9 rounded-full grid place-items-center text-royal ring-1 ring-gold/30 bg-cream active:scale-90 transition">
              <Instagram size={17} />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="فيسبوك"
               className="w-9 h-9 rounded-full grid place-items-center text-royal ring-1 ring-gold/30 bg-cream active:scale-90 transition">
              <Facebook size={17} />
            </a>
            <button
              onClick={onOrder}
              className="gold-gradient text-royalDark font-bold text-sm px-4 py-2.5 rounded-full shadow-gold active:scale-95 transition"
            >
              اطلبي الآن
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
