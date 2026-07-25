"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CAREER_FIELDS } from "@/data/fields";
import { FieldCard } from "./field-card";
import { Input } from "@/components/ui/input";
import { Search, Bookmark, LayoutGrid, Orbit } from "lucide-react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";
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

export function FieldGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSavedOnly = searchParams.get("saved") === "true";

  const [viewLayout, setViewLayout] = useState<"grid" | "orbital">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [savedOnly, setSavedOnly] = useState<boolean>(initialSavedOnly);
  const [savedFields] = useLocalStorage<string[]>("careerscope_saved", []);

  const categories = ["All", "Technology", "Engineering", "Aviation"];

  const filteredFields = useMemo(() => {
    return CAREER_FIELDS.filter((field) => {
      const matchesSearch =
        field.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        field.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        field.keySkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || field.category === selectedCategory;
      const matchesSaved = !savedOnly || savedFields.includes(field.slug);
      return matchesSearch && matchesCategory && matchesSaved;
    });
  }, [searchQuery, selectedCategory, savedOnly, savedFields]);

  const orbitalData: TimelineItem[] = useMemo(() => {
    return filteredFields.map((field, idx) => ({
      id: idx + 1,
      title: field.name,
      date: field.category,
      content: field.shortDesc,
      category: field.category,
      icon: ICON_MAPPING[field.slug] || Code,
      relatedIds: field.relatedFields
        .map((relSlug) => {
          const found = filteredFields.findIndex((f) => f.slug === relSlug);
          return found !== -1 ? found + 1 : null;
        })
        .filter((id): id is number => id !== null),
      status: idx < 3 ? "completed" : idx < 7 ? "in-progress" : "pending",
      energy: Math.max(98 - idx * 3, 60),
    }));
  }, [filteredFields]);

  return (
    <div className="space-y-8">
      {/* Toolbar */}
      <div className="border border-white/10 p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-black">
        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-transparent border-white/10 text-white placeholder:text-white/30 text-sm focus:border-white/30"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* View Toggle */}
          <div className="flex border border-white/10">
            <button
              onClick={() => setViewLayout("grid")}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors ${
                viewLayout === "grid" ? "bg-white/5 text-white" : "text-white/40"
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              Grid
            </button>
            <button
              onClick={() => setViewLayout("orbital")}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase flex items-center gap-1.5 border-l border-white/10 transition-colors ${
                viewLayout === "orbital" ? "bg-white/5 text-white" : "text-white/40"
              }`}
            >
              <Orbit className="w-3 h-3" />
              Orbital
            </button>
          </div>

          <div className="h-5 w-px bg-white/10 hidden sm:block"></div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors ${
                selectedCategory === cat
                  ? "border border-white/30 text-white bg-white/5"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}

          <button
            onClick={() => setSavedOnly(!savedOnly)}
            className={`px-3 py-1.5 text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors ${
              savedOnly ? "border border-white/30 text-white bg-white/5" : "text-white/40"
            }`}
          >
            <Bookmark className={`w-3 h-3 ${savedOnly ? "fill-white" : ""}`} />
            Saved ({savedFields.length})
          </button>
        </div>
      </div>

      {/* Content */}
      {filteredFields.length > 0 ? (
        viewLayout === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {filteredFields.map((field) => (
              <FieldCard key={field.slug} field={field} />
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <RadialOrbitalTimeline timelineData={orbitalData} />
          </div>
        )
      ) : (
        <div className="border border-white/10 p-12 text-center max-w-md mx-auto space-y-4 bg-black">
          <h3 className="text-lg font-bold text-white">No fields found</h3>
          <p className="text-sm text-white/40">Try adjusting your search or filters.</p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSavedOnly(false); }}
            className="text-xs tracking-widest uppercase text-white/40 hover:text-white border-b border-white/20 pb-0.5"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
