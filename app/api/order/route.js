import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const ORDER_EMAIL_TO = process.env.ORDER_EMAIL_TO || "Qusayalbdour98@gmail.com";
const RESEND_FROM = process.env.RESEND_FROM || "Loqta Collection <onboarding@resend.dev>";

function orderHtml(o) {
  const row = (label, val) =>
    `<tr><td style="padding:8px 12px;color:#8a6d4b;font-weight:bold;white-space:nowrap">${label}</td><td style="padding:8px 12px;color:#1f3d36">${val ?? "-"}</td></tr>`;
  return `
  <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;background:#fbf7ee;padding:24px">
    <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e6cf95;border-radius:16px;overflow:hidden">
      <div style="background:linear-gradient(160deg,#15291f,#1f3d36);color:#e6cf95;padding:18px 20px">
        <h2 style="margin:0;font-size:20px">طلب جديد - لقطة كوليكشن</h2>
        <p style="margin:6px 0 0;color:#fbf7ee;font-size:13px">${new Date(o.ts).toLocaleString("ar-JO", { timeZone: "Asia/Amman" })}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${row("الاسم", o.name)}
        ${row("رقم الهاتف", o.phone)}
        ${row("المحافظة", o.gov)}
        ${row("العنوان", o.address)}
        ${row("الطول", o.height + " سم")}
        ${row("الوزن", o.weight + " كغ")}
        ${row("الكمية", (o.quantity === 2 ? "قطعتين" : "قطعة"))}
        ${row("اللون", o.color)}
        ${o.color2 ? row("اللون الثاني", o.color2) : ""}
        ${row("الإجمالي", "<b style='color:#b8862f'>" + o.total + " دينار</b> (شامل التوصيل)")}
      </table>
    </div>
  </div>`;
}

async function sendEmail(o) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { sent: false, reason: "no_key" };
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [ORDER_EMAIL_TO],
      subject: `طلب جديد - ${o.name} - ${o.gov} - ${o.total} دينار`,
      html: orderHtml(o),
      reply_to: ORDER_EMAIL_TO,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    return { sent: false, reason: t.slice(0, 200) };
  }
  return { sent: true };
}

export async function POST(req) {
  try {
    const data = await req.json();
    const required = ["name", "phone", "gov", "address", "height", "weight"];
    for (const k of required) {
      if (!data?.[k]) return NextResponse.json({ ok: false, error: "بيانات ناقصة" }, { status: 400 });
    }
    const record = { ...data, ts: new Date().toISOString(), ua: req.headers.get("user-agent") || "" };

    // نسخة احتياطية محلية
    try {
      const dir = process.env.ORDERS_DIR || "/tmp";
      await fs.appendFile(path.join(dir, "loqta-orders.jsonl"), JSON.stringify(record) + "\n", "utf8");
    } catch (e) {}

    // إرسال الطلب على الإيميل
    let email = { sent: false, reason: "skip" };
    try {
      email = await sendEmail(record);
    } catch (e) {
      email = { sent: false, reason: String(e).slice(0, 200) };
    }
    if (!email.sent) console.log("ORDER_EMAIL_NOT_SENT", email.reason, JSON.stringify(record));
    else console.log("ORDER_EMAIL_SENT", record.name);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "خطأ بالخادم" }, { status: 500 });
  }
}
