import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quotes } from "../data/chapters";
import { FiHeart } from "react-icons/fi";

export default function QuoteCard() {
  const [idx, setIdx] = useState(0);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleLike = (i) => {
    setLiked((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl text-white/30 font-serif leading-none block mb-4">"</span>
            <p className="text-white text-xl md:text-2xl font-medium italic mb-4 leading-relaxed">
              {quotes[idx].text}
            </p>
            <p className="text-blue-200 font-semibold">— {quotes[idx].author}</p>
            <button
              onClick={() => toggleLike(idx)}
              className="mt-4 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <FiHeart
                className={liked.includes(idx) ? "fill-red-400 text-red-400" : ""}
              />
              {liked.includes(idx) ? "Favorited" : "Favorite this quote"}
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === idx ? "bg-white w-5" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
