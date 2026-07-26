# 🚀 CareerScope AI — Next-Gen AI Career Intelligence Platform

> **Live Application**: [https://career-scope-phi.vercel.app](https://career-scope-phi.vercel.app)  
> **GitHub Repository**: [https://github.com/andzainab987-del/Career-Scope.git](https://github.com/andzainab987-del/Career-Scope.git)

---

## 📌 Problem Statement & Target Audience

### The Real Problem
Students and early-career professionals in emerging markets (particularly South Asia, e.g., Pakistan, India, Bangladesh) face severe **information asymmetry** when choosing career paths in Technology, Engineering, and Aviation:
1. **Unrealistic & Vague Salary Information**: Most online career portals quote generic Western salaries that do not reflect local realities (PKR/INR) vs global remote USD roles.
2. **Lack of Practical Roadmaps**: Standard university prospectuses fail to provide actionable skill-gap roadmaps, open-source portfolio milestones, or realistic accreditation requirements (PEC, ICAO, OSCP, AWS).
3. **AI Disruption Anxiety**: Students struggle to identify which engineering and aviation roles are resilient against AI automation versus those at risk.

### The Solution
**CareerScope AI** is a complete, end-to-end, AI-powered career intelligence platform built to bridge this gap. It combines high-performance 3D visualization, interactive orbital career timelines, precise dual-tier salary benchmarking, and customized AI counseling powered by **Groq LLM (`llama-3.3-70b-versatile`)**.

---

## 🔗 Live Deployment & Repository

- **Live URL**: [https://career-scope-phi.vercel.app](https://career-scope-phi.vercel.app)
- **Public GitHub Repo**: [https://github.com/andzainab987-del/Career-Scope.git](https://github.com/andzainab987-del/Career-Scope.git)

---

## ✨ Features & Capability Overview

### 1. 🌌 21st.dev Interactive Radial Orbital Timeline
- Custom 360-degree rotating orbital map visualizing career progression from entry-level positions to senior leadership.
- Dynamic popovers with smart vertical positioning to prevent clipping.
- Interactive node connections showing related career transition pathways.

### 2. ⚡ 3D WebGPU Futuristic Hero Experience
- Hyper-minimalist 2026-style interface powered by Three.js WebGPU shaders and bloom post-processing.
- Real-time ray-marched mesh distortion responding to cursor movement and scroll position.

### 3. 🎯 12+ Specialized Career Directories
Comprehensive field intelligence across three core sectors:
- **Technology**: Software Engineering, Data Science & AI, Cybersecurity & Defense, Cloud & DevOps.
- **Engineering**: Electrical & Microelectronics, Mechanical & Robotics, Civil & Infrastructure, Biomedical Engineering.
- **Aviation**: Commercial Aviation & Piloting, Aerospace & Avionics, Air Traffic Control, Airport Operations & Management.

### 4. 💰 Dual Salary Benchmarking (Local vs International Remote)
- Compares local monthly salaries (PKR/INR) with international remote annual packages (USD) across Entry, Mid, and Senior career stages.

### 5. 🎓 Educational Pathways & Institution Mapping
- Direct guidance on accredited degree programs (FAST, NUST, LUMS, GIKI, UET, IST, Air University, etc.) alongside industry certifications (AWS, OSCP, CKA, PPL/CPL).

### 6. 🤖 Career Compass AI Advisor
- Interactive 3-step quiz analyzing user interests, academic background, and work preferences to stream personalized career recommendations via Groq.

---

## 🧠 AI Integration & System Prompt Architecture

### AI Engine: Groq LLaMA-3.3 70B Versatile
The AI feature is integrated into `/api/chat` using the **Groq SDK** to deliver ultra-fast streaming career counseling tailored for South Asian and global students.

### System Prompt (`src/lib/ai-prompt.ts`)
```typescript
export const SYSTEM_PROMPT = `You are CareerScope AI, an elite career counselor and industry advisor specializing in helping students and early-career professionals (with special context for South Asian students, e.g. Pakistan, India, Bangladesh).

Your mission is to provide ultra-high-quality, empathetic, structured, and realistic guidance on career selection across Technology, Engineering, Aviation, and related multidisciplinary fields.

Guidelines:
1. Warm & Direct Tone: Be supportive, inspiring, yet realistic about academic competition, local salaries, remote opportunities, and global markets.
2. Structured Response: When asked for recommendations or analyzing quiz input, present your response clearly using formatted Markdown with key headings:
   - 🌟 Top Recommended Fields (Match % + Core Reasoning)
   - 💡 Why It Fits Your Profile
   - ⚠️ Key Challenges & Skill Gaps to Address
   - 🚀 Actionable Roadmap (Education, Certifications & Hands-on Projects)
   - 💰 Market Outlook & Salary Potential (Local vs Remote/International)
3. Be specific: Reference actual universities (like FAST, NUST, LUMS, GIKI, UET, IST, Air University, etc.), certifications (AWS, OSCP, CKA, PMP, PPL/CPL), technologies, and realistic salary bands.
4. Encourage growth: Always emphasize that skill mastery and practical project portfolios outweigh simple degree titles.

Answer directly, professionally, and concisely without generic filler.`;
```

---

## 🛠️ Tech Stack & Services Used

| Component | Technology / Service |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router & Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS & Custom CSS Design Tokens |
| **3D Engine** | Three.js, React Three Fiber & Three WebGPU |
| **Icons** | Lucide React |
| **AI LLM** | Groq API (`llama-3.3-70b-versatile`) |
| **Hosting** | Vercel |
| **Version Control** | Git & GitHub |

---

## 📸 Screenshots & Visual Walkthrough

### 1. 3D WebGPU Hero Section (`DISCOVER YOUR FUTURE`)
![Hero Section Screenshot](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200)
*Interactive 3D WebGPU mesh with monochrome high-contrast typography.*

### 2. 21st.dev Radial Orbital Timeline
![Radial Orbital Timeline Screenshot](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200)
*Rotating orbital career trajectory map with smart popover positioning.*

### 3. Career Compass AI Counseling Chat Interface
![AI Career Compass Screenshot](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200)
*Real-time streaming Groq AI career advisor with 3-step quiz flow.*

---

## 💻 Local Setup & Development Instructions

### Prerequisites
- Node.js 18.x or 20.x
- npm or pnpm

### Step 1: Clone the Repository
```bash
git clone https://github.com/andzainab987-del/Career-Scope.git
cd Career-Scope/career-scope
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env.local` file in the root of `career-scope`:
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
```

### Step 4: Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app!

### Step 5: Test Production Build
```bash
npm run build
npm run start
```

---

## 👤 Author & Project Info

- **Developer**: Zainab
- **GitHub**: [@andzainab987-del](https://github.com/andzainab987-del)
- **License**: MIT
