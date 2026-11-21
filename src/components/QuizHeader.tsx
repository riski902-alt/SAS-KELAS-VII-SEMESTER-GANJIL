import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, Star, XCircle } from 'lucide-react';
import { TOTAL_QUESTIONS } from '../data/questions';

interface QuizHeaderProps {
  points: number;
  correctCount: number;
  wrongCount: number;
  currentQuestionNumber: number;
  studentName: string;
  showScoreboard: boolean;
  onLogoClick?: () => void;
}

export function QuizHeader({
  points,
  correctCount,
  wrongCount,
  currentQuestionNumber,
  studentName,
  showScoreboard,
  onLogoClick,
}: QuizHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Wordmark */}
        <button
          type="button"
          onClick={onLogoClick}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg shrink-0"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1E3A8A] text-white font-display font-bold text-base shadow-sm">
            IF
          </span>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 whitespace-nowrap">
            Informatika Fun
          </span>
        </button>

        {/* Right: Always-visible Realtime Scoreboard */}
        {showScoreboard ? (
          <div
            aria-label="Skor dan progres kuis"
            className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm shrink-0"
          >
            {studentName && (
              <span className="hidden md:inline text-slate-500 font-medium truncate max-w-[140px]">
                {studentName}
              </span>
            )}

            <motion.div
              key={points}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-1.5 text-amber-700 font-semibold whitespace-nowrap"
              title="Total Poin"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-500 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline text-slate-500 font-medium">POIN:</span>
              <span className="font-mono-num font-bold text-slate-900">{points}</span>
            </motion.div>

            <div
              className="flex items-center gap-1 text-emerald-700 font-semibold whitespace-nowrap"
              title="Jawaban Benar"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline text-slate-500 font-medium">BENAR:</span>
              <span className="font-mono-num font-bold">{correctCount}</span>
            </div>

            <div
              className="hidden xs:flex sm:flex items-center gap-1 text-slate-600 font-semibold whitespace-nowrap"
              title="Jawaban Salah"
            >
              <XCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline text-slate-500 font-medium">SALAH:</span>
              <span className="font-mono-num font-bold">{wrongCount}</span>
            </div>

            <div
              className="flex items-center gap-1.5 text-blue-800 font-semibold whitespace-nowrap pl-2 border-l border-slate-200"
              title="Nomor Soal"
            >
              <BookOpen className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline text-slate-500 font-medium">SOAL:</span>
              <span className="font-mono-num font-bold">
                {currentQuestionNumber}/{TOTAL_QUESTIONS}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-xs sm:text-sm font-medium text-slate-500 whitespace-nowrap">
            Latihan SAS Kelas VII · 90 Soal
          </div>
        )}
      </div>
    </header>
  );
}
