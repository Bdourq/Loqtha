"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import { COLORS } from "../app/data";
import Reveal from "./Reveal";

export default function Colors({ selected, setSelected }) {
  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-gold">
            <Palette size={20} />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-royal">اختاري لونكِ المفضّل</h2>
          </div>
          <p className="text-center text-earth text-sm mt-2">الألوان المتوفرة حالياً — كلها من نفس الخامة الفاخرة</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 grid grid-cols-4 gap-3">
            {COLORS.map((c) => {
              const on = selected === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelected(c.id)}
                  className="flex flex-col items-center gap-2 active:scale-95 transition"
                >
                  <span
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-soft flex items-center justify-center"
                    style={{ background: c.hex, boxShadow: on ? `0 0 0 3px #fbf7ee, 0 0 0 6px ${c.ring}` : undefined }}
                  >
                    {on && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-cream">
                        <Check size={22} />
                      </motion.span>
                    )}
                  </span>
                  <span className={`text-xs font-bold ${on ? "text-royal" : "text-earth"}`}>{c.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <figure className="rounded-2xl overflow-hidden shadow-soft ring-1 ring-gold/15 relative aspect-[3/4]">
              <Image src="/media/colors-grid.jpeg" alt="الألوان على العباية" fill className="object-cover object-top" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-royalDark/55 text-cream text-[11px] py-1.5 text-center">الألوان على العباية</figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden shadow-soft ring-1 ring-gold/15 relative aspect-[3/4] bg-sand">
              <Image src="/media/color-swatches.jpeg" alt="خامات الألوان" fill className="object-contain" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-royalDark/55 text-cream text-[11px] py-1.5 text-center">خامات الألوان الحقيقية</figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
