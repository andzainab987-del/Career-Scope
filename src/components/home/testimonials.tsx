import { TESTIMONIALS } from "@/data/fields";
import { SectionHeader } from "@/components/shared/section-header";

export function Testimonials() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <SectionHeader
          badge="Stories"
          title="Student"
          gradientTitle="Experiences"
          description="How students used CareerScope AI to navigate degree selection and career paths."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-black p-8 flex flex-col justify-between"
            >
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs font-bold text-white/60">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">{t.name}</h4>
                  <div className="text-[11px] text-white/40">
                    {t.field} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
