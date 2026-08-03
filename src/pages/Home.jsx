import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import ChapterCard from "../components/ChapterCard";
import QuoteCard from "../components/QuoteCard";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Contact from "../components/Contact";
import { chapters, projects, skills, dreams } from "../data/chapters";
import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <>
      <Hero />

      {/* About Me */}
      <section id="about" className="py-20 bg-[#0d1f3c] dark:bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/30">
                <img
                  src="/aboutMe.jpg"
                  alt="Fiqadu Diriba Bekele"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Me</span>
              <h2 className="section-title mt-2">Fiqadu Diriba Bekele</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                I'm a Software Engineering student at Haramaya University, Ethiopia. Born with a
                curiosity for how things work, I found my calling in technology — specifically in
                building full-stack web applications that solve real problems.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                {[
                  ["Birthplace", "Arsi, Ethiopia 🇪🇹"],
                  ["University", "Haramaya University"],
                  ["Field", "Software Engineering"],
                  ["Top Rank", "Grades 6–10 🏆"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-[#112240] dark:bg-zinc-800 rounded-lg p-3">
                    <span className="text-slate-400 block text-xs">{k}</span>
                    <span className="font-semibold text-dark dark:text-white">{v}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Chapters */}
      <section className="py-20 bg-[#0a1628] dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">My Story</h2>
            <p className="section-subtitle">
              Explore my life chapter by chapter — each one a lesson, each one a step forward.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.slice(0, 6).map((ch, i) => (
              <ChapterCard key={ch.id} chapter={ch} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/story" className="btn-outline">
              Read All Chapters
            </Link>
          </div>
        </div>
      </section>

      <Timeline />

      {/* Projects */}
      <section id="projects" className="py-20 bg-[#0d1f3c] dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Real-world applications I've built.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="chapter-card"
              >
                <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                <div className="p-6">
                  <span className="text-3xl mb-3 block">{p.icon}</span>
                  <h3 className="font-heading font-bold text-dark dark:text-white mb-2">{p.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-500 hover:text-primary">
                      <FiGithub /> GitHub
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1 text-sm text-slate-500 hover:text-primary">
                        <FiExternalLink /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-[#0a1628] dark:bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Technologies I work with.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((s, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="flex justify-between text-sm font-medium text-dark dark:text-white mb-1">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="h-2.5 bg-[#1e3a5f] dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dreams */}
      <section id="dreams" className="py-20 bg-[#0d1f3c] dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">My Dreams</h2>
            <p className="section-subtitle">The vision that fuels every day of hard work.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {dreams.map((d, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="bg-[#112240] dark:bg-zinc-900 rounded-xl p-5 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-3 block">{d.emoji}</span>
                <h3 className="font-heading font-bold text-dark dark:text-white mb-1">{d.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCard />
      <Gallery />
      <VideoSection />
      <Contact />
    </>
  );
}
