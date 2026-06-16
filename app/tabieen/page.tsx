import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tabieenData from "@/lib/tabieen.json";
import type { Person } from "@/lib/types";

export const metadata = {
  title: "The Tabi'een — taqi",
  description: "The generation that met the Companions of the Prophet ﷺ.",
};

const people = tabieenData as unknown as Person[];

export default function TabieenOverview() {
  return (
    <>
      <Navbar />
      <header className="max-w-3xl mx-auto px-4 pt-16 pb-10 border-b border-[#1a1a1a]">
        <p className="text-[10px] uppercase tracking-widest text-[#555] mb-6">Generation III</p>
        <p className="font-arabic text-white mb-6 text-right" style={{ fontSize: "36px", lineHeight: "2.8" }} dir="rtl">
          التَّابِعُون
        </p>
        <h1 className="text-sm font-semibold text-white mb-3">The Tabi&apos;een</h1>
        <p className="text-xs text-[#666] leading-relaxed max-w-lg">
          Those who followed — the generation that met the Companions of the Prophet ﷺ and learned directly from them. They carried forward the living tradition of the Sunnah at a time when Islam was spreading rapidly, preserving its essence with meticulous care.
        </p>
      </header>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {people.map((p) => {
            const totalEntries = Object.values(p.topics).flat().length;
            return (
              <Link key={p.id} href={`/tabieen/${p.slug}`} className="bg-black p-6 group hover:bg-[#080808] transition-colors flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#555] mb-3">{p.years}</p>
                  <p className="text-sm font-semibold text-white mb-1 group-hover:text-[#ccc] transition-colors">{p.name}</p>
                  <p className="text-xs text-[#666] italic mb-3">{p.title}</p>
                  <p className="text-xs text-[#555] leading-relaxed max-w-lg">{p.bio.slice(0, 140)}…</p>
                </div>
                <div className="ml-8 text-right flex-shrink-0">
                  <p className="text-[10px] text-[#444] uppercase tracking-widest mb-2">{totalEntries} narrations</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#555] group-hover:text-[#888] transition-colors">Read →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
