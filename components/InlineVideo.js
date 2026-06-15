"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function InlineVideo({ src, poster, aspect = "aspect-[9/16]", className = "" }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-royalDark ring-1 ring-gold/20 ${aspect} ${className}`}>
      <video
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
        onClick={toggle}
      >
        <source src={src} type="video/mp4" />
      </video>
      <AnimatePresence>
        {!playing && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
            onClick={toggle}
            className="absolute inset-0 flex items-center justify-center bg-royalDark/25"
            aria-label="تشغيل"
          >
            <span className="gold-gradient text-royalDark rounded-full p-4 shadow-gold">
              <Play size={24} className="mr-0.5" fill="currentColor" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
      {playing && (
        <button onClick={toggle} className="absolute bottom-2 left-2 glass rounded-full p-2 text-royal" aria-label="إيقاف">
          <Pause size={16} />
        </button>
      )}
    </div>
  );
}
