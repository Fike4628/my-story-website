import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryItems = [
  { label: "Childhood",   image: "/images/childhood.png",   bg: "from-green-400 to-emerald-500"  },
  { label: "School Days", image: "/images/School Days.png", bg: "from-yellow-400 to-orange-500"  },
  { label: "Family",      image: "/images/Family.png",      bg: "from-pink-400 to-rose-500"      },
  { label: "Friends",     image: "/images/Friends.png",     bg: "from-purple-400 to-violet-500"  },
  { label: "University",  image: "/images/University.png",  bg: "from-blue-400 to-indigo-500"    },
  { label: "Projects",    image: "/images/Projects.png",    bg: "from-cyan-400 to-sky-500"       },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null

  const prev = () => setLightbox((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setLightbox((i) => (i + 1) % galleryItems.length);

  return (
    <section id="gallery" className="py-20 bg-[#0a1628] dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Moments from my journey captured in memories.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              className="relative rounded-2xl aspect-square overflow-hidden cursor-pointer shadow-md group"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </div>
              {/* Corner shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightbox].image}
                alt={galleryItems[lightbox].label}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <p className="text-white text-center mt-3 font-semibold">
                {galleryItems[lightbox].label}
              </p>

              {/* Controls */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                aria-label="Previous"
              >
                <FiChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                aria-label="Next"
              >
                <FiChevronRight size={22} />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === lightbox ? "bg-white w-5" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
