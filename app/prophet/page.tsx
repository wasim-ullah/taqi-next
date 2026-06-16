import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadingProgress from "../components/ReadingProgress";
import ProphetClient from "./ProphetClient";
import prophetData from "@/lib/prophet.json";
import type { HadithEntry } from "@/lib/types";

export const metadata = {
  title: "The Prophet ﷺ — taqi",
  description: "Narrations about the Prophet Muhammad ﷺ across six domains of his life.",
};

export default function ProphetPage() {
  const entries = prophetData as HadithEntry[];

  return (
    <>
      <ReadingProgress />
      <Navbar />

      {/* Header */}
      <header className="max-w-3xl mx-auto px-4 pt-16 pb-10 border-b border-[#1a1a1a]">
        <p className="text-[10px] uppercase tracking-widest text-[#555] mb-6">
          Generation I
        </p>
        <p
          className="font-arabic text-white mb-6 text-right"
          style={{ fontSize: "36px", lineHeight: "2.8" }}
          dir="rtl"
        >
          النَّبِيُّ مُحَمَّدٌ ﷺ
        </p>
        <h1 className="text-sm font-semibold text-white mb-3">
          The Prophet Muhammad ﷺ
        </h1>
        <p className="text-xs text-[#666] leading-relaxed max-w-lg">
          A mercy to all the worlds. His life is a lamp for ours. {entries.length} narrations across six domains of practice, drawn from authenticated sources.
        </p>
      </header>

      <ProphetClient entries={entries} />

      <Footer />
    </>
  );
}
