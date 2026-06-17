const items = [
  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
  "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
  "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
  "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
  "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
  "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا",
  "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
  "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
  "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-[#e5e5e5] py-2.5 bg-[#f5f5f5]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center mx-6">
            <span
              className="font-arabic text-[#aaa]"
              style={{ fontSize: "18px", lineHeight: "2.2" }}
              dir="rtl"
            >
              {item}
            </span>
            <span className="mx-5 text-[#999] text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
