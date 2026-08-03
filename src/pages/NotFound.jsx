import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0a1628] dark:bg-black">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-5xl font-heading font-bold text-dark dark:text-white mb-3">404</h1>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
        This page doesn't exist in my story — yet.
      </p>
      <Link to="/" className="btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}
