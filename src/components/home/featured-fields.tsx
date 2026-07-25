import Link from "next/link";
import { CAREER_FIELDS } from "@/data/fields";
import { FieldCard } from "@/components/fields/field-card";
import { SectionHeader } from "@/components/shared/section-header";
import { ArrowRight } from "lucide-react";

export function FeaturedFields() {
  const featured = CAREER_FIELDS.slice(0, 6);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <SectionHeader
          badge="Curated"
          title="Featured"
          gradientTitle="Career Fields"
          description="High-growth industries engineered for compensation, remote flexibility, and long-term career growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {featured.map((field) => (
            <FieldCard key={field.slug} field={field} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/fields"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors border-b border-white/20 pb-1"
          >
            View all fields
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
