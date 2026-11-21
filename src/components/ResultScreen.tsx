import { motion } from 'motion/react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  RotateCcw,
  Star,
  Trophy,
  XCircle,
} from 'lucide-react';
import {
  getAchievementPredicate,
  POINTS_PER_CORRECT,
  TOTAL_QUESTIONS,
} from '../data/questions';

interface ResultScreenProps {
  studentName: string;
  correctCount: number;
  wrongCount: number;
  points: number;
  onRestart: () => void;
  onOpenSummary: () => void;
  onOpenStudy: () => void;
}

export function ResultScreen({
  studentName,
  correctCount,
  wrongCount,
  points,
  onRestart,
  onOpenSummary,
  onOpenStudy,
}: ResultScreenProps) {
  const accuracy = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
  const predicate = getAchievementPredicate(accuracy);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const correctArc = (accuracy / 100) * circumference;

  const badgePalette = {
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    amber: 'bg-amber-50 border-amber-200 text-amber-900',
    slate: 'bg-slate-100 border-slate-200 text-slate-900',
  }[predicate.tierColor];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
      >
        {/* Top Banner */}
        <div className="bg-[#0F172A] text-white px-6 py-8 sm:px-10 sm:py-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-300/30 text-amber-300 mb-4">
            <Trophy className="w-7 h-7" aria-hidden="true" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-sky-300 uppercase mb-1">
            Hasil Kuis Kamu
          </p>
          <h1
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-2"
            style={{ textWrap: 'balance' }}
          >
            {studentName
              ? `Selamat, ${studentName}! Kamu Telah Menyelesaikan 90 Soal!`
              : 'Kamu Telah Menyelesaikan 90 Soal!'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Progress Penyelesaian: <strong className="font-mono-num text-emerald-400">100%</strong> ({TOTAL_QUESTIONS}/{TOTAL_QUESTIONS} soal terjawab)
          </p>
        </div>

        {/* Main Metrics + Ring Chart */}
        <div className="p-6 sm:p-10 space-y-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Donut Chart */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 132 132" aria-label={`Akurasi ${accuracy}%`}>
                  <circle
                    cx="66"
                    cy="66"
                    r={radius}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="14"
                  />
                  <motion.circle
                    cx="66"
                    cy="66"
                    r={radius}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: circumference - correctArc }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-mono-num font-extrabold text-3xl sm:text-4xl text-slate-900">
                    {accuracy}%
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Akurasi</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-5 text-xs sm:text-sm font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" aria-hidden="true" />
                  Benar ({correctCount})
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-slate-200 inline-block" aria-hidden="true" />
                  Salah ({wrongCount})
                </span>
              </div>
            </div>

            {/* 4 Key Stats */}
            <div className="md:col-span-7 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-700 text-xs sm:text-sm font-semibold mb-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" aria-hidden="true" />
                  <span>Total Poin</span>
                </div>
                <div className="font-mono-num font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {points}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Maks {TOTAL_QUESTIONS * POINTS_PER_CORRECT} poin
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-700 text-xs sm:text-sm font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Jawaban Benar</span>
                </div>
                <div className="font-mono-num font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {correctCount}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  dari {TOTAL_QUESTIONS} soal
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold mb-1">
                  <XCircle className="w-4 h-4 text-amber-600" aria-hidden="true" />
                  <span>Belum Tepat</span>
                </div>
                <div className="font-mono-num font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {wrongCount}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  siap dipelajari lagi
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-blue-50/70 border border-blue-200">
                <div className="flex items-center gap-2 text-blue-800 text-xs sm:text-sm font-semibold mb-1">
                  <Award className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  <span>Progres Selesai</span>
                </div>
                <div className="font-mono-num font-extrabold text-2xl sm:text-3xl text-slate-900">
                  100%
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {TOTAL_QUESTIONS} soal tuntas
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Predicate Banner */}
          <div className={`rounded-2xl border p-5 sm:p-6 ${badgePalette}`}>
            <div className="flex items-start gap-3.5">
              <Award className="w-7 h-7 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80 mb-1">
                  Predikat Pencapaian
                </p>
                <h2 className="font-display font-bold text-xl sm:text-2xl mb-2">
                  {predicate.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-2">
                  "{predicate.description}"
                </p>
                <p className="text-xs opacity-75">
                  Catatan: Predikat ini hanya sebagai penyemangat latihan mandiri dan bukan penilaian akhir kemampuanmu.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={onOpenStudy}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-base shadow-sm transition-colors cursor-pointer min-h-[48px]"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              <span>
                {wrongCount > 0
                  ? `Pelajari Kembali (${wrongCount} Soal)`
                  : 'Pelajari Kembali Materi'}
              </span>
            </button>

            <button
              type="button"
              onClick={onOpenSummary}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base transition-colors cursor-pointer min-h-[48px]"
            >
              <ClipboardList className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <span>Lihat Ringkasan Hasil</span>
            </button>

            <button
              type="button"
              onClick={onRestart}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-colors cursor-pointer min-h-[48px]"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Ulangi Kuis</span>
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
