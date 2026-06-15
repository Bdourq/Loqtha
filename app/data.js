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
  { src: "/media/full-1.jpeg", alt: "عباية لقطة كوليكشن - إطلالة كاملة" },
  { src: "/media/side-1.jpeg", alt: "عباية لقطة كوليكشن - من الجانب" },
  { src: "/media/detail-1.jpeg", alt: "تفاصيل الأكمام المروحية والكسرات" },
  { src: "/media/detail-2.jpeg", alt: "قرب الخامة والكسرات المروحية" },
  { src: "/media/sleeve-1.jpeg", alt: "تفصيل الكم المروحي الفاخر" },
];

export const VIDEOS = [
  {
    id: "v1",
    label: "حركة وتفصيل العباية",
    src: "/media/video-1.mp4",
    poster: "/media/full-1.jpeg",
  },
  {
    id: "v2",
    label: "قرب الخامة والكسرات المروحية",
    src: "/media/video-4.mp4",
    poster: "/media/detail-2.jpeg",
  },
];

export const SOCIAL = {
  facebook: "https://www.facebook.com/share/1Ppfz3DdPu/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/loqtahcollection",
};

export const SIZE_GUIDE_VIDEO = {
  src: "/media/size-guide.mp4",
  poster: "/media/side-1.jpeg",
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
