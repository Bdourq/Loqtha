export const PRICE_ONE = 18;
export const PRICE_TWO = 32;

export const GOVERNORATES = [
  "عمّان",
  "الزرقاء",
  "إربد",
  "المفرق",
  "البلقاء",
  "مادبا",
  "الكرك",
  "الطفيلة",
  "معان",
  "العقبة",
  "جرش",
  "عجلون",
];

// الألوان كما تظهر في صورة الخامات المرفقة
export const COLORS = [
  { id: "green", name: "أخضر زمردي", hex: "#1f4d3f", ring: "#2c5347" },
  { id: "maroon", name: "خمري", hex: "#6e1f2b", ring: "#8a2433" },
  { id: "black", name: "أسود", hex: "#1c1c1e", ring: "#3a3a3d" },
  { id: "olive", name: "زيتي", hex: "#5a5a33", ring: "#6f6f42" },
];

export const GALLERY = [
  { src: "/media/look-maroon-studio.jpeg", alt: "عباية لقطة كوليكشن - خمري بإطلالة كاملة" },
  { src: "/media/look-maroon-hall.jpeg", alt: "عباية لقطة كوليكشن - خمري بلمسة عصرية" },
  { src: "/media/look-maroon-mirror.jpeg", alt: "عباية لقطة كوليكشن - تفاصيل القصّة الأنيقة" },
  { src: "/media/look-black.jpeg", alt: "عباية لقطة كوليكشن - الإطلالة السوداء الملكية" },
  { src: "/media/look-green.jpeg", alt: "عباية لقطة كوليكشن - أخضر زمردي فاخر" },
  { src: "/media/detail-1.jpeg", alt: "تفاصيل الأكمام المروحية والكسرات" },
  { src: "/media/detail-2.jpeg", alt: "قرب الخامة والكسرات المروحية" },
];

export const VIDEOS = [
  {
    id: "v1",
    label: "حركة وتفصيل العباية",
    src: "/media/video-1.mp4",
    poster: "/media/look-maroon-hall.jpeg",
  },
  {
    id: "v2",
    label: "قرب الخامة والكسرات المروحية",
    src: "/media/video-4.mp4",
    poster: "/media/look-maroon-studio.jpeg",
  },
];

export const SOCIAL = {
  facebook: "https://www.facebook.com/share/1Ppfz3DdPu/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/loqtahcollection",
};

export const SIZE_GUIDE_VIDEO = {
  src: "/media/size-guide.mp4",
  poster: "/media/look-green.jpeg",
};

export const TAGLINE = "فخامة تُفصّل عليكِ";

export const TESTIMONIALS = [
  { name: "رهف", city: "عمّان", stars: 5, text: "العباية أحلى من الصور، والقماش ثقيل وفخم. فصّلوها على طولي بالضبط." },
  { name: "أسيل", city: "إربد", stars: 5, text: "أول مرة عباية تيجي على قياسي ١٠٠٪. الشال والحزام هدية وكتير حلوين." },
  { name: "دعاء", city: "الزرقاء", stars: 5, text: "وصلت بيومين والتوصيل مجاني. الكسرات بالأكمام تجنّن." },
  { name: "ميس", city: "العقبة", stars: 5, text: "طلبت قطعتين وطلعوا أوفر، والجودة تستاهل وأكثر." },
  { name: "نور", city: "الكرك", stars: 5, text: "خدمة راقية وردّوا بسرعة، والعباية فخمة كأنها تفصيل خاص." },
  { name: "لمى", city: "مادبا", stars: 5, text: "ناعمة وما بتشف، لبستها بمناسبة وكل البنات سألوني من وين." },
];
