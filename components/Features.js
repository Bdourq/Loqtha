"use client";
import { Ruler, Sparkles, Truck, Gift, Wind, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  { icon: Ruler, title: "تفصيل حسب وزنكِ وطولكِ", desc: "مش مقاسات عشوائية. بنفصّلها على قياسك بالضبط لإطلالة منسدلة 100%." },
  { icon: Wind, title: "كسرات مروحية فخمة", desc: "أكمام بكسرات مروحية تعطي حركة وأناقة ملكية مميزة." },
  { icon: Sparkles, title: "كريب بلازما نخب أول", desc: "خامة فاخرة ناعمة لا تشف، ثقيلة الانسدال ومريحة طوال اليوم." },
  { icon: Gift, title: "شال وحزام هدية", desc: "كل عباية معها شال وحزام من نفس اللون بدون أي تكلفة إضافية." },
  { icon: Truck, title: "توصيل مجاني لكل المحافظات", desc: "نوصلك لباب البيت مجاناً في كل الأردن، والدفع عند الاستلام." },
  { icon: HeartHandshake, title: "جودة مضمونة", desc: "نفس العباية بالصور والفيديو الحقيقية، وصلتك بنفس الجودة بالضبط." },
];

export default function Features() {
  return (
    <section className="py-10 bg-sand/60">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-royal">
            ليش <span className="gold-text">عباية لقطة</span> الأكثر طلباً؟
          </h2>
        </Reveal>
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl bg-cream p-4 ring-1 ring-gold/15 shadow-soft h-full">
                  <span className="flex-shrink-0 gold-gradient text-royalDark rounded-xl p-2.5">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-royal text-[15px]">{f.title}</h3>
                    <p className="text-sm text-earth mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
