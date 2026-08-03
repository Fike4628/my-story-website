import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { values } from "../data/chapters";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#2563EB] dark:from-black dark:via-zinc-900 dark:to-black text-white text-center relative overflow-hidden">
        <motion.img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative z-10">
          <motion.div
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent mx-auto mb-4 shadow-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <img src="/profile.jpg" alt="Fiqadu" className="w-full h-full object-cover" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-3">About Me</h1>
          <p className="text-slate-300 text-lg italic max-w-xl mx-auto">
            "A student, a builder, a dreamer — walking by faith."
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a1628] dark:bg-black max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/30 mb-6 relative group cursor-pointer"
              whileHover={{ scale: 1.02, rotateZ: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <img
                src="/aboutMe.jpg"
                alt="Fiqadu Diriba Bekele"
                className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  Fiqadu Diriba Bekele
                </span>
              </div>
            </motion.div>
            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-xl px-5 py-3 text-white text-center mb-4">
              <h2 className="font-heading font-bold text-xl">Fiqadu Diriba Bekele</h2>
              <p className="text-blue-100 text-sm">Software Engineering Student · Haramaya University</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Grade 6", value: "Rank #1 🏆" },
                { label: "Grade 10", value: "Rank #1 🥇" },
                { label: "University", value: "Haramaya 🎓" },
                { label: "Field", value: "Software Eng. 💻" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#112240] dark:bg-zinc-900 rounded-xl p-4 text-center">
                  <div className="text-blue-100 dark:text-white font-bold">{value}</div>
                  <div className="text-slate-400 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="section-title">My Story in Brief</h2>
            <p className="text-slate-300 dark:text-slate-400 mb-4 leading-relaxed">
              I was born and raised in Ethiopia with a love for knowledge and a heart full of faith.
              Academic excellence followed me from primary school through high school, where I ranked
              first in my class twice.
            </p>
            <p className="text-slate-300 dark:text-slate-400 mb-4 leading-relaxed">
              At Haramaya University, I chose Software Engineering — a decision that aligned perfectly
              with my curiosity, my love for problem-solving, and my desire to create things that matter.
            </p>
            <p className="text-slate-300 dark:text-slate-400 mb-6 leading-relaxed">
              I am fluent in the MERN stack (without MongoDB), building full-stack applications using
              React, Node.js, Express, and MySQL. My mission is to use technology to solve real
              problems and empower my community.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MySQL", "PostgreSQL", "Tailwind CSS", "Git"].map((t) => (
                <span key={t} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#0d1f3c] dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">My Values</h2>
          <p className="section-subtitle text-center mb-10">The principles that guide every decision I make.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="bg-[#112240] dark:bg-zinc-900 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl block mb-2">{v.emoji}</span>
                <h3 className="font-bold text-dark dark:text-white mb-1">{v.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
