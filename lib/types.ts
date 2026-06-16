export interface HadithEntry {
  id: string;
  topic: string; // injected at runtime from the topics key
  title: string;
  source: string;
  chain: string;
  content: string;
  context?: string;
  arabic?: string;
}

export interface Person {
  id: string;
  slug: string;
  name: string;
  title: string;
  years: string;
  bio: string;
  topics: Record<string, HadithEntry[]>;
}
