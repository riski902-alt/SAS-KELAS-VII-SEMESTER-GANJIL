import { motion } from 'motion/react';
import { ArrowRight, Award, BookOpenCheck, CheckCircle2, Play, RotateCcw, Sparkles } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { TOTAL_QUESTIONS } from '../data/questions';

interface WelcomeScreenProps {
  initialName: string;
  savedAnsweredCount: number;
  savedPoints: number;
  isCompleted: boolean;
  onStartNew: (name: string) => void;
  onResume: (name: string) => void;
  onViewLastResult: () => void;
}

export function WelcomeScreen({
  initialName,
  savedAnsweredCount,
  savedPoints,
  isCompleted,
  onStartNew,
  onResume,
  onViewLastResult,
}: WelcomeScreenProps) {
  const [nameInput, setNameInput] = useState(initialName);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (savedAnsweredCount > 0 && !isCompleted) {
      onResume(nameInput.trim());
    } else {
      onStartNew(nameInput.trim());
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left: Hero Intro & Form */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <p className="text-sm font-semibold text-blue-700 tracking-wide mb-3">
            Persiapan Sumatif Akhir Semester · Informatika SMP Kelas VII
          </p>

          <h1
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            INFORMATIKA FUN — Belajar, Berlatih, dan Menjadi Juara!
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
            Latihan mandiri sebanyak 90 soal pilihan ganda dengan tampilan santai dan fokus satu soal per layar. Setiap jawaban langsung dikoreksi lengkap dengan pembahasannya agar kamu makin siap menghadapi SAS.
          </p>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
            <div>
              <label htmlFor="student-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Nama Siswa <span className="text-slate-400 font-normal">(opsional, tampil di sertifikat hasil)</span>
              </label>
              <input
                id="student-name"
                type="text"
                maxLength={50}
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Contoh: Budi Santoso — VII A"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-base focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-colors"
              />
            </div>

            {savedAnsweredCount > 0 && !isCompleted ? (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-3 text-sm">
                  <span className="text-blue-900 font-medium">
                    Progres tersimpan: <strong className="font-mono-num">{savedAnsweredCount}/{TOTAL_QUESTIONS}</strong> soal ·{' '}
                    <strong className="font-mono-num">{savedPoints}</strong> poin
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-base shadow-sm transition-colors cursor-pointer min-h-[48px]"
                  >
                    <Play className="w-5 h-5" aria-hidden="true" />
                    <span>Lanjutkan Latihan (Soal {savedAnsweredCount + 1})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onStartNew(nameInput.trim())}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-base transition-colors cursor-pointer min-h-[48px]"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Mulai Baru</span>
                  </button>
                </div>
              </div>
            ) : isCompleted ? (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-900 font-medium">
                  Kamu sudah menyelesaikan sesi kuis sebelumnya dengan total <strong className="font-mono-num">{savedPoints}</strong> poin!
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-base shadow-sm transition-colors cursor-pointer min-h-[48px]"
                  >
                    <RotateCcw className="w-5 h-5" aria-hidden="true" />
                    <span>Mulai Kuis Baru</span>
                  </button>
                  <button
                    type="button"
                    onClick={onViewLastResult}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base transition-colors cursor-pointer min-h-[48px]"
                  >
                    <Award className="w-5 h-5 text-amber-500" aria-hidden="true" />
                    <span>Lihat Hasil Terakhir</span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-base sm:text-lg shadow-sm transition-colors cursor-pointer min-h-[52px]"
              >
                <span>Mulai Berlatih Sekarang</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            )}
          </form>
        </motion.div>

        {/* Right: Structured Learning Guide Card */}
        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-[#0F172A] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center gap-2.5 text-amber-300 font-semibold text-sm mb-3">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Cara Kerja Kuis Mandiri</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-6">
              Belajar Tenang, Paham Konsepnya
            </h2>

            <ul className="space-y-4 text-sm sm:text-base text-slate-200">
              <li className="flex items-start gap-3">
                <BookOpenCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-white">1 Soal per Layar:</strong> Tampilan lega dan nyaman dibaca di HP, Chromebook, tablet, maupun laptop.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-white">Koreksi & Pembahasan Langsung:</strong> Jawaban benar atau keliru langsung diberi penjelasan singkat tanpa rasa takut salah.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-white">Poin Realtime (+10 Poin):</strong> Setiap jawaban benar menambah 10 poin secara langsung hingga skor maksimal 900.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-mono-num font-bold text-2xl text-white">90</div>
              <div className="text-xs text-slate-400 mt-0.5">Total Soal</div>
            </div>
            <div>
              <div className="font-mono-num font-bold text-2xl text-amber-300">+10</div>
              <div className="text-xs text-slate-400 mt-0.5">Poin / Benar</div>
            </div>
            <div>
              <div className="font-mono-num font-bold text-2xl text-emerald-400">900</div>
              <div className="text-xs text-slate-400 mt-0.5">Poin Maks</div>
            </div>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}
