import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] dark:bg-black text-blue-300 dark:text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link to="/" className="font-heading font-bold text-xl text-white">
              Fiqadu<span className="text-accent">.</span>
            </Link>
            <p className="text-sm mt-1 italic">
              "A journey of faith, perseverance, education, and purpose."
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Fike4628"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/fiqadu-d-8a76a0418"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:fiqaduriba418@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <hr className="border-[#1e3a5f] dark:border-zinc-800 my-6" />

        <p className="text-center text-sm">
          © {new Date().getFullYear()} Fiqadu Diriba Bekele.
        </p>
      </div>
    </footer>
  );
}
