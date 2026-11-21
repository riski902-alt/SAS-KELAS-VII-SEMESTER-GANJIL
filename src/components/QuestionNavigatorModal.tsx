import { CheckCircle2, Lock, X, XCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/questions';
import { AnswerRecord } from '../types/quiz';

interface QuestionNavigatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  answers: Record<number, AnswerRecord>;
  currentIndex: number;
  furthestUnlockedIndex: number;
  onSelectIndex: (index: number) => void;
}

export function QuestionNavigatorModal({
  isOpen,
  onClose,
  answers,
  currentIndex,
  furthestUnlockedIndex,
  onSelectIndex,
}: QuestionNavigatorModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="nav-modal-title"
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <div>
            <h2 id="nav-modal-title" className="font-display font-bold text-lg text-slate-900">
              Peta Progres 90 Soal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Klik soal yang sudah dijawab untuk meninjau pembahasannya, atau kembali ke soal aktif.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup daftar soal"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            Benar
          </span>
          <span className="inline-flex items-center gap-1.5">
            <XCircle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
            Belum Tepat
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded bg-blue-600 inline-block" aria-hidden="true" />
            Soal Aktif
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            Belum Dibuka
          </span>
        </div>

        <div className="p-5 overflow-y-auto grid grid-cols-5 sm:grid-cols-9 md:grid-cols-10 gap-2">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const record = answers[q.id];
            const isCurrent = idx === currentIndex;
            const isUnlocked = idx <= furthestUnlockedIndex;

            let btnStyle =
              'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed';
            if (isCurrent) {
              btnStyle =
                'bg-blue-600 text-white border-blue-700 font-bold ring-2 ring-blue-600/30 cursor-pointer';
            } else if (record?.isCorrect) {
              btnStyle =
                'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 cursor-pointer';
            } else if (record && !record.isCorrect) {
              btnStyle =
                'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 cursor-pointer';
            } else if (isUnlocked) {
              btnStyle =
                'bg-white text-slate-800 border-blue-400 hover:bg-blue-50 font-semibold cursor-pointer';
            }

            return (
              <button
                key={q.id}
                type="button"
                disabled={!isUnlocked}
                onClick={() => {
                  onSelectIndex(idx);
                  onClose();
                }}
                aria-label={`Soal ${q.id}${record ? (record.isCorrect ? ' benar' : ' salah') : isUnlocked ? ' aktif' : ' terkunci'}`}
                className={`h-10 rounded-lg border text-xs font-mono-num font-semibold flex items-center justify-center transition-colors ${btnStyle}`}
              >
                {q.id}
              </button>
            );
          })}
        </div>

        <div className="px-5 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onSelectIndex(furthestUnlockedIndex);
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Ke Soal Aktif ({furthestUnlockedIndex + 1})
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-sm font-semibold transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
