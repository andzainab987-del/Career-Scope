"use client";

import Link from "next/link";
import { CareerField } from "@/types";
import { Bookmark, ArrowUpRight, Code, Brain, ShieldAlert, Server, Zap, Cog, Building2, HeartPulse, Plane, Rocket, Radio, ShieldCheck } from "lucide-react";
import { useLocalStorage } from "@/hooks/use-local-storage";

const ICON_MAP: Record<string, any> = {
  Code, Brain, ShieldAlert, Server, Zap, Cog, Building2, HeartPulse, Plane, Rocket, Radio, ShieldCheck,
};

export function FieldCard({ field }: { field: CareerField }) {
  const [savedFields, setSavedFields] = useLocalStorage<string[]>("careerscope_saved", []);
  const isSaved = savedFields.includes(field.slug);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSaved) {
      setSavedFields(savedFields.filter((s) => s !== field.slug));
    } else {
      setSavedFields([...savedFields, field.slug]);
    }
  };

  const IconComponent = ICON_MAP[field.icon] || Code;

  return (
    <Link href={`/fields/${field.slug}`} className="block h-full group">
      <div className="h-full border border-white/10 p-6 flex flex-col justify-between bg-black hover:bg-white/[0.02] transition-colors">
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                <IconComponent className="w-4 h-4 text-white/60" />
              </div>
              <span className="text-[10px] tracking-widest uppercase text-white/40 font-medium">
                {field.category}
              </span>
            </div>

            <button
              onClick={toggleSave}
              className={`p-1.5 transition-colors ${
                isSaved ? "text-white" : "text-white/20 hover:text-white/50"
              }`}
              title={isSaved ? "Unsave" : "Save"}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? "fill-white" : ""}`} />
            </button>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between group-hover:text-white/90">
            <span>{field.name}</span>
            <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
            {field.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {field.keySkills.slice(0, 3).map((skill) => (
              <span key={skill} className="text-[10px] px-2 py-0.5 border border-white/10 text-white/50">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <div>
            <span className="text-white/30 block text-[10px] tracking-widest uppercase">Local</span>
            <span className="text-white/70">{field.salaryRange.local.entry}</span>
          </div>
          <div className="text-right">
            <span className="text-white/30 block text-[10px] tracking-widest uppercase">Remote</span>
            <span className="text-white/70">{field.salaryRange.international.entry}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
