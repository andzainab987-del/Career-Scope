import { SectionHeader } from "@/components/shared/section-header";

export const metadata = {
  title: "About — CareerScope AI",
  description: "Learn how CareerScope AI works.",
};

export default function AboutPage() {
  const steps = [
    { step: "01", title: "Assessment & Input", desc: "Share your academic background, work style, and salary expectations via our 5-step quiz or direct chat." },
    { step: "02", title: "AI Reasoning", desc: "Our API pairs Groq's Llama 3.3 70B model with calibrated career data across Technology, Engineering, and Aviation." },
    { step: "03", title: "Actionable Blueprint", desc: "Receive tailored field recommendations, salary projections, university benchmarks, and step-by-step learning paths." },
  ];

  const faqs = [
    { q: "What makes CareerScope AI unique for South Asian students?", a: "We factor in specific university pipelines (FAST, NUST, LUMS, GIKI, UET), local entry salaries in PKR/INR, and realistic pathways into remote USD roles." },
    { q: "Which AI model powers the chat?", a: "Groq's Llama 3.3 70B Versatile, running through a secure Next.js App Router server API route." },
    { q: "Do I need to create an account?", a: "No. Everything persists locally in your browser via localStorage." },
  ];

  const stack = [
    { name: "Next.js 16", desc: "App Router & Server Routes" },
    { name: "TypeScript", desc: "End-to-end type safety" },
    { name: "Tailwind & shadcn", desc: "Design system" },
    { name: "Groq & Llama 3.3", desc: "Sub-second LLM inference" },
  ];

  return (
    <div className="py-12 pt-24 max-w-6xl mx-auto px-6 space-y-20">
      <SectionHeader
        badge="Mission"
        title="Guiding the next"
        gradientTitle="generation"
        description="CareerScope AI bridges the gap between academic choices and high-value tech, engineering, and aviation careers."
      />

      {/* Steps */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-white text-center uppercase tracking-tight">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {steps.map((s) => (
            <div key={s.step} className="bg-black p-8 space-y-4">
              <span className="text-3xl font-extrabold text-white/20">{s.step}</span>
              <h4 className="text-base font-bold text-white">{s.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white text-center uppercase tracking-tight">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10">
          {stack.map((s) => (
            <div key={s.name} className="bg-black p-6 space-y-1">
              <span className="font-bold text-white text-sm">{s.name}</span>
              <span className="text-white/40 text-xs block">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-white text-center uppercase tracking-tight">FAQ</h3>
        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 p-6 space-y-2 -mt-px">
              <h4 className="text-sm font-bold text-white">{faq.q}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
