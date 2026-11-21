import { PredicateInfo, QuizQuestion } from '../types/quiz';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
];

export const TOTAL_QUESTIONS = QUIZ_QUESTIONS.length;
export const POINTS_PER_CORRECT = 10;

export function getMotivationMessage(questionNumber: number): string {
  if (questionNumber <= 10) return 'Ayo mulai! Kamu pasti bisa!';
  if (questionNumber <= 20) return 'Semangatmu mulai terlihat!';
  if (questionNumber <= 30) return 'Kamu semakin memahami materi!';
  if (questionNumber <= 40) return 'Terus maju, jangan menyerah!';
  if (questionNumber <= 50) return 'Luar biasa, kamu sudah melewati setengah perjalanan!';
  if (questionNumber <= 60) return 'Konsistensi adalah kekuatanmu!';
  if (questionNumber <= 70) return 'Sedikit lagi, tetap fokus!';
  if (questionNumber <= 80) return 'Kamu hebat, terus berjuang!';
  if (questionNumber <= 89) return 'Final stretch! Berikan usaha terbaikmu!';
  return 'Kamu telah menyelesaikan seluruh tantangan!';
}

export function getMilestoneMessage(answeredCount: number): string | null {
  switch (answeredCount) {
    case 10:
      return 'Milestone 10 Soal tercapai! Pemanasan yang mantap!';
    case 25:
      return 'Keren! 25 Soal sudah terlewati dengan fokus!';
    case 45:
      return 'Setengah jalan! 45 dari 90 soal telah ditaklukkan!';
    case 70:
      return 'Luar biasa! 70 Soal selesai, tinggal 20 soal lagi!';
    case 90:
      return 'Sempurna! Semua 90 soal telah kamu selesaikan!';
    default:
      return null;
  }
}

export function getAchievementPredicate(accuracyPercent: number): PredicateInfo {
  if (accuracyPercent >= 90) {
    return {
      title: 'LUAR BIASA – MASTER INFORMATIKA',
      subtitle: 'MASTER INFORMATIKA',
      description:
        'Penguasaan materimu sangat kuat dan teliti! Pertahankan kebiasaan berpikir kritis dan verifikasi informasi sebelum menghadapi Sumatif Akhir Semester.',
      tierColor: 'emerald',
    };
  }
  if (accuracyPercent >= 80) {
    return {
      title: 'HEBAT – AHLI INFORMATIKA',
      subtitle: 'AHLI INFORMATIKA',
      description:
        'Persiapan yang baik adalah langkah menuju hasil terbaik. Terus belajar, terus berkembang, dan jangan pernah berhenti mencoba!',
      tierColor: 'blue',
    };
  }
  if (accuracyPercent >= 70) {
    return {
      title: 'KEREN – INFORMATIC LEARNER',
      subtitle: 'INFORMATIC LEARNER',
      description:
        'Kamu sudah memahami sebagian besar materi dengan baik! Pelajari ulang beberapa soal yang masih keliru agar persiapan SAS-mu makin mantap.',
      tierColor: 'blue',
    };
  }
  if (accuracyPercent >= 60) {
    return {
      title: 'TERUS BERKEMBANG – LEVEL UP',
      subtitle: 'LEVEL UP',
      description:
        'Langkah belajar yang bagus! Gunakan fitur Pelajari Kembali untuk mengulas topik yang belum tepat, lalu coba ulangi kuisnya.',
      tierColor: 'amber',
    };
  }
  return {
    title: 'PANTANG MENYERAH – TERUS BERLATIH',
    subtitle: 'TERUS BERLATIH',
    description:
      'Setiap latihan membantumu memahami materi lebih baik. Yuk baca ulang pembahasan soal-soal yang keliru dan berlatih lagi sampai semakin yakin!',
    tierColor: 'slate',
  };
}
