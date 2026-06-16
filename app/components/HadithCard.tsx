interface HadithCardEntry {
  id: string;
  topic: string;
  title: string;
  source: string;
  chain: string;
  content: string;
  context?: string;
  arabic?: string;
}

const TOPIC_LABEL: Record<string, string> = {
  shamail:  "Shamail",
  trade:    "Trade & Business",
  family:   "Family Life",
  social:   "Social Life",
  spiritual:"Spiritual Life",
  private:  "Private Life",
};

export default function HadithCard({
  entry,
}: {
  entry: HadithCardEntry;
}) {
  return (
    <article className="border-b border-[#1a1a1a] py-10 last:border-0">
      {/* Topic badge */}
      <div className="mb-5">
        <span className="border border-[#222] text-[10px] uppercase tracking-widest text-[#666] px-2 py-1">
          {TOPIC_LABEL[entry.topic] ?? entry.topic}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-white mb-5 leading-relaxed">
        {entry.title}
      </h3>

      {/* Arabic text (if provided) */}
      {entry.arabic && (
        <p
          className="font-arabic text-white mb-6"
          style={{ fontSize: "28px", lineHeight: "2.6" }}
          dir="rtl"
        >
          {entry.arabic}
        </p>
      )}

      {/* English content */}
      <blockquote className="border-l border-[#333] pl-5 mb-5">
        <p className="text-sm text-[#bbb] leading-relaxed italic">
          &ldquo;{entry.content}&rdquo;
        </p>
      </blockquote>

      {/* Source */}
      <p className="text-[10px] uppercase tracking-widest text-[#555] mb-4">
        — {entry.source}
        {entry.chain ? `, ${entry.chain}` : ""}
      </p>

      {/* Context note */}
      {entry.context && (
        <p className="text-xs text-[#666] leading-relaxed max-w-2xl">
          {entry.context}
        </p>
      )}
    </article>
  );
}
