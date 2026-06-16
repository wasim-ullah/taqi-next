import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/prophet", label: "The Prophet ﷺ" },
  { href: "/sahaba", label: "Sahaba" },
  { href: "/tabieen", label: "Tabi'een" },
  { href: "/taba-tabieen", label: "Taba Tabi'een" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] mt-24">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {/* Brand */}
          <div className="bg-black p-6">
            <p className="text-[10px] uppercase tracking-widest text-[#777] mb-3">taqi</p>
            <p
              className="font-arabic text-[#444]"
              style={{ fontSize: "28px", lineHeight: "2.6" }}
              dir="rtl"
            >
              تقي
            </p>
            <p className="text-xs text-[#555] mt-2">The pure one.</p>
          </div>

          {/* Navigation */}
          <div className="bg-black p-6">
            <p className="text-[10px] uppercase tracking-widest text-[#777] mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-[#555] hover:text-[#bbb] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="bg-black p-6">
            <p className="text-[10px] uppercase tracking-widest text-[#777] mb-4">A note</p>
            <p className="text-xs text-[#555] leading-relaxed">
              All narrations are cited with their source. Every hadith referenced here is from authenticated collections. We ask Allah for accuracy and seek forgiveness for any error.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#1a1a1a]">
          <p className="text-[10px] text-[#444] uppercase tracking-widest">
            taqi.co — may Allah make us among the pure
          </p>
          <p className="text-[10px] text-[#333] uppercase tracking-widest">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
