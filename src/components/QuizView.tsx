import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Grid,
  HelpCircle,
  Lightbulb,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  getMilestoneMessage,
  getMotivationMessage,
  QUIZ_QUESTIONS,
  TOTAL_QUESTIONS,
} from '../data/questions';
import { AnswerRecord, OptionKey, QuizQuestion } from '../types/quiz';
import { QuestionNavigatorModal } from './QuestionNavigatorModal';

interface QuizViewProps {
  currentIndex: number;
  answers: Record<number, AnswerRecord>;
  furthestUnlockedIndex: number;
  onSelectAnswer: (question: QuizQuestion, option: OptionKey) => void;
  onNext: () => void;
  onPrev: () => void;
  onJumpToIndex: (index: number) => void;
  onFinishQuiz: () => void;
}

const OPTION_KEYS: OptionKey[] = ['A', 'B', 'C', 'D'];

function renderQuestionContent(text: string) {
  const lines = text.split('\n');
  const blocks: Array<{ type: 'text'; content: string } | { type: 'table'; rows: string[][] }> = [];

  let tableBuffer: string[][] = [];

  for (const line of lines) {
    if (line.includes(' | ')) {
      tableBuffer.push(line.split(' | ').map((cell) => cell.trim()));
    } else {
      if (tableBuffer.length > 0) {
        blocks.push({ type: 'table', rows: tableBuffer });
        tableBuffer = [];
      }
      blocks.push({ type: 'text', content: line });
    }
  }
  if (tableBuffer.length > 0) {
    blocks.push({ type: 'table', rows: tableBuffer });
  }

  return (
    <div className="space-y-3 text-slate-900 text-base sm:text-lg leading-relaxed">
      {blocks.map((block, idx) => {
        if (block.type === 'table') {
          const [header, ...rows] = block.rows;
          return (
            <div key={idx} className="overflow-x-auto my-3 rounded-xl border border-slate-200 bg-slate-50">
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/80">
                    {header.map((cell, cIdx) => (
                      <th key={cIdx} className="px-4 py-2.5 font-semibold text-slate-800">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-slate-200/70 last:border-b-0 bg-white">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={`px-4 py-2.5 text-slate-700 ${cIdx === 0 ? 'font-mono-num font-semibold w-14 text-center' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={idx} className="font-medium text-slate-900">
            {block.content}
          </p>
        );
      })}
    </div>
  );
}

export function QuizView({
  currentIndex,
  answers,
  furthestUnlockedIndex,
  onSelectAnswer,
  onNext,
  onPrev,
  onJumpToIndex,
  onFinishQuiz,
}: QuizViewProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const question = QUIZ_QUESTIONS[currentIndex];
  const existingAnswer = answers[question.id];
  const answeredCount = Object.keys(answers).length;
  const completionPercent = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);
  const motivationText = getMotivationMessage(question.id);
  const milestoneText = existingAnswer ? getMilestoneMessage(answeredCount) : null;
  const isLastQuestion = currentIndex === TOTAL_QUESTIONS - 1;
  const allCompleted = answeredCount === TOTAL_QUESTIONS;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isNavOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toUpperCase();
      if (!existingAnswer) {
        if (key === 'A' || key === '1') onSelectAnswer(question, 'A');
        else if (key === 'B' || key === '2') onSelectAnswer(question, 'B');
        else if (key === 'C' || key === '3') onSelectAnswer(question, 'C');
        else if (key === 'D' || key === '4') onSelectAnswer(question, 'D');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (isLastQuestion && allCompleted) {
          onFinishQuiz();
        } else if (!isLastQuestion) {
          onNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNavOpen, existingAnswer, question, isLastQuestion, allCompleted, onSelectAnswer, onNext, onFinishQuiz]);

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
      {/* Progress & Motivation Header */}
      <section aria-label="Progres kuis" className="mb-5 sm:mb-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-base sm:text-lg text-slate-900 font-mono-num">
              SOAL {question.id} / {TOTAL_QUESTIONS}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-sm font-medium text-blue-700">{motivationText}</span>
          </div>
          <span className="font-mono-num text-sm font-bold text-slate-700">
            {completionPercent}%
          </span>
        </div>

        <div
          className="w-full h-3 bg-slate-200 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={completionPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Penyelesaian kuis ${completionPercent} persen`}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#10B981] rounded-full"
            initial={false}
            animate={{ width: `${Math.max(completionPercent, 1.5)}%` }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </section>

      {/* Single Question Card */}
      <AnimatePresence mode="wait">
        <motion.article
          key={question.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-8"
        >
          {/* Quiet Unboxed Question Kicker */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-500 mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Soal {question.id} dari {TOTAL_QUESTIONS}</span>
              <span aria-hidden="true">·</span>
              <span>{question.topic}</span>
            </div>
            {existingAnswer && (
              <span className={`font-semibold ${existingAnswer.isCorrect ? 'text-emerald-700' : 'text-amber-700'}`}>
                {existingAnswer.isCorrect ? 'Terjawab Benar (+10 Poin)' : 'Sudah Dipelajari (0 Poin)'}
              </span>
            )}
          </div>

          {/* Question Stem */}
          <div className="mb-6 sm:mb-7">{renderQuestionContent(question.question)}</div>

          {/* Answer Options */}
          <div className="space-y-3" role="radiogroup" aria-label={`Pilihan jawaban soal ${question.id}`}>
            {OPTION_KEYS.map((key) => {
              const optionText = question.options[key];
              const isSelected = existingAnswer?.selected === key;
              const isCorrectOption = question.answer === key;
              const isLocked = Boolean(existingAnswer);

              let containerClass =
                'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 cursor-pointer';
              let badgeClass = 'bg-slate-100 text-slate-700 border-slate-200';
              let statusLabel: string | null = null;

              if (isLocked) {
                if (isCorrectOption) {
                  containerClass =
                    'bg-emerald-50 border-emerald-500 text-emerald-950 cursor-default';
                  badgeClass = 'bg-emerald-600 text-white border-emerald-600';
                  statusLabel = 'Jawaban Benar';
                } else if (isSelected && !isCorrectOption) {
                  containerClass =
                    'bg-amber-50 border-amber-400 text-amber-950 cursor-default';
                  badgeClass = 'bg-amber-500 text-white border-amber-500';
                  statusLabel = 'Pilihanmu';
                } else {
                  containerClass =
                    'bg-slate-50/60 border-slate-200 text-slate-500 opacity-75 cursor-default';
                  badgeClass = 'bg-slate-100 text-slate-400 border-slate-200';
                }
              }

              return (
                <motion.button
                  key={key}
                  type="button"
                  disabled={isLocked}
                  onClick={() => onSelectAnswer(question, key)}
                  whileTap={!isLocked ? { scale: 0.99 } : undefined}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-colors flex items-start gap-3.5 min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${containerClass}`}
                >
                  <span
                    className={`w-8 h-8 rounded-lg border font-mono-num font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 transition-colors ${badgeClass}`}
                  >
                    {key}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm sm:text-base font-medium leading-snug">
                      {optionText}
                    </span>
                    {statusLabel && (
                      <span
                        className={`inline-flex items-center gap-1 mt-1.5 text-xs font-semibold ${
                          isCorrectOption ? 'text-emerald-700' : 'text-amber-700'
                        }`}
                      >
                        {isCorrectOption ? (
                          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                        ) : (
                          <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        )}
                        {statusLabel}
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Immediate Automatic Correction & Explanation */}
          <AnimatePresence>
            {existingAnswer && (
              <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                aria-live="polite"
                className={`mt-6 rounded-2xl border p-5 sm:p-6 ${
                  existingAnswer.isCorrect
                    ? 'bg-emerald-50/90 border-emerald-200'
                    : 'bg-amber-50/80 border-amber-200'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      existingAnswer.isCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 text-white'
                    }`}
                  >
                    {existingAnswer.isCorrect ? (
                      <Sparkles className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <Lightbulb className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3
                        className={`font-display font-bold text-lg ${
                          existingAnswer.isCorrect ? 'text-emerald-900' : 'text-slate-900'
                        }`}
                      >
                        {existingAnswer.isCorrect
                          ? 'Hebat! Jawaban kamu benar!'
                          : 'Belum tepat, yuk pelajari jawabannya!'}
                      </h3>
                      <span
                        className={`font-mono-num text-sm font-bold ${
                          existingAnswer.isCorrect ? 'text-emerald-700' : 'text-slate-600'
                        }`}
                      >
                        {existingAnswer.isCorrect ? '+10 Poin' : '+0 Poin'}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-800 mb-2">
                      Jawaban yang benar: <span className="font-mono-num">{question.answer}</span>.{' '}
                      {question.options[question.answer]}
                    </p>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {question.explanation}
                    </p>

                    {milestoneText && (
                      <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-center gap-2 text-sm font-semibold text-blue-800">
                        <Trophy className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
                        <span>{milestoneText}</span>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {isLastQuestion && allCompleted ? (
                        <button
                          type="button"
                          onClick={onFinishQuiz}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm sm:text-base shadow-sm transition-colors cursor-pointer min-h-[46px]"
                        >
                          <Award className="w-5 h-5" aria-hidden="true" />
                          <span>Lihat Hasil Akhir</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={onNext}
                          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm sm:text-base shadow-sm transition-colors cursor-pointer min-h-[46px] ${
                            existingAnswer.isCorrect
                              ? 'bg-[#1D4ED8] hover:bg-[#1E40AF]'
                              : 'bg-[#0F172A] hover:bg-slate-800'
                          }`}
                        >
                          <span>
                            {existingAnswer.isCorrect
                              ? 'Lanjut ke Soal Berikutnya'
                              : 'Saya Paham, Lanjut!'}
                          </span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </motion.article>
      </AnimatePresence>

      {/* Lightweight Bottom Navigation Bar */}
      <nav
        aria-label="Navigasi soal"
        className="mt-5 flex flex-wrap items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={onPrev}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-45 disabled:cursor-not-allowed text-sm font-semibold transition-colors cursor-pointer min-h-[42px]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Sebelumnya</span>
          </button>

          <button
            type="button"
            onClick={() => setIsNavOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer min-h-[42px]"
          >
            <Grid className="w-4 h-4 text-blue-600" aria-hidden="true" />
            <span>Peta Soal ({answeredCount}/{TOTAL_QUESTIONS})</span>
          </button>
        </div>

        {currentIndex < furthestUnlockedIndex && (
          <button
            type="button"
            onClick={() => onJumpToIndex(furthestUnlockedIndex)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100 text-sm font-semibold transition-colors cursor-pointer min-h-[42px]"
          >
            <span>Kembali ke Soal Aktif ({furthestUnlockedIndex + 1})</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        )}

        {allCompleted && !isLastQuestion && (
          <button
            type="button"
            onClick={onFinishQuiz}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors cursor-pointer min-h-[42px]"
          >
            <Award className="w-4 h-4" aria-hidden="true" />
            <span>Lihat Hasil Akhir</span>
          </button>
        )}
      </nav>

      <QuestionNavigatorModal
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        answers={answers}
        currentIndex={currentIndex}
        furthestUnlockedIndex={furthestUnlockedIndex}
        onSelectIndex={onJumpToIndex}
      />
    </main>
  );
}
