import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-8 pt-14">
      <div className="space-y-4">
        <span className="text-[11px] tracking-[0.2em] uppercase text-white/40">
          404 — Not Found
        </span>
        <h1 className="text-5xl font-extrabold text-white uppercase tracking-tight">
          Off Course
        </h1>
        <p className="text-white/40 text-sm max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to home
      </Link>
    </div>
  );
}
