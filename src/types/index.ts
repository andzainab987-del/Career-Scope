export interface SalaryRange {
  entry: string;
  mid: string;
  senior: string;
  currency: string;
}

export interface Career {
  title: string;
  description: string;
  demandLevel: 'High' | 'Medium' | 'Low';
}

export interface EducationPath {
  level: string;
  duration: string;
  description: string;
  institutions?: string[];
}

export interface FutureOutlook {
  growth: 'Excellent' | 'Good' | 'Moderate' | 'Declining';
  description: string;
  emergingRoles: string[];
  automationRisk: 'Low' | 'Medium' | 'High';
}

export type TimelineIconName =
  | 'Calendar'
  | 'Code'
  | 'FileText'
  | 'User'
  | 'Clock'
  | 'Brain'
  | 'ShieldAlert'
  | 'Server'
  | 'Zap'
  | 'Cpu';

export interface TimelineEntry {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: TimelineIconName;
  relatedIds: number[];
  status: 'completed' | 'in-progress' | 'pending';
  energy: number;
}

export type FieldCategory = 'Technology' | 'Engineering' | 'Aviation';

export interface CareerField {
  slug: string;
  name: string;
  category: FieldCategory;
  icon: string;
  color: string; // gradient class identifier
  shortDesc: string;
  longExplanation: string;
  keySkills: string[];
  topCareers: Career[];
  salaryRange: {
    local: SalaryRange;
    international: SalaryRange;
  };
  pros: string[];
  cons: string[];
  educationPaths: EducationPath[];
  futureOutlook: FutureOutlook;
  relatedFields: string[];
  timeline?: TimelineEntry[];
}

export interface QuizAnswer {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface SavedProfile {
  name?: string;
  quizAnswers?: QuizAnswer[];
  recommendations?: string;
  savedFields: string[];
  lastUpdated: string;
}

export interface Testimonial {
  name: string;
  field: string;
  avatar: string;
  quote: string;
  location: string;
}
