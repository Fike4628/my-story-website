import { timelineEvents } from "../data/chapters";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-[#0a1628] dark:bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">Key milestones that shaped who I am today.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-px" />

          {timelineEvents.map((event, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className={`relative flex items-start mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-black transform -translate-x-1/2 mt-1 z-10" />

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 bg-[#0d1f3c] dark:bg-zinc-900 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow ${
                  i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <span className="text-2xl mb-1 block">{event.icon}</span>
                <span className="text-primary font-bold text-sm">{event.year}</span>
                <h3 className="font-heading font-semibold text-dark dark:text-white text-base mt-0.5">
                  {event.title}
                </h3>
                <p className="text-blue-300 dark:text-slate-400 text-sm mt-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
