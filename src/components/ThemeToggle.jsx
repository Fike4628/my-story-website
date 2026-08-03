import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to blue mode" : "Switch to black mode"}
      title={dark ? "Switch to Blue" : "Switch to Black"}
      className="relative flex items-center w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{ background: dark ? "#000000" : "#0a1628", border: "1px solid #2563EB" }}
    >
      {/* Sliding knob */}
      <span
        className="absolute top-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-xs font-bold transition-all duration-300 select-none"
        style={{
          left: dark ? "calc(100% - 1.625rem)" : "0.125rem",
          background: dark ? "#111111" : "#2563EB",
          color: "#fff",
          fontSize: "10px",
        }}
      >
        {dark ? "⚫" : "🔵"}
      </span>

      {/* Labels */}
      <span
        className="absolute text-[8px] font-bold transition-opacity duration-300 select-none"
        style={{ right: dark ? "auto" : "6px", left: dark ? "6px" : "auto", color: dark ? "#555" : "#60a5fa", opacity: 0.8 }}
      >
        {dark ? "BLK" : "BLU"}
      </span>
    </button>
  );
}
