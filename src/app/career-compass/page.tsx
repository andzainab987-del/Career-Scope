import { SectionHeader } from "@/components/shared/section-header";
import { ChatInterface } from "@/components/career-compass/chat-interface";

export const metadata = {
  title: "Career Compass — CareerScope AI",
  description: "Chat with CareerScope AI or take our quiz to find your ideal career.",
};

export default function CareerCompassPage() {
  return (
    <div className="py-10 pt-24 max-w-6xl mx-auto px-6 space-y-8">
      <SectionHeader
        badge="AI Intelligence"
        title="Career"
        gradientTitle="Compass"
        description="Complete the quiz or chat directly with our AI counselor."
      />
      <ChatInterface />
    </div>
  );
}
