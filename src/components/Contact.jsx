import { useState } from "react";
import { FiSend, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Wire up EmailJS here when ready:
    // await emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#0d1f3c] dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question, want to collaborate, or just want to say hi?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading font-bold text-xl text-dark dark:text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-blue-300 dark:text-slate-400 mb-6 leading-relaxed">
              I'm open to internship opportunities, freelance projects, and
              collaborations. Feel free to reach out anytime.
            </p>

            <div className="flex flex-col gap-3 text-sm text-blue-200 dark:text-slate-300 mb-6">
              <a
                href="mailto:fiqaduriba418@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FiMail className="shrink-0" /> fiqaduriba418@gmail.com
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/Fike4628"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#112240] dark:bg-zinc-800 rounded-full text-sm font-medium text-blue-200 dark:text-slate-200 hover:bg-primary hover:text-white transition-colors"
              >
                <FiGithub size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fiqadu-d-8a76a0418"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#112240] dark:bg-zinc-800 rounded-full text-sm font-medium text-blue-200 dark:text-slate-200 hover:bg-primary hover:text-white transition-colors"
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl border border-[#1e3a5f] dark:border-zinc-700 bg-[#112240] dark:bg-zinc-800 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="px-4 py-3 rounded-xl border border-[#1e3a5f] dark:border-zinc-700 bg-[#112240] dark:bg-zinc-800 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your Message"
              className="px-4 py-3 rounded-xl border border-[#1e3a5f] dark:border-zinc-700 bg-[#112240] dark:bg-zinc-800 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary flex items-center justify-center gap-2"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent ✅"
                : (<><FiSend /> Send Message</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
