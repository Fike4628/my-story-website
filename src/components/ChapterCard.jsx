import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ChapterCard({ chapter, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="chapter-card group"
    >
      <div className={`h-2 bg-gradient-to-r ${chapter.color}`} />
      <div className="p-6">
        <span className="text-3xl mb-3 block">{chapter.emoji}</span>
        <h3 className="font-heading font-bold text-lg text-dark dark:text-white mb-2">
          {chapter.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
          {chapter.summary}
        </p>
        <Link
          to={chapter.path}
          className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
        >
          Read Chapter <FiArrowRight />
        </Link>
      </div>
    </motion.div>
  );
}
