"use client";

import { useMemo } from "react";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { SectionHeader } from "@/components/shared/section-header";
import { CAREER_FIELDS } from "@/data/fields";
import { Code, Brain, Shield, Server, Zap, Cpu, Compass, Activity, Plane, Rocket, Radio, Building2 } from "lucide-react";

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

export function CareerOrbitalMap() {
  const orbitalData: TimelineItem[] = useMemo(() => {
    return CAREER_FIELDS.map((field, idx) => {
      const icon = ICON_MAPPING[field.slug] || Code;
      
      // Determine related field IDs based on relatedFields slugs
      const relatedIds = field.relatedFields
        .map((relSlug) => {
          const found = CAREER_FIELDS.findIndex((f) => f.slug === relSlug);
          return found !== -1 ? found + 1 : null;
        })
        .filter((id): id is number => id !== null);

      // Energy metric from 75% to 98% based on market demand
      const energy = 98 - (idx * 2);

      return {
        id: idx + 1,
        title: field.name,
        date: field.category,
        content: field.shortDesc,
        category: field.category,
        icon: icon,
        relatedIds: relatedIds,
        status: idx < 4 ? "completed" : idx < 8 ? "in-progress" : "pending",
        energy: Math.max(energy, 65),
      };
    });
  }, []);

  return (
    <div className="space-y-8 py-10">
      <SectionHeader
        badge="INTERACTIVE ORBITAL MAP"
        title="Explore High-Demand"
        gradientTitle="Career Orbitals"
        description="Click any orbital node to expand real-time market energy, career scope, and connected pathways."
      />

      <div className="max-w-5xl mx-auto">
        <RadialOrbitalTimeline timelineData={orbitalData} />
      </div>
    </div>
  );
}
