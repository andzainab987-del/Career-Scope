import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "@/lib/ai-prompt";

export async function POST(req: Request) {
  try {
    const { messages, quizAnswers } = await req.json();

    const geminiKey = process.env.GEMINI_API_KEY;
    const groqKey = process.env.GROQ_API_KEY;

    let fullPrompt = "";
    if (quizAnswers && quizAnswers.length > 0) {
      const formattedAnswers = quizAnswers
        .map((a: { question: string; answer: string }) => `- **${a.question}**: ${a.answer}`)
        .join("\n");
      fullPrompt = `User completed the Career Compass Quiz with responses:\n${formattedAnswers}\n\nPlease analyze these responses thoroughly and recommend 2-4 best matching fields with full career insights.`;
    }

    // 1. Prioritize Gemini API if GEMINI_API_KEY is present
    if (geminiKey && geminiKey.trim() !== "") {
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const lastUserMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : "";
      const promptToPass = fullPrompt ? `${SYSTEM_PROMPT}\n\n${fullPrompt}` : `${SYSTEM_PROMPT}\n\nUser Question: ${lastUserMessage}`;

      const result = await model.generateContent(promptToPass);
      const responseText = result.response.text() || "No response generated.";
      return NextResponse.json({ response: responseText });
    }

    // 2. Secondary option: Groq API if GROQ_API_KEY is present
    if (groqKey && groqKey.trim() !== "") {
      const groq = new Groq({ apiKey: groqKey });

      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...(messages || []).map((m: { role: string; content: string }) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.content
        }))
      ];

      if (fullPrompt) {
        apiMessages.push({ role: "user", content: fullPrompt });
      }

      const completion = await groq.chat.completions.create({
        messages: apiMessages as any,
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1500,
      });

      const responseText = completion.choices[0]?.message?.content || "No response generated.";
      return NextResponse.json({ response: responseText });
    }

    // 3. Dynamic Counselor Fallback if neither API key is set yet
    const lastUserMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : "";
    const responseText = generateSmartFallback(quizAnswers, lastUserMessage);

    return NextResponse.json({ response: responseText });
  } catch (error: any) {
    console.error("Career Compass API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate guidance. Please try again." },
      { status: 500 }
    );
  }
}

function generateSmartFallback(quizAnswers: any[], query: string): string {
  if (quizAnswers && quizAnswers.length > 0) {
    return `### 🌟 Career Compass AI Analysis & Recommendations

Based on your answers, here is your tailored 2026 career blueprint:

#### 1. 🚀 Primary Recommendation: **Data Science & Artificial Intelligence** (94% Match)
- **Why It Fits**: You enjoy analytical problem solving and leverage tech tools to solve complex, high-impact problems.
- **Local Salary Outlook**: PKR 120K - 200K/mo (Entry) ➔ PKR 700K+ /mo (Senior).
- **International / Remote**: $85,000 - $180,000 / year.
- **Top Universities**: NUST, FAST-NU, LUMS, COMSATS.

#### 2. ⚡ Secondary Option: **Cloud Computing & DevOps Infrastructure** (88% Match)
- **Why It Fits**: Excellent choice for candidates interested in building high-scale architecture and system automation.
- **Key Skills to Learn**: Linux Kernel, Docker, Kubernetes, AWS Cloud Architecture, Terraform.

---

### 💡 Recommended Next Steps:
1. **Immediate Project**: Build a Python API that connects a PostgreSQL database to a lightweight ML classification model.
2. **Top Certifications**: AWS Certified Cloud Practitioner or Google Professional Data Engineer.
3. **Core Tip**: Combine deep technical domain expertise with clear project storytelling on GitHub and LinkedIn!

*(Note: Add \`GEMINI_API_KEY\` or \`GROQ_API_KEY\` in \`.env.local\` to activate fully dynamic real-time AI responses!)*`;
  }

  const lower = query.toLowerCase();
  if (lower.includes("pilot") || lower.includes("flying") || lower.includes("plane") || lower.includes("aviation")) {
    return `### ✈️ Aviation & Piloting Career Guidance

Entering **Commercial Aviation** requires a blend of mental agility, spatial orientation, and strict medical readiness.

**Key Career Milestones:**
1. **PPL (Private Pilot License)**: ~40-50 flight hours.
2. **CPL (Commercial Pilot License) + Instrument Rating**: ~200 flight hours.
3. **Type Rating**: Certification on specific airliners (e.g. Airbus A320 or Boeing 737).

**Salary Expectations:**
- **Local Airlines (PIA, Fly Jinnah, Airblue)**: PKR 250,000/mo starting ➔ PKR 2.5M+/mo Senior Captain.
- **Gulf Airlines (Emirates, Qatar Airways, Etihad)**: $10,000 - $22,000 / month tax-free.

What specific questions do you have regarding medical requirements, flying academies, or ground school?`;
  }

  return `### 🧭 Welcome to CareerScope AI!

I am ready to help you analyze career options across **Technology**, **Engineering**, and **Aviation**.

You can:
1. Ask me directly about any field (e.g., *"How do I become an AI Engineer from Pakistan?"* or *"What is the salary of an Electrical Engineer in UAE?"*).
2. Take our **Interactive Career Compass Quiz** above for personalized multi-dimensional matching!

How can I assist your career journey today?`;
}
