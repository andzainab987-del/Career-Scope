# 🌌 CareerScope AI — 2026 Premium Career Guidance Platform

**CareerScope AI** is a production-ready, high-performance web application designed to empower students and job seekers across **Technology**, **Engineering**, and **Aviation** to discover, analyze, and map out their future career pathways using artificial intelligence.

---

## 🚀 Key Features

- **21st-Century Gradient Aesthetic**: Dark mode base with deep indigo, electric cyan, and teal glowing radial mesh backgrounds, glassmorphism cards, and interactive hover shifts.
- **12 Comprehensive Career Fields**: In-depth coverage across Software Engineering, AI & Data Science, Cybersecurity, Cloud & DevOps, Electrical Engineering, Mechanical Engineering, Civil Infrastructure, Biomedical Engineering, Commercial Piloting, Aerospace Engineering, Air Traffic Control, and Aviation Management.
- **Career Compass AI Counselor**: Multi-step interactive assessment quiz + real-time conversational chat powered by Groq's high-speed `llama-3.3-70b-versatile` LLM.
- **South Asian & Global Market Benchmarking**: Tailored for FAST, NUST, LUMS, GIKI, UET, and IST graduates, comparing local PKR/INR salary bands with remote USD international packages.
- **Skill Gap Roadmaps**: Detailed breakdown of top universities, industry certifications (AWS, OSCP, CPL/PPL, CKA), pros & cons, and future automation risks.
- **Frictionless Local Storage Profile**: Bookmark favorite fields and persist quiz recommendations without forcing registration.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Server API Routes) |
| **Language** | TypeScript (Strict Typing) |
| **Styling** | Tailwind CSS v4 + custom gradient utility engine |
| **UI Components** | shadcn/ui + Lucide Icons |
| **Animations** | Framer Motion & CSS keyframes |
| **AI Inference** | Groq SDK (`llama-3.3-70b-versatile`) |
| **State & Persistence** | React Custom Hooks & Browser `localStorage` |

---

## 🤖 System Prompt Documentation

The AI system prompt used in `/api/chat/route.ts` is calibrated specifically for career counseling:

```typescript
export const SYSTEM_PROMPT = `You are CareerScope AI, an elite career counselor and industry advisor specializing in helping students and early-career professionals (with special context for South Asian students, e.g. Pakistan, India, Bangladesh).

Your mission is to provide ultra-high-quality, empathetic, structured, and realistic guidance on career selection across Technology, Engineering, Aviation, and related multidisciplinary fields.

Guidelines:
1. Warm & Direct Tone: Be supportive, inspiring, yet realistic about academic competition, local salaries, remote opportunities, and global markets.
2. Structured Response: Present recommendations using formatted Markdown (Top Fields, Why It Fits, Key Challenges & Skill Gaps, Actionable Roadmap, Salary Benchmarks).
3. Be specific: Reference actual universities (FAST, NUST, LUMS, GIKI, UET, IST, Air University), certifications (AWS, OSCP, CKA, PMP, PPL/CPL), and realistic salary bands.`;
```

---

## ⚡ Quick Start & Run Instructions

### Prerequisites
- Node.js 18.x or higher
- npm or pnpm

### 1. Clone & Install Dependencies
```bash
cd career-scope
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
```
*(Get a free Groq key at [console.groq.com](https://console.groq.com))*

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## ➕ How to Add New Career Fields

To add a new career field to the platform:

1. Open `src/data/fields.ts`.
2. Add a new object conforming to the `CareerField` interface:

```typescript
{
  slug: "quantum-computing",
  name: "Quantum Computing & Information",
  category: "Technology",
  icon: "Cpu",
  color: "from-purple-500 via-pink-500 to-cyan-500",
  shortDesc: "Develop quantum algorithms and hardware for next-generation computing.",
  longExplanation: "...",
  keySkills: ["Qiskit", "Quantum Physics", "Linear Algebra", "Python"],
  topCareers: [...],
  salaryRange: {
    local: { entry: "PKR 150K/mo", mid: "PKR 400K/mo", senior: "PKR 900K+/mo", currency: "PKR" },
    international: { entry: "$95K/yr", mid: "$150K/yr", senior: "$250K+/yr", currency: "USD" }
  },
  pros: [...],
  cons: [...],
  educationPaths: [...],
  futureOutlook: {...},
  relatedFields: ["software-engineering", "data-science-ai"]
}
```
3. Save the file. The field will automatically appear in the Explore Directory, Search Filters, dynamic `/fields/[slug]` pages, and AI context!

---

## 📦 Vercel Deployment

This repository is pre-configured for instant zero-config deployment on Vercel:

1. Push code to GitHub.
2. Import project into Vercel dashboard.
3. Add `GROQ_API_KEY` under Environment Variables.
4. Click **Deploy**.
