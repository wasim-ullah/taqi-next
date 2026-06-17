"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/prophet", label: "Prophet ﷺ" },
  { href: "/sahaba", label: "Sahaba" },
  { href: "/tabieen", label: "Tabi'een" },
  { href: "/taba-tabieen", label: "Taba Tabi'een" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-10 border-b border-[#e5e5e5] px-4 flex items-center justify-between bg-white sticky top-0 z-50">
      <Link
        href="/"
        className="text-[10px] uppercase tracking-widest text-[#777] hover:text-[#111] transition-colors"
      >
        taqi
      </Link>

      <div className="flex items-center gap-6">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`text-[10px] uppercase tracking-widest transition-colors ${
              pathname === l.href || pathname.startsWith(l.href + "/")
                ? "text-[#111]"
                : "text-[#777] hover:text-[#111]"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
