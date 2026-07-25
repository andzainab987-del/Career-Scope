"use client";

import { ChatMessage as ChatMessageType } from "@/types";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function ChatMessage({ message }: { message: ChatMessageType }) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"} mb-6`}>
      {!isUser && (
        <div className="w-7 h-7 border border-white/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-white/60">
          AI
        </div>
      )}

      <div className={`max-w-[85%] sm:max-w-[78%] p-4 sm:p-5 ${
        isUser
          ? "bg-white/5 border border-white/20 text-white"
          : "border border-white/10 text-white/80"
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between gap-4 text-[11px] text-white/40 mb-3 pb-2 border-b border-white/10">
          <span className="tracking-widest uppercase font-medium">
            {isUser ? "You" : "CareerScope AI"}
          </span>
          {!isUser && (
            <button
              onClick={handleCopy}
              className="text-white/30 hover:text-white/60 flex items-center gap-1 transition-colors"
            >
              {copied ? (
                <><Check className="w-3 h-3" /><span>Copied</span></>
              ) : (
                <><Copy className="w-3 h-3" /><span>Copy</span></>
              )}
            </button>
          )}
        </div>

        {/* Body */}
        <div className="text-sm leading-relaxed space-y-2">
          {message.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("### ") || paragraph.startsWith("#### ")) {
              return (
                <h4 key={idx} className="text-sm font-bold text-white mt-3 mb-1">
                  {paragraph.replace(/^#{3,4}\s+/, "")}
                </h4>
              );
            }
            if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
              return (
                <ul key={idx} className="list-disc list-inside space-y-1 my-1 pl-1 text-white/60">
                  {paragraph.split("\n").map((line, lIdx) => (
                    <li key={lIdx}>{line.replace(/^[-*]\s+/, "")}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx} className="text-white/60">{paragraph}</p>;
          })}
        </div>
      </div>

      {isUser && (
        <div className="w-7 h-7 border border-white/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-white/60">
          U
        </div>
      )}
    </div>
  );
}
