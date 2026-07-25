"use client";

import { useMemo } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/section-header";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { CAREER_FIELDS } from "@/data/fields";
import { ArrowRight, Code, Brain, Shield, Server, Zap, Cpu, Compass, Activity, Plane, Rocket, Radio, Building2 } from "lucide-react";

const ICON_MAPPING: Record<string, any> = {
  "software-engineering": Code,
  "data-science-ai": Brain,
  "cybersecurity": Shield,
  "cloud-devops": Server,
  "electrical-engineering": Zap,
  "mechanical-engineering": Cpu,
  "civil-engineering": Building2,
  "biomedical-engineering": Activity,
  "commercial-pilot": Plane,
  "aerospace-engineering": Rocket,
  "air-traffic-control": Radio,
  "aviation-management": Compass,
};

export function OrbitalFieldShowcase() {
  const orbitalData: TimelineItem[] = useMemo(() => {
    return CAREER_FIELDS.map((field, idx) => {
      const icon = ICON_MAPPING[field.slug] || Code;
      const relatedIds = field.relatedFields
        .map((relSlug) => {
          const found = CAREER_FIELDS.findIndex((f) => f.slug === relSlug);
          return found !== -1 ? found + 1 : null;
        })
        .filter((id): id is number => id !== null);

      return {
        id: idx + 1,
        title: field.name,
        date: field.category,
        content: field.shortDesc,
        category: field.category,
        icon: icon,
        relatedIds: relatedIds,
        status: idx < 4 ? "completed" : idx < 8 ? "in-progress" : "pending",
        energy: Math.max(98 - idx * 2, 65),
      };
    });
  }, []);

  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <SectionHeader
          badge="Interactive"
          title="Career Fields"
          gradientTitle="In Orbit"
          description="Click any node to expand career details and connected pathways."
        />

        <div className="max-w-4xl mx-auto">
          <RadialOrbitalTimeline timelineData={orbitalData} />
        </div>

        <div className="text-center">
          <Link
            href="/fields"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors border-b border-white/20 pb-1"
          >
            Explore detailed profiles
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
