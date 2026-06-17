"use client";

const TOPICS = [
  { id: "all",      label: "All" },
  { id: "shamail",  label: "Shamail" },
  { id: "trade",    label: "Trade & Business" },
  { id: "family",   label: "Family Life" },
  { id: "social",   label: "Social Life" },
  { id: "spiritual",label: "Spiritual Life" },
  { id: "private",  label: "Private Life" },
];

export default function TopicFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (t: string) => void;
}) {
  return (
    <div className="sticky top-10 z-40 border-b border-[#e5e5e5] bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex overflow-x-auto py-2.5 gap-px">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`whitespace-nowrap px-4 py-1.5 text-[10px] uppercase tracking-widest transition-colors ${
                active === t.id
                  ? "bg-black text-white font-semibold"
                  : "border border-[#e5e5e5] text-[#777] hover:text-[#111]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
