import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import { useRef } from "react";

/* Floating particle */
function Particle({ x, y, size, duration, delay, color }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
      animate={{
        y: [0, -40, 0],
        x: [0, 15, -10, 0],
        opacity: [0.15, 0.5, 0.15],
        scale: [1, 1.4, 1],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const particles = [
  { x: 10, y: 20, size: 8,  duration: 6,  delay: 0,   color: "#2563EB" },
  { x: 80, y: 15, size: 12, duration: 8,  delay: 1,   color: "#F59E0B" },
  { x: 60, y: 70, size: 6,  duration: 7,  delay: 2,   color: "#2563EB" },
  { x: 25, y: 80, size: 10, duration: 9,  delay: 0.5, color: "#F59E0B" },
  { x: 90, y: 55, size: 7,  duration: 5,  delay: 1.5, color: "#ffffff" },
  { x: 45, y: 10, size: 9,  duration: 10, delay: 3,   color: "#2563EB" },
  { x: 5,  y: 60, size: 5,  duration: 7,  delay: 2.5, color: "#F59E0B" },
  { x: 70, y: 90, size: 11, duration: 8,  delay: 0.8, color: "#ffffff" },
];

export default function Hero() {
  const containerRef = useRef(null);

  /* 3-D tilt on mouse move */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top  - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-blue-950 to-slate-900"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hero background image with parallax-style scale */}
      <motion.img
        src="/hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.18 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* Orbital ring */}
      <motion.div
        className="absolute w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
      >
        <motion.div
          className="absolute -top-2 left-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"
          style={{ x: "-50%" }}
        />
      </motion.div>
      <motion.div
        className="absolute w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full border border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
      >
        <motion.div
          className="absolute top-1/2 -right-2 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50"
          style={{ y: "-50%" }}
        />
      </motion.div>

      {/* Main content */}
      <div ref={containerRef} className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Profile image with 3-D tilt + glow hover */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
          initial={{ opacity: 0, scale: 0.4, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 cursor-pointer group"
          whileHover={{ scale: 1.06 }}
        >
          {/* Spinning gradient ring */}
          <motion.div
            className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary via-accent to-blue-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {/* Glow pulse */}
          <motion.div
            className="absolute -inset-3 rounded-full bg-primary/30 blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          {/* Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 z-10">
            <img
              src="/profile.jpg"
              alt="Fiqadu Diriba Bekele"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-2 -right-2 bg-accent text-secondary text-xs font-bold px-2 py-1 rounded-full shadow-lg z-20 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            💻 SE Student
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-accent font-semibold tracking-widest text-sm uppercase mb-2"
        >
          Welcome to My Story
        </motion.p>

        {/* Name with letter stagger */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight"
        >
          {"Fiqadu Diriba Bekele".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.03, ease: "easeOut" }}
              className={char === " " ? "inline-block w-3" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-slate-300 text-lg md:text-xl mb-8 italic"
        >
          "A journey of faith, perseverance, education, and purpose."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Link to="/story" className="btn-primary text-base shadow-lg shadow-primary/40">
              Read My Story
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-base"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          {[
            { value: "#1", label: "Grades 6–10" },
            { value: "#2", label: "Grade 11" },
            { value: "#3", label: "Grade 12" },
            { value: "5+", label: "Projects Built" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-heading font-extrabold text-primary">{value}</div>
              <div className="text-slate-400 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#about"
            className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-1"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowDown size={22} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
