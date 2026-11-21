export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuizQuestion {
  id: number;
  topic: string;
  question: string;
  options: Record<OptionKey, string>;
  answer: OptionKey;
  explanation: string;
}

export interface AnswerRecord {
  questionId: number;
  selected: OptionKey;
  isCorrect: boolean;
}

export type QuizScreen = 'welcome' | 'quiz' | 'result' | 'summary' | 'study';

export interface PredicateInfo {
  title: string;
  subtitle: string;
  description: string;
  tierColor: 'emerald' | 'blue' | 'amber' | 'slate';
}
