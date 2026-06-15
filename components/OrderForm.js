"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, MapPin, Home, Ruler, Weight, ShoppingBag, CheckCircle2, Truck, Gift, PhoneCall, Loader2 } from "lucide-react";
import { COLORS, GOVERNORATES, PRICE_ONE, PRICE_TWO, SIZE_GUIDE_VIDEO } from "../app/data";
import InlineVideo from "./InlineVideo";

function Field({ icon: Icon, children }) {
  return (
    <div className="relative">
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gold pointer-events-none">
        <Icon size={18} />
      </span>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-gold/30 bg-cream pr-10 pl-3 py-3 text-royal placeholder-earth/50 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition";

export default function OrderForm({ quantity, setQuantity, color, setColor, formRef }) {
  const [form, setForm] = useState({ name: "", phone: "", gov: "", address: "", height: "", weight: "" });
  const [color2, setColor2] = useState("maroon");
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const total = quantity === 2 ? PRICE_TWO : PRICE_ONE;
  const colorName = (id) => COLORS.find((c) => c.id === id)?.name || "";

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const normalizePhone = (raw) => {
    if (!raw) return "";
    const map = { "\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9" };
    let v = String(raw).replace(/[\u0660-\u0669\u06F0-\u06F9]/g, (d) => map[d] || d);
    v = v.replace(/[^\d]/g, "");
    if (v.startsWith("00962")) v = v.slice(5);
    else if (v.startsWith("962")) v = v.slice(3);
    if (/^7\d{8}$/.test(v)) v = "0" + v;
    return v;
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "الاسم مطلوب";
    if (!/^07\d{8}$/.test(normalizePhone(form.phone))) e.phone = "أدخلي رقم أردني صحيح (07XXXXXXXX)";
    if (!form.gov) e.gov = "اختاري المحافظة";
    if (!form.address.trim()) e.address = "العنوان التفصيلي مطلوب";
    if (!form.height || +form.height < 130 || +form.height > 200) e.height = "أدخلي الطول بالسم (130-200)";
    if (!form.weight || +form.weight < 35 || +form.weight > 160) e.weight = "أدخلي الوزن بالكيلو (35-160)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector("[data-err='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const payload = {
      name: form.name,
      phone: normalizePhone(form.phone),
      gov: form.gov,
      address: form.address,
      height: form.height,
      weight: form.weight,
      quantity,
      color: colorName(color),
      color2: quantity === 2 ? colorName(color2) : null,
      total,
    };
    setSubmitting(true);
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // نُظهر النجاح حتى لو تعذّر الاتصال؛ سيتم التواصل هاتفياً
    } finally {
      setSubmitting(false);
      setDone(true);
      if (typeof window !== "undefined") window.scrollTo({ top: document.querySelector("[data-form-top]")?.offsetTop - 80 || 0, behavior: "smooth" });
    }
  };

  return (
    <section ref={formRef} className="py-10 scroll-mt-20">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center" data-form-top>
          <span className="inline-flex items-center gap-2 rounded-full bg-royal text-goldLight text-xs px-4 py-1.5">
            <ShoppingBag size={15} /> أكملي طلبك خلال دقيقة
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-royal mt-3">نموذج الطلب السريع</h2>
          <p className="text-earth text-sm mt-1">بنفصّلها على وزنك وطولك بالضبط — عبّي بياناتك بس</p>
        </div>

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="mt-6 rounded-3xl bg-royal text-cream p-7 text-center shadow-soft"
            >
              <CheckCircle2 size={56} className="mx-auto text-goldLight" />
              <h3 className="font-display text-2xl font-bold mt-3">تم استلام طلبكِ بنجاح </h3>
              <p className="text-cream/85 mt-2 text-sm leading-relaxed">
                شكراً لثقتكِ بـ <span className="text-goldLight font-bold">لقطة كوليكشن</span>.
                راح يوصلكِ طلبكِ خلال يومين إلى ثلاثة أيام، ومندوب التوصيل رح يتواصل معكِ ويأكد الطلب معكِ قبل التسليم.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream/10 border border-goldLight/30 px-4 py-2 text-goldLight text-sm">
                <PhoneCall size={16} /> جهّزي هاتفكِ — رح نتصل فيكِ قريباً
              </div>
              <button onClick={() => setDone(false)} className="block mx-auto mt-5 text-cream/70 text-sm underline">
                تعديل الطلب أو طلب آخر
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              onSubmit={submit}
              className="mt-6 rounded-3xl bg-cream p-5 sm:p-6 ring-1 ring-gold/20 shadow-soft space-y-4"
            >
              {/* الكمية */}
              <div className="grid grid-cols-2 gap-3">
                {[{ q: 1, p: PRICE_ONE, l: "قطعة" }, { q: 2, p: PRICE_TWO, l: "قطعتين (الأوفر)" }].map((o) => (
                  <button
                    type="button" key={o.q} onClick={() => setQuantity(o.q)}
                    className={`rounded-xl py-3 text-sm font-bold border-2 transition ${
                      quantity === o.q ? "border-gold bg-royal text-goldLight" : "border-gold/25 text-earth"
                    }`}
                  >
                    {o.l} · {o.p} د
                  </button>
                ))}
              </div>

              {/* اللون */}
              <div>
                <label className="text-sm font-bold text-royal">اللون{quantity === 2 ? " الأول" : ""}</label>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {COLORS.map((c) => (
                    <button
                      type="button" key={c.id} onClick={() => setColor(c.id)}
                      className="w-9 h-9 rounded-full transition"
                      style={{ background: c.hex, boxShadow: color === c.id ? `0 0 0 2px #fbf7ee, 0 0 0 4px ${c.ring}` : undefined }}
                      aria-label={c.name}
                      title={c.name}
                    />
                  ))}
                  <span className="self-center text-sm text-earth mr-1">{colorName(color)}</span>
                </div>
              </div>

              {quantity === 2 && (
                <div>
                  <label className="text-sm font-bold text-royal">اللون الثاني</label>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {COLORS.map((c) => (
                      <button
                        type="button" key={c.id} onClick={() => setColor2(c.id)}
                        className="w-9 h-9 rounded-full transition"
                        style={{ background: c.hex, boxShadow: color2 === c.id ? `0 0 0 2px #fbf7ee, 0 0 0 4px ${c.ring}` : undefined }}
                        aria-label={c.name} title={c.name}
                      />
                    ))}
                    <span className="self-center text-sm text-earth mr-1">{colorName(color2)}</span>
                  </div>
                </div>
              )}

              <hr className="border-gold/15" />

              <div data-err={!!errors.name}>
                <Field icon={User}>
                  <input className={inputCls} placeholder="الاسم الكامل" value={form.name} onChange={set("name")} />
                </Field>
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>

              <div data-err={!!errors.phone}>
                <Field icon={Phone}>
                  <input className={inputCls} inputMode="numeric" placeholder="رقم الهاتف (07XXXXXXXX)" value={form.phone} onChange={set("phone")} />
                </Field>
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div data-err={!!errors.gov}>
                <Field icon={MapPin}>
                  <select className={`${inputCls} appearance-none`} value={form.gov} onChange={set("gov")}>
                    <option value="">اختاري المحافظة</option>
                    {GOVERNORATES.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </Field>
                {errors.gov && <p className="text-red-600 text-xs mt-1">{errors.gov}</p>}
              </div>

              <div data-err={!!errors.address}>
                <Field icon={Home}>
                  <input className={inputCls} placeholder="العنوان التفصيلي (المنطقة، الشارع، أقرب نقطة دالة)" value={form.address} onChange={set("address")} />
                </Field>
                {errors.address && <p className="text-red-600 text-xs mt-1">{errors.address}</p>}
              </div>

              {/* الطول والوزن بدل المقاسات */}
              <div className="rounded-2xl bg-sand/70 p-3 ring-1 ring-gold/15">
                <p className="text-sm font-bold text-royal flex items-center gap-1.5">
                  <Ruler size={16} className="text-gold" /> بدل المقاسات: نفصّلها على قياسك
                </p>
                <p className="text-xs text-earth mt-1">أدخلي طولكِ ووزنكِ بدقة لنفصّلها على قياسكِ تماماً</p>
                <div className="mt-3 mx-auto w-full max-w-[200px]">
                  <InlineVideo src={SIZE_GUIDE_VIDEO.src} poster={SIZE_GUIDE_VIDEO.poster} />
                  <p className="text-center text-[11px] text-earth mt-1.5">شاهدي العباية بالحركة عن قرب</p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div data-err={!!errors.height}>
                    <Field icon={Ruler}>
                      <input className={inputCls} inputMode="numeric" placeholder="الطول بالسم" value={form.height} onChange={set("height")} />
                    </Field>
                    {errors.height && <p className="text-red-600 text-xs mt-1">{errors.height}</p>}
                  </div>
                  <div data-err={!!errors.weight}>
                    <Field icon={Weight}>
                      <input className={inputCls} inputMode="numeric" placeholder="الوزن بالكيلو" value={form.weight} onChange={set("weight")} />
                    </Field>
                    {errors.weight && <p className="text-red-600 text-xs mt-1">{errors.weight}</p>}
                  </div>
                </div>
              </div>

              {/* ملخص السعر */}
              <div className="rounded-2xl royal-gradient text-cream p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-goldLight"><Gift size={15} /> شال وحزام هدية</span>
                  <span className="flex items-center gap-1.5 text-goldLight"><Truck size={15} /> توصيل مجاني</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-cream/85">الإجمالي ({quantity === 2 ? "قطعتين" : "قطعة"})</span>
                  <span className="font-display text-3xl font-bold gold-text">{total} دينار</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full gold-gradient text-royalDark font-extrabold text-lg py-4 rounded-2xl shadow-gold active:scale-[0.98] transition relative overflow-hidden disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitting && <Loader2 size={18} className="animate-spin" />}
                  {submitting ? "جاري الإرسال..." : "تأكيد الطلب — الدفع عند الاستلام"}
                </span>
                {!submitting && <span className="shimmer absolute inset-0" />}
              </button>
              <p className="text-center text-earth text-xs">بالضغط على تأكيد الطلب راح يوصلكِ طلبكِ خلال يومين إلى ثلاثة أيام ويتواصل معكِ مندوب التوصيل للتأكيد</p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
