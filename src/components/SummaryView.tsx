import { ArrowLeft, BookOpen, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';
import { QUIZ_QUESTIONS, TOTAL_QUESTIONS } from '../data/questions';
import { AnswerRecord } from '../types/quiz';

interface SummaryViewProps {
  answers: Record<number, AnswerRecord>;
  onBackToResult: () => void;
  onOpenStudy: () => void;
}

type FilterMode = 'all' | 'correct' | 'wrong';

export function SummaryView({ answers, onBackToResult, onOpenStudy }: SummaryViewProps) {
  const [filter, setFilter] = useState<FilterMode>('all');

  const correctCount = Object.values(answers).filter((a) => a.isCorrect).length;
  const wrongCount = TOTAL_QUESTIONS - correctCount;

  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    const rec = answers[q.id];
    if (filter === 'correct') return rec?.isCorrect === true;
    if (filter === 'wrong') return rec?.isCorrect === false;
    return true;
  });

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <button
            type="button"
            onClick={onBackToResult}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Kembali ke Hasil Akhir</span>
          </button>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Ringkasan Hasil 90 Soal
          </h1>
        </div>

        <button
          type="button"
          onClick={onOpenStudy}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          <span>Mode Pelajari Kembali</span>
        </button>
      </div>

      {/* Filter Segmented Control */}
      <div className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
            filter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Semua ({TOTAL_QUESTIONS})
        </button>
        <button
          type="button"
          onClick={() => setFilter('correct')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
            filter === 'correct' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Benar ({correctCount})
        </button>
        <button
          type="button"
          onClick={() => setFilter('wrong')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
            filter === 'wrong' ? 'bg-white text-amber-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Belum Tepat ({wrongCount})
        </button>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-slate-700 font-medium">
            {filter === 'wrong'
              ? 'Hebat! Tidak ada jawaban yang salah pada sesi kuis ini.'
              : 'Belum ada data untuk kategori ini.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const rec = answers[q.id];
            const isCorrect = rec?.isCorrect ?? false;

            return (
              <article
                key={q.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="font-mono-num font-bold text-slate-900">Soal {q.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{q.topic}</span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 font-semibold ${
                      isCorrect ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                        <span>Benar (+10 Poin)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Belum Tepat</span>
                      </>
                    )}
                  </span>
                </div>

                <p className="text-slate-900 font-medium text-sm sm:text-base whitespace-pre-line mb-4 leading-relaxed">
                  {q.question}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-sm mb-3">
                  <div
                    className={`p-3 rounded-xl border ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-amber-50 border-amber-200 text-amber-900'
                    }`}
                  >
                    <span className="block text-xs font-semibold opacity-75 mb-0.5">
                      Jawaban Kamu:
                    </span>
                    <span className="font-medium">
                      {rec ? `${rec.selected}. ${q.options[rec.selected]}` : '-'}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border bg-emerald-50/70 border-emerald-200 text-emerald-950">
                    <span className="block text-xs font-semibold text-emerald-700 mb-0.5">
                      Jawaban Benar:
                    </span>
                    <span className="font-medium">
                      {q.answer}. {q.options[q.answer]}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <strong className="text-slate-800">Pembahasan:</strong> {q.explanation}
                </p>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
