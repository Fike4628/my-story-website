import { chapters } from "../data/chapters";
import ChapterCard from "../components/ChapterCard";

export default function StoryIndex() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#2563EB] dark:from-black dark:via-zinc-900 dark:to-black text-white text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-3">My Story</h1>
        <p className="text-slate-300 text-lg max-w-xl mx-auto">
          A life told chapter by chapter — faith, struggle, growth, and purpose.
        </p>
      </section>

      <section className="py-16 bg-[#0a1628] dark:bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((ch, i) => (
            <ChapterCard key={ch.id} chapter={ch} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
