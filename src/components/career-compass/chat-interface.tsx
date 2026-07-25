"use client";

import { useState } from "react";
import { ChatMessage as ChatMessageType, QuizAnswer } from "@/types";
import { QuizStepper } from "./quiz-stepper";
import { ChatMessage } from "./chat-message";
import { Textarea } from "@/components/ui/textarea";
import { Send, RefreshCw, ArrowRight } from "lucide-react";
import { useLocalStorage } from "@/hooks/use-local-storage";

export function ChatInterface() {
  const [activeTab, setActiveTab] = useState<"quiz" | "chat">("quiz");
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: `Welcome to CareerScope AI.\n\nI'm your career counselor. Take the 5-step quiz for personalized recommendations, or ask me directly about any career path in technology, engineering, or aviation.\n\nHow can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [savedProfile, setSavedProfile] = useLocalStorage<any>("careerscope_profile", null);

  const suggestedPrompts = [
    "How do I become an ML Engineer from NUST?",
    "Commercial pilot license requirements?",
    "Software vs Electrical Engineering salary?",
    "Best cloud certifications for remote USD jobs?",
  ];

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputMessage;
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessageType = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInputMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await response.json();
      if (data.response) {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            role: "assistant",
            content: data.response,
            timestamp: new Date(),
          },
        ]);
      } else {
        throw new Error(data.error || "Failed");
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: "Connection issue. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuizComplete = async (quizAnswers: QuizAnswer[]) => {
    setActiveTab("chat");
    setLoading(true);

    const userSummaryMsg: ChatMessageType = {
      id: `quiz-user-${Date.now()}`,
      role: "user",
      content: `I completed the Career Compass Quiz:\n${quizAnswers
        .map((a) => `• ${a.question}: ${a.answer}`)
        .join("\n")}`,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userSummaryMsg]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages, quizAnswers }),
      });

      const data = await response.json();
      if (data.response) {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-quiz-${Date.now()}`,
            role: "assistant",
            content: data.response,
            timestamp: new Date(),
          },
        ]);
        setSavedProfile({
          quizAnswers,
          recommendations: data.response,
          lastUpdated: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Tab Switcher */}
      <div className="flex items-center justify-center gap-0 border border-white/10 max-w-sm mx-auto">
        <button
          onClick={() => setActiveTab("quiz")}
          className={`flex-1 py-3 text-xs tracking-widest uppercase transition-colors ${
            activeTab === "quiz" ? "bg-white/5 text-white" : "text-white/40 hover:text-white/60"
          }`}
        >
          Quiz
        </button>
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex-1 py-3 text-xs tracking-widest uppercase border-l border-white/10 transition-colors ${
            activeTab === "chat" ? "bg-white/5 text-white" : "text-white/40 hover:text-white/60"
          }`}
        >
          Chat ({messages.length})
        </button>
      </div>

      {/* Quiz */}
      {activeTab === "quiz" && <QuizStepper onComplete={handleQuizComplete} />}

      {/* Chat */}
      {activeTab === "chat" && (
        <div className="border border-white/10 max-w-4xl mx-auto flex flex-col h-[700px] bg-black">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-white flex items-center gap-2">
                Career Compass
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </h3>
              <p className="text-[11px] text-white/30">Powered by Groq Llama 3.3 70B</p>
            </div>
            <button
              onClick={() => setMessages(messages.slice(0, 1))}
              className="text-white/30 hover:text-white/60 text-xs flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Clear
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-2">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {loading && (
              <div className="text-white/30 text-xs py-3 px-4 border border-white/10 w-fit">
                Analyzing...
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className="px-4 py-2 border-t border-white/10 overflow-x-auto flex items-center gap-2 text-xs">
            <span className="text-white/30 shrink-0">Try:</span>
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="shrink-0 px-3 py-1 border border-white/10 text-white/40 hover:text-white/60 hover:border-white/20 text-xs transition-colors whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 flex gap-2 items-center">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask about careers, salaries, universities..."
              className="min-h-[44px] max-h-[120px] bg-transparent border-white/10 text-white placeholder:text-white/30 resize-none text-sm focus:border-white/30"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={loading || !inputMessage.trim()}
              className="border border-white/20 text-white p-3 hover:bg-white/5 disabled:opacity-20 transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
