import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReadingProgress from "../../components/ReadingProgress";
import PersonClient from "./PersonClient";
import tabatabieen from "@/lib/taba_tabieen.json";
import type { Person } from "@/lib/types";

const people = tabatabieen as unknown as Person[];

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const person = people.find((p) => p.slug === params.slug);
  if (!person) return {};
  return { title: `${person.name} — taqi`, description: person.bio.slice(0, 160) };
}

export default function TabaTabieenProfile({ params }: { params: { slug: string } }) {
  const person = people.find((p) => p.slug === params.slug);
  if (!person) notFound();
  const totalEntries = Object.values(person.topics).flat().length;

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <header className="max-w-3xl mx-auto px-4 pt-16 pb-10 border-b border-[#1a1a1a]">
        <p className="text-[10px] uppercase tracking-widest text-[#555] mb-3">Taba Tabi&apos;een · {person.years}</p>
        <h1 className="text-sm font-semibold text-white mb-1">{person.name}</h1>
        <p className="text-xs text-[#666] italic mb-5">{person.title}</p>
        <p className="text-xs text-[#666] leading-relaxed max-w-lg mb-4">{person.bio}</p>
        <p className="text-[10px] uppercase tracking-widest text-[#444]">{totalEntries} narrations across 6 domains</p>
      </header>
      <PersonClient person={person} />
      <Footer />
    </>
  );
}
