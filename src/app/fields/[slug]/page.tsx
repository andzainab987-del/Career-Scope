import { notFound } from "next/navigation";
import Link from "next/link";
import { CAREER_FIELDS } from "@/data/fields";
import { FieldCard } from "@/components/fields/field-card";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return CAREER_FIELDS.map((field) => ({
    slug: field.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const field = CAREER_FIELDS.find((f) => f.slug === slug);
  if (!field) return { title: "Field Not Found — CareerScope AI" };
  return {
    title: `${field.name} — CareerScope AI`,
    description: field.shortDesc,
  };
}

export default async function FieldDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const field = CAREER_FIELDS.find((f) => f.slug === slug);

  if (!field) {
    notFound();
  }

  const related = CAREER_FIELDS.filter((f) => field.relatedFields.includes(f.slug));

  const mappedTimeline = field.timeline?.map((entry) => ({
    id: entry.id,
    title: entry.title,
    date: entry.date,
    content: entry.content,
    category: entry.category,
    icon: entry.icon, // Pass string identifier to avoid Server-Client function serialization error
    relatedIds: entry.relatedIds,
    status: entry.status,
    energy: entry.energy,
  }));

  return (
    <div className="py-12 pt-24 max-w-6xl mx-auto px-6 space-y-12">
      <div>
        <Link
          href="/fields"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to directory
        </Link>
      </div>

      {/* Field Hero */}
      <div className="border border-white/10 p-8 sm:p-12 bg-black space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/40">
          <span className="tracking-widest uppercase text-white/60">{field.category}</span>
          <span>·</span>
          <span className="font-mono text-[11px]">{field.slug}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
          {field.name}
        </h1>

        <p className="text-white/50 text-base max-w-3xl leading-relaxed">
          {field.longExplanation}
        </p>

        <div className="pt-2">
          <Link
            href={`/career-compass?field=${field.slug}`}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
          >
            Ask AI about {field.name}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Key Skills */}
          <div className="border border-white/10 p-6 space-y-4 bg-black">
            <h3 className="text-xs tracking-widest uppercase text-white/60 font-bold">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {field.keySkills.map((skill) => (
                <span key={skill} className="px-3 py-1 border border-white/10 text-white/60 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Top Careers */}
          <div className="border border-white/10 p-6 space-y-4 bg-black">
            <h3 className="text-xs tracking-widest uppercase text-white/60 font-bold">
              Career Roles in {field.name}
            </h3>
            <div className="space-y-0">
              {field.topCareers.map((career) => (
                <div key={career.title} className="p-4 border border-white/10 flex items-center justify-between gap-4 -mt-px">
                  <div>
                    <h4 className="text-white font-medium text-sm">{career.title}</h4>
                    <p className="text-xs text-white/40 mt-0.5">{career.description}</p>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 border border-white/20 text-white/60 shrink-0">
                    {career.demandLevel} Demand
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          {mappedTimeline?.length ? (
            <div className="border border-white/10 p-6 space-y-6 bg-black">
              <h3 className="text-xs tracking-widest uppercase text-white/60 font-bold">
                Career Journey Timeline
              </h3>
              <RadialOrbitalTimeline timelineData={mappedTimeline} />
            </div>
          ) : null}

          {/* Education */}
          <div className="border border-white/10 p-6 space-y-4 bg-black">
            <h3 className="text-xs tracking-widest uppercase text-white/60 font-bold">
              Educational Pathways
            </h3>
            <div className="space-y-3">
              {field.educationPaths.map((edu) => (
                <div key={edu.level} className="p-4 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-medium">{edu.level}</span>
                    <span className="text-white/40">{edu.duration}</span>
                  </div>
                  <p className="text-xs text-white/50">{edu.description}</p>
                  {edu.institutions && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.institutions.map((inst) => (
                        <span key={inst} className="text-[10px] px-2 py-0.5 border border-white/10 text-white/40">
                          {inst}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="border border-white/10 p-6 space-y-4 bg-black">
            <h3 className="text-xs tracking-widest uppercase text-white/60 font-bold border-b border-white/10 pb-3">
              Salary Benchmarks
            </h3>
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <span className="text-white/40 text-[10px] tracking-widest uppercase block">Local (PKR / INR)</span>
                <div className="p-3 border border-white/10 space-y-1">
                  <div className="flex justify-between text-white/50"><span>Entry:</span> <span className="text-white">{field.salaryRange.local.entry}</span></div>
                  <div className="flex justify-between text-white/50"><span>Mid:</span> <span className="text-white">{field.salaryRange.local.mid}</span></div>
                  <div className="flex justify-between text-white/50"><span>Senior:</span> <span className="text-white">{field.salaryRange.local.senior}</span></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-white/40 text-[10px] tracking-widest uppercase block">International Remote (USD)</span>
                <div className="p-3 border border-white/10 space-y-1">
                  <div className="flex justify-between text-white/50"><span>Entry:</span> <span className="text-white">{field.salaryRange.international.entry}</span></div>
                  <div className="flex justify-between text-white/50"><span>Mid:</span> <span className="text-white">{field.salaryRange.international.mid}</span></div>
                  <div className="flex justify-between text-white/50"><span>Senior:</span> <span className="text-white">{field.salaryRange.international.senior}</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 p-6 space-y-3 bg-black text-xs">
            <h3 className="text-xs tracking-widest uppercase text-white/60 font-bold border-b border-white/10 pb-3">
              Outlook & AI Risk
            </h3>
            <div className="flex justify-between text-white/50">
              <span>Growth:</span>
              <span className="text-white font-medium">{field.futureOutlook.growth}</span>
            </div>
            <div className="flex justify-between text-white/50">
              <span>AI Risk:</span>
              <span className="text-white font-medium">{field.futureOutlook.automationRisk}</span>
            </div>
            <p className="text-white/40 leading-relaxed pt-2 border-t border-white/10">
              {field.futureOutlook.description}
            </p>
          </div>
        </div>
      </div>

      {/* Related Fields */}
      {related.length > 0 && (
        <div className="pt-12 border-t border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">Related Fields</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {related.map((relField) => (
              <FieldCard key={relField.slug} field={relField} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
