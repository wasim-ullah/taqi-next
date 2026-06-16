"use client";

import { useState } from "react";
import type { HadithEntry } from "@/lib/types";
import TopicFilter from "../components/TopicFilter";
import HadithCard from "../components/HadithCard";

export default function ProphetClient({ entries }: { entries: HadithEntry[] }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? entries : entries.filter((e) => e.topic === active);

  return (
    <>
      <TopicFilter active={active} onChange={setActive} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Shamail intro when active */}
        {active === "shamail" && (
          <div className="border border-[#1a1a1a] p-6 mb-8">
            <p className="text-[10px] uppercase tracking-widest text-[#777] mb-3">
              Al-Shamail al-Muhammadiyya
            </p>
            <p
              className="font-arabic text-[#bbb] text-right mb-4"
              style={{ fontSize: "22px", lineHeight: "2.6" }}
              dir="rtl"
            >
              الشَّمَائِلُ الْمُحَمَّدِيَّة
            </p>
            <p className="text-sm text-[#888] leading-relaxed">
              The noble characteristics of the Messenger of Allah ﷺ, compiled by Imam al-Tirmidhi. These narrations preserve the physical and moral portrait of the Prophet ﷺ as witnessed by those who loved him most.
            </p>
          </div>
        )}

        {filtered.map((entry, i) => (
          <HadithCard key={entry.id || i} entry={entry} />
        ))}

        {filtered.length === 0 && (
          <p className="text-xs text-[#555] py-16 text-center">No entries found.</p>
        )}
      </div>
    </>
  );
}
