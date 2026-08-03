import { motion } from "framer-motion";
import { FiPlay, FiFilm } from "react-icons/fi";

/**
 * VideoSection — placeholder for future video content.
 *
 * To add a real video later, replace the `src` field in the `videos` array:
 *   - YouTube embed:  "https://www.youtube.com/embed/YOUR_VIDEO_ID"
 *   - Local file:     "/videos/my-story.mp4"  (place file in public/videos/)
 *
 * Set `ready: true` on a video entry to switch from placeholder to real embed.
 */
const videos = [
  {
    id: 1,
    title: "My Story — Introduction",
    description: "A personal video introduction to my life journey, faith, and purpose.",
    src: null,       // replace with YouTube embed URL or local path when ready
    ready: false,
    thumbnail: null, // optional: "/images/video-thumb-1.jpg"
    duration: "Coming Soon",
  },
  {
    id: 2,
    title: "University Life at Haramaya",
    description: "A glimpse into my daily life as a Software Engineering student.",
    src: null,
    ready: false,
    thumbnail: null,
    duration: "Coming Soon",
  },
  {
    id: 3,
    title: "My Projects in Action",
    description: "Live demos of the software projects I have built.",
    src: null,
    ready: false,
    thumbnail: null,
    duration: "Coming Soon",
  },
];

function VideoCard({ video, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#0d1f3c] dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
    >
      {/* Video frame */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        {video.ready && video.src ? (
          <iframe
            src={video.src}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Placeholder */}
            {video.thumbnail ? (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover opacity-40"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FiFilm size={48} className="text-slate-600" />
              </div>
            )}

            {/* Play button overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <FiPlay size={24} className="text-white ml-1" />
              </div>
              <span className="text-white/60 text-xs font-medium tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                Video Coming Soon
              </span>
            </div>

            {/* Duration badge */}
            <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded backdrop-blur-sm">
              {video.duration}
            </span>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-dark dark:text-white mb-1">
          {video.title}
        </h3>
        <p className="text-blue-300 dark:text-slate-400 text-sm leading-relaxed">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function VideoSection() {
  return (
    <section id="videos" className="py-20 bg-[#0d1f3c] dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              My Story in Video
            </span>
            <h2 className="section-title mt-2">Video Stories</h2>
            <p className="section-subtitle">
              Soon you'll be able to watch my journey in my own words.
            </p>
          </motion.div>

          {/* Coming soon banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mt-4 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Videos will be added soon — check back later
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          To add a video: set <code className="bg-slate-200 dark:bg-zinc-800 px-1 rounded">ready: true</code> and
          provide a <code className="bg-slate-200 dark:bg-zinc-800 px-1 rounded">src</code> URL in{" "}
          <code className="bg-slate-200 dark:bg-zinc-800 px-1 rounded">VideoSection.jsx</code>
        </p>
      </div>
    </section>
  );
}
