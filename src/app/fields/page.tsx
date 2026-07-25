import { Suspense } from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { FieldGrid } from "@/components/fields/field-grid";

export const metadata = {
  title: "Explore Fields — CareerScope AI",
  description: "Browse 12+ career fields across Technology, Engineering, and Aviation.",
};

export default function ExploreFieldsPage() {
  return (
    <div className="py-12 pt-24 max-w-6xl mx-auto px-6 space-y-10">
      <SectionHeader
        badge="Directory"
        title="Explore"
        gradientTitle="Career Fields"
        description="In-depth career intelligence across Technology, Engineering, and Aviation."
      />

      <Suspense fallback={
        <div className="flex items-center justify-center py-20 text-white/30 text-xs tracking-widest uppercase">
          Loading...
        </div>
      }>
        <FieldGrid />
      </Suspense>
    </div>
  );
}
