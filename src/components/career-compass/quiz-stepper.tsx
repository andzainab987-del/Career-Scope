"use client";

import { useState } from "react";
import { QuizAnswer } from "@/types";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

interface QuizStepperProps {
  onComplete: (answers: QuizAnswer[]) => void;
}

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What core domain excites you the most?",
    options: [
      "Software, AI Algorithms & Web Infrastructure",
      "Robotics, Electronics, Power & Physical Engineering",
      "Commercial Piloting, Aerodynamics & Aerospace",
      "Multidisciplinary & Open to AI Suggestions",
    ],
  },
  {
    id: 2,
    question: "What is your current academic stage?",
    options: [
      "High School / FSc Pre-Engineering / A-Levels",
      "Undergraduate Student (BS CS / Engineering / Aviation)",
      "Recent Graduate looking for Job/Master's specialization",
      "Self-Taught / Switching Careers from non-tech",
    ],
  },
  {
    id: 3,
    question: "Which skill comes most naturally to you?",
    options: [
      "Logical problem solving, coding & math reasoning",
      "Tinkering with physical machinery, circuits & designs",
      "High-focus decision making, spatial navigation & leadership",
      "Data analysis, research & visual design",
    ],
  },
  {
    id: 4,
    question: "What is your primary career outcome priority?",
    options: [
      "Maximizing remote USD/Euro income potential",
      "Building long-lasting physical infrastructure & machinery",
      "Flying international airliners & global travel",
      "Strong local corporate career growth & leadership",
    ],
  },
  {
    id: 5,
    question: "What work environment do you thrive in?",
    options: [
      "Flexible, laptop-based remote/hybrid work setup",
      "On-site plant, laboratory, or construction site",
      "Cockpit, flight simulator, or airspace control tower",
      "Balanced office + team collaboration",
    ],
  },
];

export function QuizStepper({ onComplete }: QuizStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelectOption = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const formattedAnswers: QuizAnswer[] = QUIZ_QUESTIONS.map((q, idx) => ({
        question: q.question,
        answer: answers[idx] || "Not specified",
      }));
      onComplete(formattedAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const q = QUIZ_QUESTIONS[currentStep];
  const progressPercent = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;
  const isSelected = !!answers[currentStep];

  return (
    <div className="border border-white/10 p-6 sm:p-10 max-w-2xl mx-auto bg-black">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between text-xs text-white/40">
          <span className="tracking-widest uppercase text-white/60">Assessment</span>
          <span>{currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
        </div>
        <div className="w-full h-px bg-white/10 relative">
          <div
            className="h-px bg-white/60 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
          {q.question}
        </h3>

        <div className="space-y-2">
          {q.options.map((option) => {
            const selected = answers[currentStep] === option;
            return (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                className={`w-full text-left p-4 border text-sm transition-all flex items-center justify-between ${
                  selected
                    ? "border-white/40 text-white bg-white/5"
                    : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
                }`}
              >
                <span>{option}</span>
                {selected && <Check className="w-4 h-4 text-white shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="text-xs tracking-widest uppercase text-white/40 hover:text-white disabled:opacity-20 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isSelected}
            className="text-xs tracking-widest uppercase text-white border border-white/20 px-5 py-2.5 hover:bg-white/5 disabled:opacity-20 flex items-center gap-2 transition-colors"
          >
            {currentStep === QUIZ_QUESTIONS.length - 1 ? "Generate Results" : "Next"}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
