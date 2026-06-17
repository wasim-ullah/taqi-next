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
      <header className="max-w-3xl mx-auto px-4 pt-16 pb-10 border-b border-[#e5e5e5]">
        <p className="text-[10px] uppercase tracking-widest text-[#999] mb-6">Generation III</p>
        <p className="font-arabic text-[#111] mb-6 text-right" style={{ fontSize: "36px", lineHeight: "2.8" }} dir="rtl">
          التَّابِعُون
        </p>
        <h1 className="text-base font-semibold text-[#111] mb-3">The Tabi&apos;een</h1>
        <p className="text-sm text-[#999] leading-relaxed max-w-lg">
          Those who followed — the generation that met the Companions of the Prophet ﷺ and learned directly from them. They carried forward the living tradition of the Sunnah at a time when Islam was spreading rapidly, preserving its essence with meticulous care.
        </p>
      </header>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
          {people.map((p) => {
            const totalEntries = Object.values(p.topics).flat().length;
            return (
              <Link key={p.id} href={`/tabieen/${p.slug}`} className="bg-white p-6 group hover:bg-[#f5f5f5] transition-colors flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#999] mb-3">{p.years}</p>
                  <p className="text-base font-semibold text-[#111] mb-1 group-hover:text-[#444] transition-colors">{p.name}</p>
                  <p className="text-sm text-[#777] mb-3">{p.title}</p>
                  <p className="text-sm text-[#888] leading-relaxed max-w-lg">{p.bio.slice(0, 140)}…</p>
                </div>
                <div className="ml-8 text-right flex-shrink-0">
                  <p className="text-[10px] text-[#aaa] uppercase tracking-widest mb-2">{totalEntries} narrations</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#999] group-hover:text-[#888] transition-colors">Read →</p>
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
