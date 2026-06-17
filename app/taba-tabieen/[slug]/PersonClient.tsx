"use client";

import { useState } from "react";
import type { HadithEntry, Person } from "@/lib/types";
import TopicFilter from "../../components/TopicFilter";
import HadithCard from "../../components/HadithCard";

export default function PersonClient({ person }: { person: Person }) {
  const [active, setActive] = useState("all");

  const allEntries: HadithEntry[] = Object.entries(person.topics).flatMap(
    ([topic, entries]) => entries.map((e) => ({ ...e, topic }))
  );

  const filtered =
    active === "all"
      ? allEntries
      : (person.topics[active] ?? []).map((e) => ({ ...e, topic: active }));

  return (
    <>
      <TopicFilter active={active} onChange={setActive} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {filtered.map((entry, i) => (
          <HadithCard key={entry.id || i} entry={entry} />
        ))}
        {filtered.length === 0 && (
          <p className="text-xs text-[#999] py-16 text-center">No entries for this topic.</p>
        )}
      </div>
    </>
  );
}
