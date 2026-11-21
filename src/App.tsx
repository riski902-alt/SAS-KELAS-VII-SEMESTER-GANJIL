/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { ConfettiBurst } from './components/ConfettiBurst';
import { QuizHeader } from './components/QuizHeader';
import { QuizView } from './components/QuizView';
import { ResultScreen } from './components/ResultScreen';
import { StudyWrongView } from './components/StudyWrongView';
import { SummaryView } from './components/SummaryView';
import { WelcomeScreen } from './components/WelcomeScreen';
import { POINTS_PER_CORRECT, QUIZ_QUESTIONS, TOTAL_QUESTIONS } from './data/questions';
import { AnswerRecord, OptionKey, QuizQuestion, QuizScreen } from './types/quiz';

const STORAGE_KEY = 'informatika_fun_sas_v1';

interface SavedQuizState {
  studentName: string;
  answers: Record<number, AnswerRecord>;
  currentIndex: number;
  screen: QuizScreen;
}

function loadSavedState(): SavedQuizState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { studentName: '', answers: {}, currentIndex: 0, screen: 'welcome' };
    }
    const parsed = JSON.parse(raw) as Partial<SavedQuizState>;
    const validAnswers: Record<number, AnswerRecord> = {};
    if (parsed.answers && typeof parsed.answers === 'object') {
      for (const q of QUIZ_QUESTIONS) {
        const rec = parsed.answers[q.id];
        if (rec && (rec.selected === 'A' || rec.selected === 'B' || rec.selected === 'C' || rec.selected === 'D')) {
          validAnswers[q.id] = {
            questionId: q.id,
            selected: rec.selected,
            isCorrect: rec.selected === q.answer,
          };
        }
      }
    }
    const answeredCount = Object.keys(validAnswers).length;
    const safeIndex =
      typeof parsed.currentIndex === 'number' &&
      parsed.currentIndex >= 0 &&
      parsed.currentIndex < TOTAL_QUESTIONS
        ? parsed.currentIndex
        : Math.min(answeredCount, TOTAL_QUESTIONS - 1);

    return {
      studentName: typeof parsed.studentName === 'string' ? parsed.studentName : '',
      answers: validAnswers,
      currentIndex: safeIndex,
      screen: 'welcome',
    };
  } catch {
    return { studentName: '', answers: {}, currentIndex: 0, screen: 'welcome' };
  }
}

export default function App() {
  const [initial] = useState<SavedQuizState>(() => loadSavedState());
  const [studentName, setStudentName] = useState<string>(initial.studentName);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>(initial.answers);
  const [currentIndex, setCurrentIndex] = useState<number>(initial.currentIndex);
  const [screen, setScreen] = useState<QuizScreen>('welcome');

  const [confettiKey, setConfettiKey] = useState(0);
  const [confettiIntensity, setConfettiIntensity] = useState<'light' | 'celebration'>('light');

  // Persist progress automatically so students don't lose work on refresh
  useEffect(() => {
    try {
      const payload: SavedQuizState = {
        studentName,
        answers,
        currentIndex,
        screen,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota errors
    }
  }, [studentName, answers, currentIndex, screen]);

  const { correctCount, wrongCount, answeredCount, points } = useMemo(() => {
    const records = Object.values(answers);
    const correct = records.filter((r) => r.isCorrect).length;
    const totalAnswered = records.length;
    return {
      correctCount: correct,
      wrongCount: totalAnswered - correct,
      answeredCount: totalAnswered,
      points: correct * POINTS_PER_CORRECT,
    };
  }, [answers]);

  // Sequential unlock: student can view any already-answered question + the next unanswered one
  const furthestUnlockedIndex = useMemo(() => {
    return Math.min(answeredCount, TOTAL_QUESTIONS - 1);
  }, [answeredCount]);

  const isCompleted = answeredCount === TOTAL_QUESTIONS;

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleStartNew = useCallback(
    (name: string) => {
      setStudentName(name);
      setAnswers({});
      setCurrentIndex(0);
      setScreen('quiz');
      setConfettiKey(0);
      scrollToTop();
    },
    [scrollToTop]
  );

  const handleResume = useCallback(
    (name: string) => {
      if (name) setStudentName(name);
      setCurrentIndex(furthestUnlockedIndex);
      setScreen('quiz');
      scrollToTop();
    },
    [furthestUnlockedIndex, scrollToTop]
  );

  const handleSelectAnswer = useCallback(
    (question: QuizQuestion, selected: OptionKey) => {
      setAnswers((prev) => {
        // Strict guard: never overwrite or double-score an already answered question
        if (prev[question.id]) return prev;

        const isCorrect = selected === question.answer;
        const nextAnswers: Record<number, AnswerRecord> = {
          ...prev,
          [question.id]: {
            questionId: question.id,
            selected,
            isCorrect,
          },
        };

        const nextAnsweredCount = Object.keys(nextAnswers).length;
        const isMilestone =
          nextAnsweredCount === 10 ||
          nextAnsweredCount === 25 ||
          nextAnsweredCount === 45 ||
          nextAnsweredCount === 70 ||
          nextAnsweredCount === 90;

        if (isMilestone) {
          setConfettiIntensity('celebration');
          setConfettiKey((k) => k + 1);
        } else if (isCorrect) {
          setConfettiIntensity('light');
          setConfettiKey((k) => k + 1);
        }

        return nextAnswers;
      });
    },
    []
  );

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, TOTAL_QUESTIONS - 1));
    scrollToTop();
  }, [scrollToTop]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    scrollToTop();
  }, [scrollToTop]);

  const handleJumpToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index <= furthestUnlockedIndex) {
        setCurrentIndex(index);
        scrollToTop();
      }
    },
    [furthestUnlockedIndex, scrollToTop]
  );

  const handleFinishQuiz = useCallback(() => {
    if (answeredCount < TOTAL_QUESTIONS) return;
    setScreen('result');
    setConfettiIntensity('celebration');
    setConfettiKey((k) => k + 1);
    scrollToTop();
  }, [answeredCount, scrollToTop]);

  const handleRestartFromResult = useCallback(() => {
    setAnswers({});
    setCurrentIndex(0);
    setScreen('quiz');
    setConfettiKey(0);
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col">
      <ConfettiBurst triggerKey={confettiKey} intensity={confettiIntensity} />

      <QuizHeader
        points={points}
        correctCount={correctCount}
        wrongCount={wrongCount}
        currentQuestionNumber={currentIndex + 1}
        studentName={studentName}
        showScoreboard={screen !== 'welcome'}
        onLogoClick={() => {
          setScreen('welcome');
          scrollToTop();
        }}
      />

      <div className="flex-1">
        {screen === 'welcome' && (
          <WelcomeScreen
            initialName={studentName}
            savedAnsweredCount={answeredCount}
            savedPoints={points}
            isCompleted={isCompleted}
            onStartNew={handleStartNew}
            onResume={handleResume}
            onViewLastResult={() => {
              setScreen('result');
              scrollToTop();
            }}
          />
        )}

        {screen === 'quiz' && (
          <QuizView
            currentIndex={currentIndex}
            answers={answers}
            furthestUnlockedIndex={furthestUnlockedIndex}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNext}
            onPrev={handlePrev}
            onJumpToIndex={handleJumpToIndex}
            onFinishQuiz={handleFinishQuiz}
          />
        )}

        {screen === 'result' && (
          <ResultScreen
            studentName={studentName}
            correctCount={correctCount}
            wrongCount={wrongCount}
            points={points}
            onRestart={handleRestartFromResult}
            onOpenSummary={() => {
              setScreen('summary');
              scrollToTop();
            }}
            onOpenStudy={() => {
              setScreen('study');
              scrollToTop();
            }}
          />
        )}

        {screen === 'summary' && (
          <SummaryView
            answers={answers}
            onBackToResult={() => {
              setScreen('result');
              scrollToTop();
            }}
            onOpenStudy={() => {
              setScreen('study');
              scrollToTop();
            }}
          />
        )}

        {screen === 'study' && (
          <StudyWrongView
            answers={answers}
            onBackToResult={() => {
              setScreen('result');
              scrollToTop();
            }}
            onRestartQuiz={handleRestartFromResult}
          />
        )}
      </div>

      <footer className="border-t border-slate-200 bg-white/70 py-4 px-4 text-center text-xs text-slate-500">
        Informatika Fun · Latihan Mandiri Sumatif Akhir Semester (SAS) SMP Kelas VII
      </footer>
    </div>
  );
}
