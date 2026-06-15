"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Ruler, Gift, Crown } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero({ onOrder }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 royal-gradient" />
      <div className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(201,160,78,0.35), transparent 40%), radial-gradient(circle at 85% 15%, rgba(230,207,149,0.25), transparent 35%)" }} />

      <div className="max-w-3xl mx-auto px-4 pt-9 pb-0 text-center text-cream relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-royalDark/40 px-4 py-1.5 text-xs sm:text-sm text-goldLight"
        >
          <Crown size={15} /> كوليكشن ملكي فاخر — الأكثر طلباً
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-4 text-3xl sm:text-5xl font-bold leading-tight text-balance"
        >
          عباية <span className="gold-text">لقطة كوليكشن</span> الملكية الفاخرة
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 text-sm sm:text-lg text-cream/85 max-w-xl mx-auto text-balance"
        >
          تُفصّل خصيصاً <span className="text-goldLight font-bold">حسب وزنكِ وطولكِ</span> — مش مقاسات جاهزة.
          قماش كريب بلازما نخب أول بكسرات مروحية فخمة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[12px] sm:text-sm"
        >
          {[
            { icon: <Ruler size={14} />, t: "تفصيل حسب الوزن والطول" },
            { icon: <Gift size={14} />, t: "شال + حزام هدية" },
            { icon: <Sparkles size={14} />, t: "توصيل مجاني" },
          ].map((b, i) => (
            <span key={i} className="flex items-center gap-1.5 rounded-full bg-cream/10 border border-cream/15 px-3 py-1.5 text-goldLight">
              {b.icon} {b.t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mt-7"
        >
          <div className="floaty frame-gold relative mx-auto w-[78%] max-w-sm aspect-[3/4] rounded-[28px] overflow-hidden ring-1 ring-gold/30">
            <Image src="/media/look-maroon-studio.jpeg" alt="عباية لقطة كوليكشن الملكية" fill priority className="object-cover" />
          </div>
          {/* بطاقة السعر العائمة */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute top-6 left-3 sm:left-10 glass rounded-2xl px-4 py-3 text-royal text-right shadow-soft"
          >
            <p className="text-[11px] text-earth">السعر شامل التوصيل</p>
            <p className="font-display text-2xl font-bold gold-text">18 دينار</p>
          </motion.div>
        </motion.div>

        <div className="hero-veil h-16 -mt-16 relative" />
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-4 pb-8 relative">
        <Reveal>
          <button
            onClick={onOrder}
            className="w-full gold-gradient text-royalDark font-extrabold text-lg py-4 rounded-2xl shadow-gold active:scale-[0.98] transition relative overflow-hidden"
          >
            <span className="relative z-10">اطلبي الآن — الدفع عند الاستلام</span>
            <span className="shimmer absolute inset-0" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
