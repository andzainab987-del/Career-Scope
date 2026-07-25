import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function QuizTeaser() {
  const highlights = [
    "5-step personalization assessment",
    "Local & international salary benchmarks",
    "Skill gap analysis & recommendations",
    "Instant AI-generated career blueprint",
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/40">
              Assessment
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Find your <span className="text-white/60">ideal path</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              3-minute AI career compass quiz. Our reasoning engine analyzes your background, interests, salary expectations, and work-life priorities.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-1 h-1 bg-white/40 rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/career-compass"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors mt-2"
            >
              Start assessment
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Quiz Preview */}
          <div className="border border-white/10 p-6 space-y-4 bg-black">
            <div className="flex items-center justify-between text-xs text-white/40 border-b border-white/10 pb-3">
              <span className="text-white/60 font-medium">Step 3 of 5</span>
              <span>Work style</span>
            </div>

            <p className="text-sm text-white font-medium">What environment motivates you most?</p>
            
            <div className="space-y-2">
              <div className="p-3 border border-white/30 text-white text-xs flex items-center justify-between bg-white/5">
                <span>Building high-scale software & AI systems</span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
              <div className="p-3 border border-white/10 text-white/40 text-xs">
                Hands-on hardware & robotics machinery
              </div>
              <div className="p-3 border border-white/10 text-white/40 text-xs">
                High-altitude flight navigation & airspace
              </div>
            </div>

            <p className="text-[11px] text-white/30 text-center pt-2">
              AI recommendation generated upon completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
