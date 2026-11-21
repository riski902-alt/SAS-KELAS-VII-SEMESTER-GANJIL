import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/questions';
import { AnswerRecord, OptionKey } from '../types/quiz';

interface StudyWrongViewProps {
  answers: Record<number, AnswerRecord>;
  onBackToResult: () => void;
  onRestartQuiz: () => void;
}

const OPTION_KEYS: OptionKey[] = ['A', 'B', 'C', 'D'];

export function StudyWrongView({ answers, onBackToResult, onRestartQuiz }: StudyWrongViewProps) {
  const wrongQuestions = QUIZ_QUESTIONS.filter((q) => answers[q.id] && !answers[q.id].isCorrect);
  const studyList = wrongQuestions.length > 0 ? wrongQuestions : QUIZ_QUESTIONS;
  const isPerfectScore = wrongQuestions.length === 0;

  const [idx, setIdx] = useState(0);
  const [practiceChoice, setPracticeChoice] = useState<OptionKey | null>(null);

  const currentQ = studyList[idx];
  const previousWrongChoice = answers[currentQ.id]?.selected;

  const handleNext = () => {
    setPracticeChoice(null);
    setIdx((prev) => Math.min(prev + 1, studyList.length - 1));
  };

  const handlePrev = () => {
    setPracticeChoice(null);
    setIdx((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <button
            type="button"
            onClick={onBackToResult}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 mb-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Kembali ke Hasil Akhir</span>
          </button>
          <h1 className="font-display font-bold text-2xl text-slate-900">
            {isPerfectScore
              ? 'Tinjau Ulang Seluruh Materi (Skor Sempurna!)'
              : `Pelajari Kembali (${studyList.length} Soal)`}
          </h1>
        </div>

        <span className="font-mono-num text-sm font-bold text-slate-700">
          {idx + 1} / {studyList.length}
        </span>
      </div>

      <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 text-xs sm:text-sm text-slate-500">
          <span>
            <strong className="text-slate-900">Soal Asli #{currentQ.id}</strong> · {currentQ.topic}
          </span>
          {!isPerfectScore && previousWrongChoice && (
            <span className="text-amber-700 font-medium">
              Sebelumnya kamu memilih: {previousWrongChoice}
            </span>
          )}
        </div>

        <p className="text-base sm:text-lg font-medium text-slate-900 whitespace-pre-line leading-relaxed mb-6">
          {currentQ.question}
        </p>

        <div className="space-y-3">
          {OPTION_KEYS.map((key) => {
            const isCorrectOption = currentQ.answer === key;
            const isPicked = practiceChoice === key;
            const revealed = practiceChoice !== null;

            let style = 'bg-white border-slate-200 hover:border-blue-400 text-slate-800 cursor-pointer';
            let badge = 'bg-slate-100 text-slate-700 border-slate-200';

            if (revealed) {
              if (isCorrectOption) {
                style = 'bg-emerald-50 border-emerald-500 text-emerald-950 cursor-default';
                badge = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isPicked) {
                style = 'bg-amber-50 border-amber-400 text-amber-950 cursor-default';
                badge = 'bg-amber-500 text-white border-amber-500';
              } else {
                style = 'bg-slate-50 border-slate-200 text-slate-500 opacity-75 cursor-default';
              }
            }

            return (
              <button
                key={key}
                type="button"
                disabled={revealed}
                onClick={() => setPracticeChoice(key)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-colors flex items-start gap-3.5 min-h-[52px] ${style}`}
              >
                <span
                  className={`w-8 h-8 rounded-lg border font-mono-num font-bold text-sm flex items-center justify-center shrink-0 ${badge}`}
                >
                  {key}
                </span>
                <span className="text-sm sm:text-base font-medium leading-snug">
                  {currentQ.options[key]}
                </span>
              </button>
            );
          })}
        </div>

        {practiceChoice === null ? (
          <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <span className="text-xs sm:text-sm text-slate-500">
              Coba pilih ulang jawaban yang tepat untuk melatih ingatanmu!
            </span>
            <button
              type="button"
              onClick={() => setPracticeChoice(currentQ.answer)}
              className="text-sm font-semibold text-blue-700 hover:text-blue-900 cursor-pointer shrink-0"
            >
              Tampilkan Pembahasan
            </button>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
            <div className="flex items-start gap-3">
              {practiceChoice === currentQ.answer ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              ) : (
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              )}
              <div>
                <p className="font-display font-bold text-slate-900 mb-1">
                  {practiceChoice === currentQ.answer
                    ? 'Mantap! Sekarang kamu sudah paham!'
                    : `Jawaban yang benar adalah ${currentQ.answer}.`}
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </article>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          disabled={idx === 0}
          onClick={handlePrev}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-45 disabled:cursor-not-allowed text-sm font-semibold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Soal Sebelumnya</span>
        </button>

        {idx < studyList.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold cursor-pointer"
          >
            <span>Soal Berikutnya</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onRestartQuiz}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-sm font-semibold cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Ulangi Kuis 90 Soal</span>
          </button>
        )}
      </div>
    </main>
  );
}
