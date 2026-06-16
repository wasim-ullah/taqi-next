import Link from "next/link";
import Navbar from "./components/Navbar";
import MarqueeStrip from "./components/MarqueeStrip";
import Footer from "./components/Footer";

const generations = [
  {
    num: "I",
    title: "The Prophet Ü",
    period: "570–632 CE",
    arabic: "النَّبِيُّ ﷺ",
    desc: "Muhammad ibn Abdullah, the Messenger of Allah ﷺ. His life across six domains of practice — character, trade, family, society, spirit, and the private self.",
    href: "/prophet",
    count: "26 narrations",
  },
  {
    num: "II",
    title: "The Sahaba",
    period: "~600–700 CE",
    arabic: "الصَّحَابَة",
    desc: "The Companions. Abu Bakr, Umar, Uthman, Ali, Aisha — those who saw the Prophet ﷺ and carried the living tradition forward.",
    href: "/sahaba",
    count: "5 companions · 60+ narrations",
  },
  {
    num: "III",
    title: "The Tabi'een",
    period: "~640–750 CE",
    arabic: "التَّابِعُون",
    desc: "Those who followed. Sa’id ibn al-Musayyib, Hasan al-Basri, Urwah ibn al-Zubayr — those who met the companions and inherited their practice.",
    href: "/tabieen",
    count: "5 scholars · 60+ narrations",
  },
  {
    num: "IV",
    title: "Taba Tabi'een",
    period: "~700–850 CE",
    arabic: "تَبَع التَّابِعِين",
    desc: "Followers of the followers. Malik, Shafi’i, Sufyan al-Thawri, Ibn al-Mubarak, Ahmad ibn Hanbal — those who systematized the living tradition.",
    href: "/taba-tabieen",
    count: "5 imams · 60+ narrations",
  },
];

const pillars = [
  { id: "shamail",   label: "Shamail",         arabic: "الشَّمَائِل",  desc: "Character, appearance, and noble traits" },
  { id: "trade",     label: "Trade & Business", arabic: "التِّجَارَة",   desc: "Honesty, fair weights, and disclosure" },
  { id: "family",    label: "Family Life",      arabic: "الأُسْرَة",   desc: "Spouses, children, and the household" },
  { id: "social",    label: "Social Life",      arabic: "المُجْتَمَع", desc: "Neighbours, guests, and community" },
  { id: "spiritual", label: "Spiritual Life",   arabic: "الرُّوحَانِيَّة", desc: "Night prayer, dhikr, nearness to Allah" },
  { id: "private",   label: "Private Life",     arabic: "الخَلْوَة",   desc: "Sleep, dress, and daily private practice" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
          <div className="bg-black p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#777] mb-8">
                taqi &middot; the pure one
              </p>
              <h1 className="text-sm font-semibold text-white mb-4 leading-relaxed">
                Live as they lived.
              </h1>
              <p className="text-xs text-[#888] leading-relaxed max-w-xs">
                Practical wisdom from the Prophet &#65018; and the three generations that followed. Every entry sourced and cited.
              </p>
            </div>
            <div className="mt-10 flex gap-px">
              <Link href="/prophet" className="bg-white text-black text-xs font-semibold uppercase tracking-widest px-5 py-2.5 hover:bg-[#e8e8e8] transition-colors">
                Begin reading
              </Link>
              <Link href="/about" className="border border-[#333] text-[#888] text-xs uppercase tracking-widest px-5 py-2.5 hover:border-[#555] hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>

          <div className="bg-black p-8 flex flex-col items-end justify-center">
            <p className="text-[10px] uppercase tracking-widest text-[#555] mb-6 self-start">
              Al-Ahzab &middot; 33:21
            </p>
            <p className="font-arabic text-white text-right" style={{fontSize:"30px",lineHeight:"2.8"}} dir="rtl">
              &#x644;&#x64E;&#x642;&#x64E;&#x62F;&#x652; &#x643;&#x64E;&#x627;&#x646;&#x64E; &#x644;&#x64E;&#x643;&#x64F;&#x645;&#x652; &#x641;&#x650;&#x64A; &#x631;&#x64E;&#x633;&#x64F;&#x648;&#x644;&#x650; &#x627;&#x644;&#x644;&#x651;&#x64E;&#x647;&#x650; &#x623;&#x64F;&#x633;&#x652;&#x648;&#x64E;&#x629;&#xCC8; &#x62D;&#x64E;&#x633;&#x64E;&#x646;&#x64E;&#x629;&#xCC8;
            </p>
            <p className="text-xs text-[#555] mt-4 text-right leading-relaxed">
              Indeed in the Messenger of Allah you have an excellent example.
            </p>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Generations */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between border-b border-[#1a1a1a] pb-4">
          <p className="text-[10px] uppercase tracking-widest text-[#777]">Four Generations</p>
          <p className="text-[10px] uppercase tracking-widest text-[#444]">&#x627;&#x644;&#x623;&#x62C;&#x64A;&#x627;&#x644; &#x627;&#x644;&#x623;&#x631;&#x628;&#x639;&#x629;</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {generations.map((g) => (
            <Link key={g.num} href={g.href} className="bg-black p-8 flex flex-col justify-between min-h-[240px] group hover:bg-[#080808] transition-colors">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#555]">Generation {g.num} &middot; {g.period}</p>
                  <span className="text-[10px] text-[#444] uppercase tracking-widest">{g.count}</span>
                </div>
                <p className="font-arabic text-[#bbb] mb-4 text-right" style={{fontSize:"26px",lineHeight:"2.6"}} dir="rtl">{g.arabic}</p>
                <p className="text-sm font-semibold text-white mb-3 group-hover:text-[#ccc] transition-colors">{g.title}</p>
                <p className="text-xs text-[#666] leading-relaxed">{g.desc}</p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#555] mt-6 group-hover:text-[#888] transition-colors">Read &rarr;</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Six pillars */}
      <section className="max-w-5xl mx-auto px-4 py-10 border-t border-[#1a1a1a]">
        <div className="mb-8 flex items-center justify-between border-b border-[#1a1a1a] pb-4">
          <p className="text-[10px] uppercase tracking-widest text-[#777]">Six Domains of Practice</p>
          <p className="text-[10px] uppercase tracking-widest text-[#444]">&#x633;&#x62A;&#x629; &#x645;&#x62C;&#x627;&#x644;&#x627;&#x62A;</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {pillars.map((p) => (
            <Link key={p.id} href={`/prophet?topic=${p.id}`} className="bg-black p-6 group hover:bg-[#080808] transition-colors">
              <p className="font-arabic text-[#444] mb-3 text-right group-hover:text-[#666] transition-colors" style={{fontSize:"22px",lineHeight:"2.4"}} dir="rtl">{p.arabic}</p>
              <p className="text-xs font-semibold text-[#bbb] mb-1 group-hover:text-white transition-colors">{p.label}</p>
              <p className="text-[10px] text-[#555] leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          <div className="bg-black p-6 md:col-span-2">
            <p className="text-[10px] uppercase tracking-widest text-[#777] mb-4">About this site</p>
            <p className="text-xs text-[#888] leading-relaxed mb-3">
              <em>Taqi</em> (&#x637;&#x627;&#x642;&#x64A;) means &ldquo;the pure one&rdquo; in Arabic. This site makes the lived example of Islam&rsquo;s best generations accessible and practical &mdash; across four generations, six domains, from authenticated sources only.
            </p>
            <p className="text-xs text-[#666] leading-relaxed">
              All narrations are drawn from Sahih Bukhari, Sahih Muslim, Sunan al-Tirmidhi, Sunan Abu Dawud, Sunan Ibn Majah, Tabaqat Ibn Sa&rsquo;d, Siyar A&rsquo;lam al-Nubala, and Hilyat al-Awliya. Every entry is cited with source, book, and chain.
            </p>
          </div>
          <div className="bg-black p-6 flex flex-col justify-between">
            <p className="font-arabic text-[#333] text-right" style={{fontSize:"22px",lineHeight:"2.6"}} dir="rtl">
              &#x648;&#x64E;&#x642;&#x64F;&#x644; &#x631;&#x651;&#x64E;&#x628;&#x651;&#x650; &#x632;&#x650;&#x62F;&#x652;&#x646;&#x650;&#x64A; &#x639;&#x650;&#x644;&#x652;&#x645;&#x64B;&#x627;
            </p>
            <div>
              <p className="text-[10px] text-[#444] text-right mt-4">Ta-Ha &middot; 20:114</p>
              <p className="text-[10px] text-[#444] text-right mt-1">My Lord, increase me in knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
