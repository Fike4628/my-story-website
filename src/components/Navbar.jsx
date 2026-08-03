import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home",      path: "/",        anchor: null       },
  { label: "About",     path: "/about",   anchor: null       },
  { label: "My Story",  path: "/story",   anchor: null       },
  { label: "Timeline",  path: "/",        anchor: "timeline" },
  { label: "Projects",  path: "/",        anchor: "projects" },
  { label: "Skills",    path: "/",        anchor: "skills"   },
  { label: "Contact",   path: "/",        anchor: "contact"  },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After navigating to "/" for an anchor, scroll once the page is ready
  useEffect(() => {
    const pending = sessionStorage.getItem("scrollTo");
    if (pending && location.pathname === "/") {
      sessionStorage.removeItem("scrollTo");
      // Small delay to let the page render
      setTimeout(() => scrollTo(pending), 80);
    }
  }, [location]);

  const handleNavClick = (link, e) => {
    setOpen(false);
    if (!link.anchor) return; // normal route link — let NavLink handle it

    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home, just scroll
      scrollTo(link.anchor);
    } else {
      // Navigate home first, then scroll
      sessionStorage.setItem("scrollTo", link.anchor);
      navigate("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 dark:bg-black/95 backdrop-blur-md shadow-md shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-heading font-bold text-lg text-primary">
          Fiqadu<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.label}>
              {l.anchor ? (
                <a
                  href={`#${l.anchor}`}
                  onClick={(e) => handleNavClick(l, e)}
                  className="text-sm font-medium transition-colors duration-200 hover:text-primary text-blue-200 dark:text-slate-200 cursor-pointer"
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  to={l.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isActive ? "text-primary" : "text-blue-200 dark:text-slate-200"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick({ path: "/", anchor: "contact" }, e)}
            className="btn-primary text-sm py-2 px-4 cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-200 dark:text-white text-2xl"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0d1f3c] dark:bg-black border-t border-[#1e3a5f] dark:border-zinc-800 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.anchor ? (
                  <a
                    href={`#${l.anchor}`}
                    onClick={(e) => handleNavClick(l, e)}
                    className="block text-sm font-medium text-blue-200 dark:text-slate-200 hover:text-primary cursor-pointer"
                  >
                    {l.label}
                  </a>
                ) : (
                  <NavLink
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-blue-200 dark:text-slate-200 hover:text-primary"
                  >
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
