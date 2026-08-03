import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { chapters } from "../data/chapters";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function RichContent({ content }) {
  // Support both legacy string and new array format
  if (typeof content === "string") {
    return <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{content}</p>;
  }

  return (
    <div className="space-y-5">
      {content.map((block, i) => {
        if (block.type === "heading") {
          return (
            <motion.h2
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl font-heading font-bold text-dark dark:text-white mt-10 mb-2 pb-2 border-b-2 border-primary/30"
            >
              {block.text}
            </motion.h2>
          );
        }

        if (block.type === "quote") {
          return (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative my-8 pl-6 border-l-4 border-primary bg-primary/5 dark:bg-primary/10 rounded-r-xl py-4 pr-4"
            >
              <span className="absolute -top-3 left-4 text-5xl text-primary/20 font-serif leading-none select-none">"</span>
              <p className="text-dark dark:text-white text-lg italic font-medium leading-relaxed">
                {block.text}
              </p>
              {block.author && (
                <footer className="mt-2 text-sm text-primary font-semibold">
                  — {block.author}
                </footer>
              )}
            </motion.blockquote>
          );
        }

        // default: paragraph
        return (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg"
          >
            {block.text}
          </motion.p>
        );
      })}
    </div>
  );
}

export default function ChapterPage() {
  const { id } = useParams();
  const idx = chapters.findIndex((c) => c.id === id);
  const chapter = chapters[idx];

  if (!chapter) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold text-dark dark:text-white">Chapter not found.</h1>
        <Link to="/story" className="btn-primary mt-6 inline-block">Back to Story</Link>
      </div>
    );
  }

  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className={`py-20 bg-gradient-to-br ${chapter.color} text-white text-center`}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-6xl mb-4"
        >
          {chapter.emoji}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-sm uppercase tracking-widest mb-2"
        >
          Chapter {idx + 1} of {chapters.length}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-heading font-extrabold"
        >
          {chapter.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/80 mt-3 text-lg italic max-w-xl mx-auto px-4"
        >
          {chapter.summary}
        </motion.p>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 bg-[#0a1628] dark:bg-black min-h-screen">
        <RichContent content={chapter.content} />

        {/* Navigation */}
        <div className="flex justify-between mt-16 pt-8 border-t border-slate-200 dark:border-zinc-800 gap-4">
          {prev ? (
            <Link
              to={prev.path}
              className="flex items-center gap-2 text-primary hover:underline font-semibold group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to={next.path}
              className="flex items-center gap-2 text-primary hover:underline font-semibold group"
            >
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <span />}
        </div>

        <div className="text-center mt-10">
          <Link to="/story" className="btn-outline">
            All Chapters
          </Link>
        </div>
      </article>
    </div>
  );
}
