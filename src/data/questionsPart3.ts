import { QuizQuestion } from '../types/quiz';

export const questionsPart3: QuizQuestion[] = [
  {
    id: 61,
    topic: 'Logika Verifikasi Hoaks',
    question:
      'Sebuah narasi pesan SMS memberitahu bahwa kamu memenangkan undian mobil mewah seharga satu miliar Rupiah dari sebuah bank terkemuka, padahal kamu bahkan tidak pernah membuka rekening di bank tersebut. Langkah evaluasi paling rasional yang membuktikan pesan ini adalah penipuan (hoaks) adalah ...',
    options: {
      A: 'Secara logika, kita tidak bisa menang undian jika tidak pernah ikut serta atau menjadi nasabah perusahaan terkait.',
      B: 'Pajak mobil tersebut akan terlalu mahal untuk dibayar.',
      C: 'Mobil tersebut pasti belum memiliki plat nomor polisi.',
      D: 'Bank terkemuka biasanya hanya membagikan hadiah motor, bukan mobil.',
    },
    answer: 'A',
    explanation:
      'Penalaran logis paling mendasar adalah mustahil memenangkan undian dari institusi yang tidak pernah kita ikuti programnya maupun memiliki rekening di sana.',
  },
  {
    id: 62,
    topic: 'Verifikasi Sumber Primer',
    question:
      'Kamu membaca berita yang mengklaim bahwa "Matahari akan padam selama 3 hari bulan depan". Berita ini mencantumkan logo palsu NASA. Setelah kamu membuka situs resmi NASA (nasa.gov), tidak ada pernyataan apapun tentang klaim tersebut. Evaluasi yang tepat adalah ...',
    options: {
      A: 'NASA sedang menutupi kebenaran dari warga dunia.',
      B: 'Berita tersebut adalah hoaks karena klaim yang disematkan tidak didukung oleh sumber primer resmi.',
      C: 'Kita harus segera bersiap-siap menyimpan cadangan makanan.',
      D: 'Berita itu mungkin benar tetapi jadwal padamnya diundur.',
    },
    answer: 'B',
    explanation:
      'Mengecek langsung ke sumber primer resmi (nasa.gov) memastikan klaim tersebut palsu dan hanya mencatut logo NASA.',
  },
  {
    id: 63,
    topic: 'Verifikasi Data Matematis',
    question:
      'Sebuah narasi berita mengklaim: "Dalam pemilihan ketua OSIS daring kemarin, Calon A mendapatkan 75% suara, Calon B 40% suara, dan Calon C 30% suara dari total 1.000 pemilih terdaftar."\nMengapa klaim angka dalam berita tersebut dipastikan keliru dan tidak masuk akal secara matematis?',
    options: {
      A: 'Karena pemilu OSIS selalu dilakukan dengan sistem pencoblosan kertas, bukan daring.',
      B: 'Karena pemilihan hanya boleh diikuti maksimal oleh dua pasangan calon.',
      C: 'Karena mesin penghitung suara digital sering mengalami kerusakan daya listrik.',
      D: 'Karena total penjumlahan persentase suara melebihi kapasitas maksimum 100%.',
    },
    answer: 'D',
    explanation:
      'Jumlah total persentase suara seluruh kandidat seharusnya maksimal 100%, sedangkan 75% + 40% + 30% = 145%, yang mustahil secara matematis.',
  },
  {
    id: 64,
    topic: 'Etika Media Pers Resmi',
    question:
      'Media cetak atau portal berita online yang berstatus sebagai media pers resmi dituntut untuk bekerja secara profesional. Salah satu standar penting yang mereka patuhi adalah ...',
    options: {
      A: 'Mematuhi Kode Etik Jurnalistik, seperti cover both sides (berimbang) dan verifikasi data yang mendalam.',
      B: 'Dapat menyiarkan rumor artis tanpa bukti asal disukai penonton.',
      C: 'Menulis berita sepenuhnya berdasarkan opini dari dewan redaksinya tanpa bertanya pada saksi mata.',
      D: 'Melarang warga masyarakat awam membaca beritanya.',
    },
    answer: 'A',
    explanation:
      'Media pers resmi terikat Kode Etik Jurnalistik yang mewajibkan verifikasi fakta secara cermat serta keberimbangan berita (cover both sides).',
  },
  {
    id: 65,
    topic: 'Etika Media Pers Resmi',
    question:
      'Dalam mengelola informasi, media pers resmi memiliki prosedur berlapis sebelum sebuah artikel diterbitkan. Ini merupakan penjelasan dari karakteristik ...',
    options: {
      A: 'Kepemilikan perusahaan secara tunggal oleh jurnalis.',
      B: 'Sistem editorial dan redaksional (filter redaksi) yang memastikan kualitas tulisan dan akurasi fakta.',
      C: 'Penyebaran menggunakan jaringan komputer tanpa batas.',
      D: 'Menggunakan font teks berwarna merah dan huruf kapital.',
    },
    answer: 'B',
    explanation:
      'Setiap naskah berita di media pers resmi melewati penyuntingan redaksi (editor/redaktur) untuk memeriksa akurasi fakta, bahasa, dan etika sebelum terbit.',
  },
  {
    id: 66,
    topic: 'Etika Media Pers Resmi',
    question:
      'Media pers resmi seperti koran atau portal berita nasional beroperasi dengan aturan yang ketat untuk menjaga kualitas informasi.\nSalah satu karakteristik utama dan standar kerja dari media pers resmi adalah ...',
    options: {
      A: 'Boleh menerbitkan berita apa saja asalkan viral di media sosial.',
      B: 'Memiliki susunan dewan redaksi, badan hukum, dan tunduk pada kode etik jurnalistik.',
      C: 'Selalu menulis berita dengan judul huruf kapital semua dan bombastis.',
      D: 'Tidak pernah melakukan ralat atau permintaan maaf jika terjadi kesalahan tulisan.',
    },
    answer: 'B',
    explanation:
      'Media pers resmi memiliki badan hukum jelas, penanggung jawab/dewan redaksi yang tercantum, serta wajib tunduk pada kode etik jurnalistik.',
  },
  {
    id: 67,
    topic: 'Media Resmi vs Non-Resmi',
    question:
      'Perbedaan paling mendasar antara unggahan seorang selebgram di akun pribadinya (media non-resmi) dan laporan berita dari media nasional yang terdaftar di Dewan Pers adalah ...',
    options: {
      A: 'Selebgram bebas mengunggah hal apapun tanpa harus ada tim editor yang menguji kebenaran (verifikasi) kontennya terlebih dahulu.',
      B: 'Media nasional tidak boleh menggunakan gambar atau video dalam melaporkan berita.',
      C: 'Selebgram selalu mengunggah konten yang lebih penting bagi negara.',
      D: 'Media nasional tidak mempedulikan tata bahasa yang baku.',
    },
    answer: 'A',
    explanation:
      'Media resmi yang terdaftar di Dewan Pers wajib melalui proses verifikasi tim editor, sedangkan akun pribadi media sosial dapat mengunggah konten tanpa filter redaksi.',
  },
  {
    id: 68,
    topic: 'Media Resmi vs Non-Resmi',
    question:
      'Informasi yang disebarkan melalui grup Telegram anonim sangat rawan mengandung hoaks dibandingkan informasi dari portal berita resmi karena grup anonim ...',
    options: {
      A: 'Menggunakan bahasa pemrograman yang salah dan rawan bocor.',
      B: 'Tidak memiliki identitas penanggung jawab yang jelas dan tidak diikat oleh kewajiban verifikasi etika jurnalistik.',
      C: 'Membutuhkan waktu lama untuk memuat halaman chat.',
      D: 'Hanya bisa diakses oleh orang dewasa menggunakan perangkat mahal.',
    },
    answer: 'B',
    explanation:
      'Tanpa identitas penanggung jawab dan kewajiban kode etik jurnalistik, grup anonim bebas menyebarkan informasi yang belum tentu benar.',
  },
  {
    id: 69,
    topic: 'Media Resmi vs Non-Resmi',
    question:
      'Perhatikan dua sumber informasi berikut:\nSumber X: Akun media sosial anonim "InfoGossipTerkini" yang menyebarkan gosip artis.\nSumber Y: Portal berita Kompas.com atau Detik.com yang memiliki jurnalis lapangan.\nAnalisis perbedaan mendasar mengenai tanggung jawab informasi antara Sumber X (non-resmi) dan Sumber Y (resmi) adalah ...',
    options: {
      A: 'Sumber X bertanggung jawab penuh secara hukum pers, sedangkan Y kebal hukum.',
      B: 'Sumber Y melakukan proses verifikasi sebelum terbit, sedangkan Sumber X bebas menyebarkan klaim sepihak tanpa filter redaksi.',
      C: 'Keduanya dibiayai sepenuhnya oleh iuran pajak masyarakat.',
      D: 'Sumber X selalu memberikan informasi yang lebih akurat dan faktual dibandingkan Sumber Y.',
    },
    answer: 'B',
    explanation:
      'Portal berita resmi memiliki jurnalis lapangan dan meja redaksi untuk verifikasi fakta sebelum terbit, sedangkan akun gosip anonim tidak memiliki mekanisme tersebut.',
  },
  {
    id: 70,
    topic: 'Objektivitas & Cover Both Sides',
    question:
      "Suatu terjadi sengketa lahan antarwarga. Portal Berita 'Maju' menerbitkan artikel yang hanya mewawancarai pihak pelapor tanpa menemui pihak terlapor sama sekali. Dari sisi penyajian informasi media pers, hal ini dianggap kurang baik karena ...",
    options: {
      A: 'Tidak menerapkan prinsip objektivitas (cover both sides/menghimpun suara kedua belah pihak).',
      B: 'Judul artikelnya pasti terlalu panjang dan sulit dibaca.',
      C: 'Beritanya akan cepat dihapus oleh pemerintah daerah.',
      D: 'Reporter menghabiskan waktu terlalu cepat saat meliput kejadian.',
    },
    answer: 'A',
    explanation:
      'Prinsip cover both sides menuntut jurnalis memberi ruang konfirmasi kepada kedua belah pihak yang bersengketa agar berita objektif dan berimbang.',
  },
  {
    id: 71,
    topic: 'Objektivitas & Cover Both Sides',
    question:
      'Dalam mengulas kebijakan larangan plastik di sekolah, Portal Jurnalistik sekolah memuat data dampak sampah plastik dari guru biologi dan keluhan siswa mengenai sulitnya membawa botol kaca. Sementara Blog pribadi seorang siswa hanya memaki-maki aturan tersebut dan menuduh sekolah ingin untung. Perbandingan yang logis dari dua sumber ini adalah ...',
    options: {
      A: 'Blog siswa lebih faktual karena berasal dari pengalaman orang yang merasakan kebijakan secara langsung.',
      B: 'Portal Jurnalistik lebih objektif karena menghimpun fakta berimbang dari berbagai perspektif, sedangkan Blog berisi luapan emosi subjektif.',
      C: 'Keduanya sama-sama tidak objektif karena isu tersebut tidak menarik.',
      D: 'Portal jurnalistik dipastikan menipu siswa demi membela pihak sekolah.',
    },
    answer: 'B',
    explanation:
      'Portal Jurnalistik menyajikan data ilmiah sekaligus suara keberatan siswa secara berimbang, sedangkan blog pribadi tersebut hanya berisi emosi sepihak.',
  },
  {
    id: 72,
    topic: 'Objektivitas & Cover Both Sides',
    question:
      'Diagram distribusi proporsi paragraf:\n- Media A menulis konflik warga: 80% paragraf mewawancarai pihak penggugat, 20% berisi opini penulis.\n- Media B menulis konflik warga: 45% mewawancarai penggugat, 45% mewawancarai pihak tergugat, 10% data administrasi dari RT.\nBerdasarkan perbandingan penyajian data dan paragraf tersebut, manakah yang lebih menerapkan prinsip objektivitas dan berimbang (cover both sides)?',
    options: {
      A: 'Media A, karena opini penulis membantu pembaca memihak ke yang benar.',
      B: 'Media B, karena memberikan porsi proporsional dan adil kepada kedua belah pihak yang berkonflik.',
      C: 'Keduanya gagal menerapkan objektivitas karena harusnya 100% data dari RT.',
      D: 'Media A, karena penggugat berhak mendapat suara lebih banyak.',
    },
    answer: 'B',
    explanation:
      'Media B memberi ruang berimbang (45% dan 45%) bagi kedua pihak yang berkonflik serta melengkapinya dengan data netral dari RT (10%).',
  },
  {
    id: 73,
    topic: 'Etika Digital (Netiquette)',
    question:
      'Budi marah besar saat teman satu timnya membuat kesalahan fatal dalam game online. Ia pun meluapkan emosinya dengan mengetik kata-kata makian rasis (SARA) di kolom obrolan (chat) game tersebut. Perilaku Budi merupakan ...',
    options: {
      A: 'Hal yang biasa dan legal karena hanya sebuah permainan hiburan.',
      B: 'Tindakan kreatif untuk meningkatkan semangat temannya bermain.',
      C: 'Pelanggaran berat etika interaksi digital dan menyalahi norma kesopanan (netiquette).',
      D: 'Bentuk kebebasan berpendapat yang dilindungi hukum.',
    },
    answer: 'C',
    explanation:
      'Ujaran kebencian atau makian bernuansa SARA di ruang digital melanggar norma kesopanan berinternet (netiquette) serta berpotensi melanggar hukum.',
  },
  {
    id: 74,
    topic: 'Etika Digital (Netiquette)',
    question:
      'Siti merasa kesal dengan layanan di sebuah restoran. Bukannya memberi keluhan resmi secara baik-baik, ia secara diam-diam memotret wajah pelayan restoran tersebut, mengeditnya menjadi wajah hewan peliharaan (meme), lalu memviralkannya ke media sosial. Pelanggaran etika yang dilakukan Siti meliputi unsur ...',
    options: {
      A: 'Pencemaran nama baik, penyebaran privasi (doxing), dan penghinaan bentuk fisik.',
      B: 'Keterlambatan mempublikasikan berita kuliner ke media daring.',
      C: 'Penggunaan gambar tanpa membayar royalti hak cipta fotografer.',
      D: 'Menggunakan aplikasi edit foto ilegal yang dilarang negara.',
    },
    answer: 'A',
    explanation:
      'Mengunggah foto orang lain tanpa izin dengan editan yang merendahkan martabat merupakan pelanggaran privasi, penghinaan, dan pencemaran nama baik.',
  },
  {
    id: 75,
    topic: 'Etika Digital (Netiquette)',
    question:
      'Di kolom komentar sebuah video perlombaan nyanyi antarsekolah, seorang netizen menulis: "Suara anak itu jelek sekali, wajahnya juga sangat kusam, tidak pantas ikut lomba!"\nBerdasarkan etika berinteraksi di media sosial, komentar tersebut masuk dalam pelanggaran etika karena ...',
    options: {
      A: 'Tidak menggunakan bahasa Inggris dalam komentarnya.',
      B: 'Mengandung unsur perundungan, penghinaan fisik (body shaming), dan menjatuhkan mental orang lain.',
      C: 'Dikirim saat jam perlombaan belum sepenuhnya selesai.',
      D: 'Kurangnya tanda baca koma dan titik yang tepat pada kalimat.',
    },
    answer: 'B',
    explanation:
      'Menghina penampilan fisik (body shaming) dan merendahkan kemampuan orang lain secara kasar termasuk perundungan siber (cyberbullying).',
  },
  {
    id: 76,
    topic: 'Kewargaan Digital',
    question:
      'Saat kamu menemukan sebuah forum diskusi di internet tentang pendidikan, banyak orang yang saling ejek dan menjatuhkan karena berbeda pendapat. Penerapan prinsip kewargaan digital yang tepat bagi dirimu adalah ...',
    options: {
      A: 'Menjadi penengah dengan berpendapat sopan, didukung fakta yang sehat, atau memilih diam (tidak ikut campur menyiram bensin).',
      B: 'Bergabung dengan pihak mayoritas agar merasa memiliki dukungan yang kuat.',
      C: 'Menyusup sebagai akun anonim (fake account) lalu melontarkan hinaan lebih parah dari yang lain.',
      D: 'Melakukan peretasan (hacking) terhadap server penyedia layanan forum diskusi tersebut.',
    },
    answer: 'A',
    explanation:
      'Warga digital yang baik menjaga diskusi tetap sehat dan santun berbasis fakta, serta tidak ikut memperkeruh suasana dengan ejekan.',
  },
  {
    id: 77,
    topic: 'Kewargaan Digital',
    question:
      'Konsep "Kewargaan Digital" (Digital Citizenship) menuntut penggunanya agar dapat membedakan mana perbuatan baik atau buruk di ranah maya. Salah satu ciri seorang warga digital yang baik adalah ...',
    options: {
      A: 'Mengganti kata sandi (password) teman saat teman tersebut lengah.',
      B: 'Menghormati hak cipta orang lain saat memakai karya seni/tulisan dari internet (mencantumkan sumber atau nama penulis).',
      C: 'Menghapus jejak penelusuran (history browser) agar tidak dimarahi orang tua saat di rumah.',
      D: 'Aktif menyebarkan rumor-rumor hangat di grup alumni sekolah.',
    },
    answer: 'B',
    explanation:
      'Menghargai hak kekayaan intelektual dengan mencantumkan sumber atau nama pencipta karya adalah tanggung jawab dasar warga digital yang etis.',
  },
  {
    id: 78,
    topic: 'Kewargaan Digital',
    question:
      'Salah satu teman sekelasmu, Dika, mendapatkan banyak komentar kasar dan intimidasi (cyberbullying) di akun Instagram-nya oleh sekelompok orang yang tidak dikenal.\nSebagai warga digital yang bertanggung jawab, tindakan paling tepat yang harus kamu terapkan adalah ...',
    options: {
      A: 'Ikut-ikutan memberikan komentar kasar agar dianggap bagian dari kelompok yang populer.',
      B: 'Melaporkan (report) akun-akun kasar tersebut ke pihak platform dan memberikan dukungan moral kepada Dika.',
      C: 'Membiarkannya saja karena media sosial adalah dunia maya yang tidak berpengaruh ke dunia nyata.',
      D: 'Memblokir akun Dika agar tidak ikut terkena masalah.',
    },
    answer: 'B',
    explanation:
      'Melaporkan pelaku ke platform serta memberi dukungan moral kepada korban membantu menghentikan perundungan dan melindungi kesehatan mental teman.',
  },
  {
    id: 79,
    topic: 'Manajemen Jejak Digital',
    question:
      'Rina sering mengunggah video dirinya yang sedang membolos sekolah dan bertindak indisipliner di aplikasi media sosialnya. Evaluasi dampak (manajemen jejak digital) dari tindakan Rina di masa depan adalah ...',
    options: {
      A: 'Video tersebut akan menaikkan karir Rina sebagai pejabat pemerintahan di kemudian hari.',
      B: 'Jejak digital negatif tersebut terekam secara permanen, sehingga berisiko menurunkan nilai reputasi Rina saat mendaftar kuliah atau mencari kerja.',
      C: 'Rina akan dihormati teman-temannya karena dianggap pemberani melawan otoritas sekolah.',
      D: 'Video tersebut otomatis terhapus saat Rina sudah dewasa sehingga dampaknya hilang.',
    },
    answer: 'B',
    explanation:
      'Jejak digital bersifat persisten dan mudah ditelusuri kembali di masa depan oleh kampus maupun perekrut kerja untuk menilai rekam jejak seseorang.',
  },
  {
    id: 80,
    topic: 'Manajemen Jejak Digital',
    question:
      'Seseorang sangat menyadari bahwa apa pun yang ia bagikan di ruang obrolan dan postingan profilnya dapat dilacak (trackable) suatu saat nanti. Oleh karena itu, langkah terbaik untuk menjaga jejak digital yang positif adalah ...',
    options: {
      A: 'Membagikan tulisan inspiratif, karya kreatif, dan prestasi akademis dibandingkan umpatan atau keluhan negatif secara berlebihan.',
      B: 'Menghindari pemakaian mesin pencarian dan beralih menggunakan majalah cetak saja.',
      C: 'Membuat puluhan akun samaran untuk bebas menghina orang lain tanpa ketahuan identitas aslinya.',
      D: 'Mengunci profil dengan password yang harus diganti setiap hari.',
    },
    answer: 'A',
    explanation:
      'Membangun jejak digital positif dilakukan dengan aktif membagikan konten bermanfaat, karya kreatif, dan interaksi yang santun di ruang digital.',
  },
  {
    id: 81,
    topic: 'Manajemen Jejak Digital',
    question:
      'Lima tahun lalu saat masih SD, Andi sering mengunggah komentar ujaran kebencian di akun media sosialnya. Meskipun sekarang ia sudah menghapus aplikasi tersebut, jejak komentarnya masih tersimpan dan di-screenshot oleh orang lain.\nEvaluasi dampak jejak digital negatif tersebut bagi masa depan Andi adalah ...',
    options: {
      A: 'Jejak digital akan hilang secara otomatis saat Andi berusia 17 tahun.',
      B: 'Jejak digital tersebut dapat muncul kembali dan berpotensi menghambat peluang Andi dalam mencari beasiswa atau pekerjaan di masa depan.',
      C: 'Tidak ada dampak sama sekali karena kejadiannya sudah berlangsung lama.',
      D: 'Andi akan mendapat penghargaan karena bersikap jujur dan apa adanya di masa lalu.',
    },
    answer: 'B',
    explanation:
      'Sesuatu yang sudah diunggah ke internet dapat disimpan atau di-screenshot orang lain dan berisiko merusak reputasi saat seleksi beasiswa atau karier.',
  },
  {
    id: 82,
    topic: 'Kampanye Literasi Digital',
    question:
      'Terdapat sebuah kampanye digital dengan tagline: "Klik Berhenti, Cek Kebenaran, Jangan Berbagi Bila Ragu!" Pesan moral dan edukatif utama yang terkandung dalam kampanye anti-hoaks ini adalah ...',
    options: {
      A: 'Mengajak kita mengeklik banyak iklan secara serentak, membacanya cepat, dan membagikannya ke orang terdekat.',
      B: 'Mengimbau pengguna internet untuk menunda penyebaran berita (pause) sebelum memastikan apakah faktanya benar dan terverifikasi kredibilitasnya.',
      C: 'Melarang penggunaan media digital sama sekali saat meragukan informasi.',
      D: 'Mengajarkan cara membagikan segala berita walau isinya ragu-ragu karena kebebasan berekspresi.',
    },
    answer: 'B',
    explanation:
      'Tagline tersebut mengajak kita berhenti sejenak (pause) untuk memverifikasi kebenaran informasi dan tidak ikut menyebarkan kabar yang masih diragukan.',
  },
  {
    id: 83,
    topic: 'Kampanye Literasi Digital',
    question:
      'Dalam poster literasi digital, terdapat kalimat "Think Before You Post, Not Everything You Read is True". Pesan edukatif dari poster ini menyasar masalah ...',
    options: {
      A: 'Pentingnya membaca semua status teman sebelum menghapusnya.',
      B: 'Kebiasaan masyarakat yang suka malas membeli buku dan lebih memilih gadget.',
      C: 'Perlunya kemampuan bernalar kritis agar tidak serta-merta mempercayai konten (hoaks) yang tersebar bebas di internet.',
      D: 'Cara membuat konten yang viral agar dapat keuntungan finansial dari internet.',
    },
    answer: 'C',
    explanation:
      '"Think Before You Post, Not Everything You Read is True" menekankan pentingnya berpikir kritis sebelum memercayai maupun memublikasikan konten di internet.',
  },
  {
    id: 84,
    topic: 'Kampanye Literasi Digital',
    question:
      'Sebuah kampanye literasi digital sekolah memajang poster bertuliskan: "SARING sebelum SHARING. Jari mu adalah harimau mu!"\nPesan edukasi anti-hoaks utama yang terkandung dalam kampanye tersebut adalah ...',
    options: {
      A: 'Siswa dilarang menggunakan media sosial sama sekali di lingkungan sekolah.',
      B: 'Siswa wajib memverifikasi dan menganalisis kebenaran suatu berita sebelum membagikannya kepada orang lain.',
      C: 'Siswa harus melindungi ponselnya menggunakan pola usap layar yang rumit.',
      D: 'Siswa hanya boleh membagikan informasi berita bertema hewan buas.',
    },
    answer: 'B',
    explanation:
      '"Saring sebelum Sharing" berarti menyaring dan memastikan kebenaran informasi terlebih dahulu sebelum menekankan tombol bagikan agar tidak merugikan orang lain.',
  },
  {
    id: 85,
    topic: 'Solusi Edukatif di Sekolah',
    question:
      'Banyak siswa beramai-ramai memboikot acara pentas seni sekolah karena membaca isu palsu di Facebook bahwa pentas itu akan dimanfaatkan untuk memungut biaya siluman dari siswa. Sebagai pengurus OSIS, solusi edukatif yang patut diambil adalah ...',
    options: {
      A: 'Memberikan klarifikasi terstruktur dan terbuka melalui akun resmi OSIS serta mengadakan sosialisasi pentingnya menyaring isu sebelum panik.',
      B: 'Melaporkan siswa-siswa penyebar isu palsu ke polisi setempat untuk dipenjara seumur hidup.',
      C: 'Membatalkan acara pentas seni selamanya demi menyenangkan mereka.',
      D: 'Membuat akun anonim untuk balas menyebarkan kabar hoaks tentang keburukan siswa-siswa tersebut.',
    },
    answer: 'A',
    explanation:
      'Klarifikasi terbuka melalui kanal resmi disertai edukasi literasi digital dapat meredakan kepanikan dan memulihkan kepercayaan warga sekolah.',
  },
  {
    id: 86,
    topic: 'Solusi Edukatif di Sekolah',
    question:
      'Beberapa siswa mengirim stiker wajah teman mereka yang diedit memalukan sebagai bahan tertawaan di grup WhatsApp sekolah. Guru wali kelas turun tangan.\nSolusi edukatif berperspektif etika digital dari wali kelas sebaiknya ...',
    options: {
      A: 'Menyita telepon seluruh anak tanpa memberikan penjelasan.',
      B: 'Menyuruh korban membalas hal yang sama agar impas dan adil.',
      C: 'Memberikan nasihat empatik terkait \'Cyberbullying\' dan dampaknya terhadap psikologis korban, lalu membina siswa agar menghargai orang lain di dunia maya.',
      D: 'Meminta anak-anak mengganti stiker wajah itu dengan wajah selebriti.',
    },
    answer: 'C',
    explanation:
      'Pendekatan edukatif dan empatik menumbuhkan kesadaran siswa mengenai dampak psikologis cyberbullying dan pentingnya menghormati privasi teman.',
  },
  {
    id: 87,
    topic: 'Solusi Edukatif di Sekolah',
    question:
      'Maraknya penyebaran berita palsu tentang jadwal ujian palsu yang membuat bingung banyak siswa kelas VII di grup obrolan.\nBerdasarkan etika digital, solusi edukatif yang paling tepat dilakukan oleh pengurus kelas adalah ...',
    options: {
      A: 'Menyebarkan jadwal palsu tandingan agar grup obrolan menjadi ramai dan seru.',
      B: 'Meminta wali kelas untuk mengkonfirmasi jadwal resmi dan membuat aturan tegas larangan menyebar informasi tanpa sumber jelas di grup.',
      C: 'Menghapus (kick) seluruh anggota grup WhatsApp dan mematikan fungsi grup selamanya.',
      D: 'Menyita semua telepon pintar milik siswa di kelas agar mereka hanya belajar dari buku.',
    },
    answer: 'B',
    explanation:
      'Mengonfirmasi kebenaran kepada wali kelas dan menetapkan tata tertib berbagi informasi bersumber jelas adalah langkah solutif yang mendidik.',
  },
  {
    id: 88,
    topic: 'Kampanye Kewargaan Digital',
    question:
      "Sebagai tugas akhir TIK, siswa diminta membuat rancangan kampanye 'Kewargaan Digital Cerdas' berbasis media sosial Instagram. Desain pesan kampanye (caption) yang paling ideal, positif, dan solutif di bawah ini adalah ...",
    options: {
      A: '"Hoaks di mana-mana! Dunia internet sudah rusak. Mari kita matikan handphone kita mulai besok!"',
      B: '"Waspada berita hoaks! Jadilah netizen pintar, lakukan cek silang sebelum membagikan informasi. #CerdasBermedia"',
      C: '"Kamu kena hoaks? Memalukan sekali. Jangan jadikan dirimu terlihat bodoh di mata semua orang!"',
      D: '"Ayo sebar luaskan info kami tanpa dibaca, buktikan kepedulianmu pada kawan!"',
    },
    answer: 'B',
    explanation:
      'Caption pada pilihan B bersifat positif, solutif (mengajak cek silang), tidak menghina orang lain, dan mendorong kebiasaan cerdas bermedia.',
  },
  {
    id: 89,
    topic: 'Kampanye Kewargaan Digital',
    question:
      'Sebuah sekolah ingin mengadakan perlombaan video pendek untuk menangkal kebiasaan cyberbullying. Karakteristik pesan konten paling baik untuk kampanye ini agar tidak menyinggung namun memberi impak besar adalah ...',
    options: {
      A: 'Konten yang memuat video balasan menyindir keras pelaku cyberbullying dengan menampilkan wajah mereka secara eksplisit.',
      B: 'Konten komedi ringan, namun menampilkan empati (rasa peduli) sesama teman yang menunjukkan bahwa berbuat baik di dunia maya itu keren.',
      C: 'Konten ceramah 3 jam yang mewajibkan penonton menghafalkan undang-undang siber.',
      D: 'Konten berupa ancaman hukuman drop-out bagi pelaku agar audiens ketakutan berbuat jahat.',
    },
    answer: 'B',
    explanation:
      'Konten kreatif yang ringan namun sarat empati lebih mudah diterima oleh remaja SMP dan efektif membangun budaya kebaikan di dunia maya.',
  },
  {
    id: 90,
    topic: 'Analisis Survei Literasi Digital',
    question:
      'Data hasil survei literasi digital di SMP X menunjukkan bahwa penyebab siswa menyebarkan berita hoaks adalah:\n- 60% Hanya iseng dan ingin pertama kali membagikan.\n- 30% Terpengaruh judul yang sangat heboh tanpa membaca isinya.\n- 10% Karena mendapat perintah dari teman.\nPengurus OSIS ingin merancang kampanye sosial di media sosial. Berdasarkan data persentase tersebut, konsep utama kampanye media sosial yang dirancang harus memfokuskan pesan untuk ...',
    options: {
      A: 'Melarang siswa berteman dengan siswa dari sekolah lain.',
      B: 'Mengajarkan cara meretas dan menghapus situs web pembuat berita hoaks.',
      C: 'Mengedukasi pentingnya menahan diri untuk tidak terburu-buru menyebarkan berita dan membiasakan membaca keseluruhan isi (budaya literasi).',
      D: 'Mengharuskan siswa membagikan 10 informasi yang bermanfaat setiap harinya.',
    },
    answer: 'C',
    explanation:
      'Karena 90% penyebabnya adalah keinginan cepat membagikan (60%) dan tidak membaca isi berita secara utuh (30%), kampanye harus fokus pada pengendalian diri dan budaya membaca menyeluruh.',
  },
];
