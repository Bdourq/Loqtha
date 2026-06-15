"use client";
import { motion } from "framer-motion";
import { Check, Crown, Flame } from "lucide-react";
import { PRICE_ONE, PRICE_TWO } from "../app/data";
import Reveal from "./Reveal";

export default function Pricing({ quantity, setQuantity, onOrder }) {
  const plans = [
    {
      q: 1, price: PRICE_ONE, title: "قطعة واحدة",
      perks: ["عباية مفصّلة على قياسك", "شال + حزام هدية", "توصيل مجاني"],
      badge: null,
    },
    {
      q: 2, price: PRICE_TWO, title: "قطعتين — الأوفر",
      perks: ["عبايتان بلونين تختاريهم", "شالين + حزامين هدية", "توصيل مجاني", "توفير 4 دنانير"],
      badge: "الأكثر توفيراً",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-royal">اختاري عرضكِ</h2>
          <p className="text-center text-earth text-sm mt-2">كل الأسعار تشمل الشال والحزام والتوصيل المجاني</p>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {plans.map((p, i) => {
            const on = quantity === p.q;
            return (
              <Reveal key={p.q} delay={i * 0.08}>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setQuantity(p.q)}
                  className={`relative w-full text-right rounded-3xl p-5 ring-1 transition h-full ${
                    on ? "bg-royal text-cream ring-gold shadow-soft" : "bg-cream text-royal ring-gold/20"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 right-5 gold-gradient text-royalDark text-xs font-extrabold px-3 py-1 rounded-full shadow-gold flex items-center gap-1">
                      <Flame size={13} /> {p.badge}
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <span className={`flex items-center gap-1.5 font-bold ${on ? "text-goldLight" : "text-earth"}`}>
                      {p.q === 2 ? <Crown size={18} /> : null} {p.title}
                    </span>
                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${on ? "bg-gold border-gold" : "border-earth/40"}`}>
                      {on && <Check size={15} className="text-royalDark" />}
                    </span>
                  </div>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-4xl font-bold gold-text">{p.price}</span>
                    <span className={`mb-1.5 text-sm ${on ? "text-cream/80" : "text-earth"}`}>دينار</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {p.perks.map((perk, j) => (
                      <li key={j} className={`flex items-center gap-2 text-sm ${on ? "text-cream/90" : "text-earth"}`}>
                        <Check size={15} className="text-gold flex-shrink-0" /> {perk}
                      </li>
                    ))}
                  </ul>
                </motion.button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <button
            onClick={onOrder}
            className="mt-6 w-full gold-gradient text-royalDark font-extrabold text-lg py-4 rounded-2xl shadow-gold active:scale-[0.98] transition"
          >
            تأكيد الطلب الآن
          </button>
        </Reveal>
      </div>
    </section>
  );
}
