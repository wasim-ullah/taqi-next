import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About — taqi",
  description: "About taqi — the pure one. An Islamic scholarly reference site.",
};

const sources = [
  { arabic: "صَحِيحُ الْبُخَارِي", english: "Sahih al-Bukhari", author: "Muhammad ibn Ismail al-Bukhari (d. 870 CE)" },
  { arabic: "صَحِيحُ مُسْلِم", english: "Sahih Muslim", author: "Muslim ibn al-Hajjaj (d. 875 CE)" },
  { arabic: "سُنَنُ التِّرْمِذِي", english: "Sunan al-Tirmidhi", author: "Muhammad ibn Isa al-Tirmidhi (d. 892 CE)" },
  { arabic: "سُنَنُ أَبِي دَاوُد", english: "Sunan Abu Dawud", author: "Abu Dawud al-Sijistani (d. 889 CE)" },
  { arabic: "سُنَنُ ابْنِ مَاجَه", english: "Sunan Ibn Majah", author: "Ibn Majah al-Qazwini (d. 887 CE)" },
  { arabic: "الشَّمَائِلُ الْمُحَمَّدِيَّة", english: "Al-Shamail al-Muhammadiyya", author: "Imam al-Tirmidhi (d. 892 CE)" },
  { arabic: "طَبَقَاتُ ابْنِ سَعْد", english: "Tabaqat Ibn Sa'd", author: "Muhammad ibn Sa'd (d. 845 CE)" },
  { arabic: "سِيَرُ أَعْلَامِ النُّبَلَاء", english: "Siyar A'lam al-Nubala", author: "Imam al-Dhahabi (d. 1348 CE)" },
  { arabic: "حِلْيَةُ الْأَوْلِيَاء", english: "Hilyat al-Awliya", author: "Abu Nu'aym al-Isfahani (d. 1038 CE)" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <header className="max-w-3xl mx-auto px-4 pt-16 pb-10 border-b border-[#1a1a1a]">
        <p className="text-[10px] uppercase tracking-widest text-[#555] mb-6">About</p>
        <p
          className="font-arabic text-white mb-6 text-right"
          style={{ fontSize: "40px", lineHeight: "2.8" }}
          dir="rtl"
        >
          تقي
        </p>
        <h1 className="text-sm font-semibold text-white mb-3">The Pure One</h1>
        <p className="text-sm text-[#999] leading-relaxed max-w-lg">
          Taqi (تقي) means the pure one in Arabic — a name given to those who are pious, God-fearing, and careful in their conduct.
        </p>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-12">

        {/* What this is */}
        <div className="border border-[#1a1a1a] p-6 mb-px">
          <p className="text-[10px] uppercase tracking-widest text-[#777] mb-4">What this is</p>
          <p className="text-sm text-[#999] leading-relaxed mb-3">
            This site is an attempt to make the lived example of Islam&rsquo;s best generations accessible and practical — organized not by biography but by domain. Four generations, six domains each: Shamail (character), Trade &amp; Business, Family Life, Social Life, Spiritual Life, and Private Life.
          </p>
          <p className="text-sm text-[#888] leading-relaxed">
            The Prophet ﷺ — then those who saw him — then those who saw them — then those who saw them. Each generation passed the lamp of practice to the next with fidelity. This site tries to preserve that chain in a readable form.
          </p>
        </div>

        {/* The four generations */}
        <div className="border border-[#1a1a1a] border-t-0 p-6 mb-px">
          <p className="text-[10px] uppercase tracking-widest text-[#777] mb-4">The Four Generations</p>
          <div className="grid grid-cols-1 gap-px bg-[#1a1a1a]">
            {[
              { gen: "I", label: "The Prophet ﷺ", arabic: "النَّبِيُّ ﷺ", note: "The Messenger of Allah, Muhammad ibn Abdullah (570–632 CE)" },
              { gen: "II", label: "Al-Sahaba", arabic: "الصَّحَابَة", note: "Those who saw the Prophet ﷺ and believed in him" },
              { gen: "III", label: "Al-Tabi'een", arabic: "التَّابِعُون", note: "Those who saw the Sahaba and followed their way" },
              { gen: "IV", label: "Taba Tabi'een", arabic: "تَبَع التَّابِعِين", note: "Those who saw the Tabi'een — the generation of the great Imams" },
            ].map((g) => (
              <div key={g.gen} className="bg-black p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#555] mb-1">Gen {g.gen} · {g.label}</p>
                  <p className="text-sm text-[#888] leading-relaxed">{g.note}</p>
                </div>
                <p
                  className="font-arabic text-[#333] text-right flex-shrink-0"
                  style={{ fontSize: "18px", lineHeight: "2.4" }}
                  dir="rtl"
                >
                  {g.arabic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="border border-[#1a1a1a] border-t-0 p-6 mb-px">
          <p className="text-[10px] uppercase tracking-widest text-[#777] mb-4">Sources Used</p>
          <div className="grid grid-cols-1 gap-px bg-[#1a1a1a]">
            {sources.map((s) => (
              <div key={s.english} className="bg-black p-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#bbb] mb-0.5">{s.english}</p>
                  <p className="text-xs text-[#666]">{s.author}</p>
                </div>
                <p
                  className="font-arabic text-[#333] text-right flex-shrink-0"
                  style={{ fontSize: "14px", lineHeight: "2.2" }}
                  dir="rtl"
                >
                  {s.arabic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hadith grading note */}
        <div className="border border-[#1a1a1a] border-t-0 p-6">
          <p className="text-[10px] uppercase tracking-widest text-[#777] mb-4">On Authenticity</p>
          <p className="text-sm text-[#999] leading-relaxed mb-3">
            Only narrations graded Sahih (authentic) or Hasan (good) have been included. Where narrations come from biographical sources (Tabaqat, Siyar, Hilyat al-Awliya), they are drawn from accounts considered reliable by the compiling scholars.
          </p>
          <p className="text-sm text-[#888] leading-relaxed">
            No fabricated (mawdu&rsquo;) narrations are included. Every entry is cited with its book and narrator chain. We ask Allah for accuracy and seek His forgiveness for any error in transmission.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
