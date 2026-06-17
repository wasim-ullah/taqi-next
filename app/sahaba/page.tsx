import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sahabaData from "@/lib/sahaba.json";
import type { Person } from "@/lib/types";

export const metadata = {
  title: "The Sahaba — taqi",
  description: "The Companions of the Prophet ﷺ — their lives across six domains.",
};

const people = sahabaData as unknown as Person[];

export default function SahabaOverview() {
  return (
    <>
      <Navbar />

      <header className="max-w-3xl mx-auto px-4 pt-16 pb-10 border-b border-[#e5e5e5]">
        <p className="text-[10px] uppercase tracking-widest text-[#999] mb-6">Generation II</p>
        <p
          className="font-arabic text-[#111] mb-6 text-right"
          style={{ fontSize: "36px", lineHeight: "2.8" }}
          dir="rtl"
        >
          الصَّحَابَة
        </p>
        <h1 className="text-base font-semibold text-[#111] mb-3">The Sahaba</h1>
        <p className="text-sm text-[#999] leading-relaxed max-w-lg">
          The Companions of the Prophet ﷺ — may Allah be pleased with them all. They saw the Prophet ﷺ, sat in his company, and carried his example into the world. Their lives are a living commentary on the Quran and Sunnah.
        </p>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
          {people.map((p) => {
            const totalEntries = Object.values(p.topics).flat().length;
            return (
              <Link
                key={p.id}
                href={`/sahaba/${p.slug}`}
                className="bg-white p-6 group hover:bg-[#f5f5f5] transition-colors flex items-start justify-between"
              >
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#999] mb-3">
                    {p.years}
                  </p>
                  <p className="text-base font-semibold text-[#111] mb-1 group-hover:text-[#444] transition-colors">
                    {p.name}
                  </p>
                  <p className="text-sm text-[#777] mb-3">{p.title}</p>
                  <p className="text-sm text-[#888] leading-relaxed max-w-lg">
                    {p.bio.slice(0, 140)}…
                  </p>
                </div>
                <div className="ml-8 text-right flex-shrink-0">
                  <p className="text-[10px] text-[#aaa] uppercase tracking-widest mb-2">
                    {totalEntries} narrations
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#999] group-hover:text-[#888] transition-colors">
                    Read →
                  </p>
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
