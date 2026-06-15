import "./globals.css";
import { Tajawal, Amiri } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://loqtah-collection.vercel.app"),
  title: "عباية لقطة كوليكشن الملكية الفاخرة | تفصيل حسب وزنك وطولك",
  description:
    "عباية لقطة كوليكشن الملكية الفاخرة بقماش كريب بلازما نخب أول. تفصيل دقيق حسب الوزن والطول، توصيل مجاني لكل محافظات الأردن. اطلبي الآن.",
  openGraph: {
    type: "website",
    locale: "ar_JO",
    title: "عباية لقطة كوليكشن الملكية الفاخرة",
    description: "تفصيل حسب وزنك وطولك. شال وحزام وتوصيل مجاني. اطلبي الآن.",
    images: [{ url: "/media/look-maroon-studio.jpeg", width: 912, height: 1120, alt: "عباية لقطة كوليكشن الملكية الفاخرة" }],
  },
};

export const viewport = {
  themeColor: "#1f3d36",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${amiri.variable}`}>
      <body>{children}</body>
    </html>
  );
}
