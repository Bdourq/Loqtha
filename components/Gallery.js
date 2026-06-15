"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronRight, ChevronLeft } from "lucide-react";
import { GALLERY } from "../app/data";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  // تدوير تلقائي للصور نحو اليمين مع وقفة بين الصورة والأخرى
  useEffect(() => {
    if (open) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % GALLERY.length);
    }, 3500);
    return () => clearInterval(t);
  }, [open, active]);

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <Reveal>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">
          تفاصيل <span className="gold-text">تستاهل الإطلالة</span>
        </h2>
        <p className="text-center text-earth text-sm mt-2">كسرات مروحية على الأكمام · قماش انسدالي فخم · صور حقيقية للمنتج</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-6 rounded-3xl overflow-hidden shadow-soft ring-1 ring-gold/15 aspect-[4/5] bg-sand">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src={GALLERY[active].src} alt={GALLERY[active].alt} fill className="object-cover" />
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setOpen(true)}
            className="absolute bottom-3 left-3 glass rounded-full p-2.5 text-royal shadow-soft active:scale-90 transition"
            aria-label="تكبير"
          >
            <ZoomIn size={18} />
          </button>
        </div>
      </Reveal>

      <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {GALLERY.map((g, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden ring-2 transition ${
              active === i ? "ring-gold scale-105" : "ring-transparent opacity-70"
            }`}
          >
            <Image src={g.src} alt={g.alt} fill className="object-cover" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-royalDark/95 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <button className="absolute top-4 left-4 text-cream p-2" onClick={() => setOpen(false)}><X size={28} /></button>
            <button
              className="absolute right-3 text-cream/80 p-2"
              onClick={(e) => { e.stopPropagation(); setActive((active + 1) % GALLERY.length); }}
            ><ChevronRight size={34} /></button>
            <button
              className="absolute left-3 text-cream/80 p-2"
              onClick={(e) => { e.stopPropagation(); setActive((active - 1 + GALLERY.length) % GALLERY.length); }}
            ><ChevronLeft size={34} /></button>
            <motion.div
              key={active}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-md aspect-[3/4]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={GALLERY[active].src} alt={GALLERY[active].alt} fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
