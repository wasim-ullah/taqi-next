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
  shamail:   "Shamail",
  trade:     "Trade & Business",
  family:    "Family Life",
  social:    "Social Life",
  spiritual: "Spiritual Life",
  private:   "Private Life",
};

export default function HadithCard({ entry }: { entry: HadithCardEntry }) {
  return (
    <article className="border-b border-[#1a1a1a] py-12 last:border-0">
      {/* Topic badge */}
      <div className="mb-5">
        <span className="border border-[#222] text-[10px] uppercase tracking-widest text-[#777] px-2 py-1">
          {TOPIC_LABEL[entry.topic] ?? entry.topic}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white mb-6 leading-snug">
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
      <blockquote className="border-l border-[#444] pl-5 mb-6">
        <p className="text-sm text-[#d4d4d4] leading-[1.9]">
          &ldquo;{entry.content}&rdquo;
        </p>
      </blockquote>

      {/* Source */}
      <p className="text-[10px] uppercase tracking-widest text-[#666] mb-5">
        — {entry.source}
        {entry.chain ? `, ${entry.chain}` : ""}
      </p>

      {/* Context note */}
      {entry.context && (
        <p className="text-sm text-[#888] leading-[1.85] max-w-2xl">
          {entry.context}
        </p>
      )}
    </article>
  );
}
