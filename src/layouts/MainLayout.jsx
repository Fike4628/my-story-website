import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function MainLayout() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar */}
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
