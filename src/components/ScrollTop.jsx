import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Scroll to top"
    >
      <FiArrowUp size={20} />
    </button>
  );
}
