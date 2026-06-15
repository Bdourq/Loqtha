"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Film } from "lucide-react";
import { VIDEOS } from "../app/data";
import Reveal from "./Reveal";

export default function Videos() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const switchTo = (i) => {
    setActive(i);
    setPlaying(false);
    setTimeout(() => { if (ref.current) ref.current.load(); }, 10);
  };

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-gold">
            <Film size={20} />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-royal">شوفي القماش بالحركة</h2>
          </div>
          <p className="text-center text-earth text-sm mt-2">فيديوهات حقيقية — جودة الخامة والكسرات عن قرب</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex justify-center gap-2">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                onClick={() => switchTo(i)}
                className={`text-xs sm:text-sm font-bold px-3.5 py-2 rounded-full border transition ${
                  active === i ? "gold-gradient text-royalDark border-transparent shadow-gold" : "bg-cream text-earth border-gold/30"
                }`}
              >
                {i === 0 ? "الفيديو الأول" : "الفيديو الثاني"}: {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-5 relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-gold/20 bg-royalDark aspect-[9/16] max-w-xs mx-auto">
            <video
              ref={ref}
              key={VIDEOS[active].id}
              className="absolute inset-0 w-full h-full object-cover"
              poster={VIDEOS[active].poster}
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
              onClick={toggle}
            >
              <source src={VIDEOS[active].src} type="video/mp4" />
            </video>

            <AnimatePresence>
              {!playing && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  onClick={toggle}
                  className="absolute inset-0 flex items-center justify-center bg-royalDark/25"
                  aria-label="تشغيل"
                >
                  <span className="gold-gradient text-royalDark rounded-full p-5 shadow-gold">
                    <Play size={28} className="mr-0.5" fill="currentColor" />
                  </span>
                </motion.button>
              )}
            </AnimatePresence>

            {playing && (
              <button onClick={toggle} className="absolute bottom-3 left-3 glass rounded-full p-2.5 text-royal" aria-label="إيقاف">
                <Pause size={18} />
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
