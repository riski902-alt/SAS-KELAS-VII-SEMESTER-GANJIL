import { QuizQuestion } from '../types/quiz';

export const questionsPart2: QuizQuestion[] = [
  {
    id: 31,
    topic: 'Kredibilitas Penulis',
    question:
      'Untuk tugas Sejarah tentang Perang Dunia, Toni membaca dua buah tulisan dari internet. Tulisan pertama dibuat oleh seorang profesor sejarah Universitas terkenal dengan ratusan jurnal, sedangkan tulisan kedua dibuat oleh selebgram anonim yang fokus pada konten hiburan harian. Berdasarkan analisis kredibilitas penulis, pernyataan yang tepat adalah ...',
    options: {
      A: 'Tulisan pertama lebih kredibel karena keahlian dan rekam jejak akademis penulisnya teruji.',
      B: 'Tulisan kedua lebih kredibel jika jumlah followers selebgram tersebut sangat besar.',
      C: 'Kedua tulisan memiliki tingkat kebenaran yang setara karena sama-sama ada di internet.',
      D: 'Tulisan pertama tidak kredibel karena biasanya bahasa profesor sulit dimengerti.',
    },
    answer: 'A',
    explanation:
      'Kredibilitas penulis ditentukan oleh latar belakang keahlian, afiliasi akademik, dan rekam jejak karya ilmiahnya, bukan oleh jumlah pengikut (followers).',
  },
  {
    id: 32,
    topic: 'Kredibilitas Penulis',
    question:
      'Kamu menemukan artikel tentang "Cara Ampuh Mengobati Kucing Sakit" di sebuah blog pribadi. Setelah ditelusuri profil penulisnya, ternyata ia adalah seorang insinyur teknik mesin yang tidak memiliki latar belakang dunia satwa. Analisis kredibilitas penulis tersebut menunjukkan bahwa ...',
    options: {
      A: 'Penulis tersebut kredibel karena ia sudah pandai membuat blog di internet.',
      B: 'Tulisan tersebut patut diragukan karena keahlian penulis (teknik mesin) tidak sesuai dengan topik artikel (kesehatan hewan).',
      C: 'Artikel tersebut pasti benar karena penulisnya merupakan seorang sarjana insinyur.',
      D: 'Kredibilitas penulis tidak penting selama artikel tersebut menggunakan bahasa yang rapi.',
    },
    answer: 'B',
    explanation:
      'Keahlian penulis harus relevan dengan topik yang dibahas. Insinyur teknik mesin tidak memiliki otoritas medis hewan (kedokteran hewan) sehingga tulisannya perlu diragukan.',
  },
  {
    id: 33,
    topic: 'Kredibilitas Penulis',
    question:
      'Kamu membaca sebuah artikel kesehatan tentang "Manfaat Minum Air Putih 3 Liter Sehari". Di bagian akhir artikel, terdapat profil singkat penulis.\nProfil A: Pakar nutrisi lulusan Fakultas Kedokteran dengan pengalaman praktik 10 tahun.\nProfil B: Kreator konten game yang suka membagikan tips gaya hidup dari pengalaman pribadinya.\nDalam konteks evaluasi kredibilitas, mengapa artikel dari Profil A lebih layak dipercaya?',
    options: {
      A: 'Karena Profil A memiliki tulisan yang lebih panjang di artikelnya.',
      B: 'Karena Profil A memiliki keahlian akademik (otoritas) yang relevan dan rekam jejak di bidang kesehatan.',
      C: 'Karena Profil B pasti selalu menyebarkan berita bohong di internet.',
      D: 'Karena Profil A menggunakan perangkat komputer yang lebih canggih saat menulis.',
    },
    answer: 'B',
    explanation:
      'Profil A memiliki pendidikan formal (Fakultas Kedokteran) dan pengalaman praktik di bidang nutrisi, sehingga memiliki otoritas ilmiah yang tepat untuk topik kesehatan.',
  },
  {
    id: 34,
    topic: 'Verifikasi Silang (Cross-Check)',
    question:
      'Andi melihat promo yang dibagikan oleh teman di WhatsApp berbunyi: "Klik link ini untuk dapat pulsa gratis 100 ribu dari Operator X". Sebagai pelajar yang literat, Andi menerapkan teknik cross-check dengan cara ...',
    options: {
      A: 'Segera mengklik link tersebut untuk membuktikan sendiri kebenarannya.',
      B: 'Menyebarkan pesan ke grup lain untuk menanyakan pendapat mereka.',
      C: 'Mengunjungi situs resmi atau media sosial bercentang biru dari Operator X untuk memeriksa pengumuman resminya.',
      D: 'Menghapus akun WhatsApp miliknya.',
    },
    answer: 'C',
    explanation:
      'Teknik cross-check yang aman adalah mengecek langsung ke kanal resmi (website resmi atau akun terverifikasi), bukan mengklik tautan mencurigakan yang berisiko phishing.',
  },
  {
    id: 35,
    topic: 'Verifikasi Silang (Cross-Check)',
    question:
      'Beredar kabar bahwa akan ada pemadaman listrik di kotamu selama seminggu penuh dari sebuah postingan di Facebook. Untuk melakukan verifikasi silang (cross-check), langkah yang paling tepat adalah ...',
    options: {
      A: 'Mengecek website atau akun media sosial resmi dari Perusahaan Listrik Negara (PLN).',
      B: 'Menelpon semua tetangga untuk memastikan mereka siap.',
      C: 'Berhenti menggunakan barang elektronik selama seminggu.',
      D: 'Meminta admin Facebook untuk menghapus postingan tersebut.',
    },
    answer: 'A',
    explanation:
      'Informasi pemadaman listrik hanya valid jika dikonfirmasi oleh pihak berwenang terkait, yaitu situs atau akun resmi PLN.',
  },
  {
    id: 36,
    topic: 'Verifikasi Silang (Cross-Check)',
    question:
      "Toni membaca sebuah artikel di sebuah blog pribadi yang mengklaim bahwa 'Bawang putih dapat menyembuhkan virus X dalam 2 hari'. Toni merasa ragu dengan informasi tersebut.\nPenerapan teknik verifikasi silang (cross-check) yang paling tepat dilakukan Toni adalah ...",
    options: {
      A: 'Membagikan artikel tersebut ke grup keluarga untuk menanyakan pendapat mereka.',
      B: 'Menghapus riwayat penelusuran di browser miliknya.',
      C: 'Mencari informasi serupa di situs resmi kesehatan seperti WHO atau Kementerian Kesehatan.',
      D: 'Membeli bawang putih dan mencobanya langsung ke diri sendiri.',
    },
    answer: 'C',
    explanation:
      'Klaim medis dari blog pribadi harus diverifikasi silang dengan sumber kesehatan tepercaya seperti WHO atau Kementerian Kesehatan sebelum dipercaya atau dibagikan.',
  },
  {
    id: 37,
    topic: 'Investigasi Informasi Digital',
    question:
      'Sebuah pesan berantai yang bernada provokatif masuk ke grup kelas berbunyi: "Anak SMP dilarang lewat jalan Sudirman hari ini karena ada penculikan masal!". Pesan tersebut tidak menyebutkan sumber apa pun. Langkah awal investigasi yang tepat sebelum percaya adalah ...',
    options: {
      A: 'Menyalin pesan dan mengirimkannya ke 5 grup lainnya.',
      B: 'Mencari kata kunci "Penculikan Masal Jalan Sudirman" di mesin pencari dan portal berita terpercaya untuk memvalidasi informasi.',
      C: 'Melarang teman-teman ke sekolah agar aman dari bahaya.',
      D: 'Membalas pesan dengan kata-kata marah ke pengirim asli.',
    },
    answer: 'B',
    explanation:
      'Pesan berantai tanpa sumber perlu diselidiki terlebih dahulu melalui mesin pencari dan media berita kredibel atau pengumuman resmi kepolisian.',
  },
  {
    id: 38,
    topic: 'Investigasi Informasi Digital',
    question:
      'Ketika mendapati sebuah tautan (link) pendaftaran beasiswa misterius di media sosial, langkah pertama investigasi digital yang paling tepat adalah ...',
    options: {
      A: 'Langsung mengisi data diri ke dalam formulir link tersebut untuk mengamankan tempat (kuota).',
      B: 'Mencari informasi program beasiswa serupa di situs resmi instansi atau pemerintah terkait.',
      C: 'Menghapus browser di gawai pintar yang dimiliki.',
      D: 'Mengklik tautan tersebut secara berkali-kali untuk melihat reaksi server.',
    },
    answer: 'B',
    explanation:
      'Jangan langsung mengisi data pribadi pada tautan misterius. Cek kebenaran program beasiswa melalui situs resmi instansi penyelenggara terlebih dahulu.',
  },
  {
    id: 39,
    topic: 'Investigasi Informasi Digital',
    question:
      'Di sebuah grup pesan, beredar pesan berantai: "Telah terjadi penculikan anak menggunakan mobil hitam bernopol B 1234 XX di depan sekolah. Waspada!"\nLangkah awal investigasi digital yang paling logis dan aman untuk memastikan kebenaran informasi tersebut adalah ...',
    options: {
      A: 'Menyalin nomor polisi kendaraan tersebut dan segera menyebarkannya ke semua kontak.',
      B: 'Melaporkan kepala sekolah ke pihak berwajib agar sekolah ditutup sementara.',
      C: 'Mengabaikan pesan tersebut dan menghapus aplikasi pesan dari telepon seluler.',
      D: 'Mencari berita terkait kejadian tersebut di situs portal berita nasional yang terpercaya.',
    },
    answer: 'D',
    explanation:
      'Memeriksa pemberitaan di portal berita resmi atau konfirmasi pihak sekolah/kepolisian jauh lebih aman daripada ikut menyebarkan pesan yang belum tentu benar.',
  },
  {
    id: 40,
    topic: 'Evaluasi Sumber Digital',
    question:
      'Saat melakukan evaluasi menyeluruh terhadap sebuah artikel ilmiah online, terdapat komponen-komponen pendukung yang harus diperiksa, KECUALI ...',
    options: {
      A: 'Kredibilitas dan afiliasi (latar belakang institusi) penulis artikel.',
      B: 'Keberadaan dan jumlah gambar beranimasi di situs tersebut.',
      C: 'Tanggal pembaruan atau publikasi untuk mengukur keaktualan isi.',
      D: 'Daftar referensi primer atau sekunder yang dicantumkan pada akhir artikel.',
    },
    answer: 'B',
    explanation:
      'Evaluasi artikel ilmiah menilai kredibilitas penulis, tanggal publikasi (keaktualan), serta daftar referensi—bukan hiasan atau jumlah gambar beranimasi di situs.',
  },
  {
    id: 41,
    topic: 'Evaluasi Sumber Digital',
    question:
      'Dalam laporan investigasi digital, Budi diminta menuliskan parameter validitas sumber artikel opininya. Elemen yang paling krusial untuk dimasukkan dalam laporan agar membuktikan keakuratan informasi adalah ...',
    options: {
      A: 'Kesesuaian fakta di dalam artikel dengan data resmi dari sumber terpercaya (seperti BPS atau Jurnal).',
      B: 'Banyaknya komentar lucu dari pengunjung situs.',
      C: 'Warna dan gaya huruf (font) yang digunakan situs web tersebut.',
      D: 'Seberapa sering artikel tersebut diunggah ulang oleh akun artis.',
    },
    answer: 'A',
    explanation:
      'Keakuratan suatu artikel diuji dengan membandingkan klaim di dalamnya terhadap data resmi dan teruji seperti data BPS atau jurnal ilmiah.',
  },
  {
    id: 42,
    topic: 'Evaluasi Sumber Digital',
    question:
      'Dalam menyusun laporan evaluasi kredibilitas sebuah artikel digital, Rina mencatat beberapa poin: (1) Nama penulis dan institusinya, (2) Tanggal publikasi artikel, (3) Jumlah penyuka (likes) di media sosial, (4) Daftar referensi daftar pustaka yang digunakan.\nKomponen yang kurang relevan untuk menentukan validitas dan kualitas intelektual dari isi artikel tersebut adalah poin ...',
    options: {
      A: '(1)',
      B: '(2)',
      C: '(3)',
      D: '(4)',
    },
    answer: 'C',
    explanation:
      'Jumlah likes di media sosial mencerminkan popularitas semata, bukan kebenaran ilmiah atau kredibilitas isi artikel.',
  },
  {
    id: 43,
    topic: 'Evaluasi Kredibilitas Sumber',
    question:
      'Setelah mengecek informasi mengenai manfaat buah X dari 4 situs web kesehatan resmi milik pemerintah (mengatakan buah X aman) dan 1 situs blog tanpa penulis (mengatakan buah X beracun mematikan), kesimpulan evaluasi kredibilitas yang paling logis adalah ...',
    options: {
      A: 'Buah X benar-benar beracun mematikan karena blog anonim berani bersuara beda.',
      B: 'Informasi dari 4 situs pemerintah lebih kredibel dan dapat diandalkan dibandingkan satu sumber blog anonim yang tidak jelas.',
      C: 'Kita tidak boleh memakan buah apapun lagi karena internet membingungkan.',
      D: 'Keempat situs web pemerintah salah karena mereka bersekongkol.',
    },
    answer: 'B',
    explanation:
      'Konsistensi beberapa sumber resmi yang memiliki otoritas jelas jauh lebih kredibel daripada satu blog anonim tanpa pertanggungjawaban.',
  },
  {
    id: 44,
    topic: 'Evaluasi Kredibilitas Sumber',
    question:
      'Saat menelusuri kabar bencana banjir di daerah Z, tiga media nasional memuat foto dan waktu kejadian dengan rincian yang sama, sedangkan satu cuitan dari akun palsu (tanpa nama asli) memberikan cerita kronologis yang bertolak belakang. Kesimpulan evaluasi yang tepat adalah ...',
    options: {
      A: 'Cuitan akun palsu memiliki nilai berita lebih tinggi dan eksklusif.',
      B: 'Kebenaran informasi berada di media nasional karena mereka memiliki pedoman pengecekan fakta (fact-checking) yang berstandar.',
      C: 'Cuitan anonim patut dipercaya karena orang biasa tidak mungkin berbohong.',
      D: 'Banjir tersebut merupakan konspirasi karena ada dua versi cerita.',
    },
    answer: 'B',
    explanation:
      'Media pers nasional yang terverifikasi menjalankan proses liputan lapangan dan verifikasi fakta berstandar jurnalistik, sedangkan akun palsu tidak memiliki akuntabilitas.',
  },
  {
    id: 45,
    topic: 'Evaluasi Data Numerik',
    question:
      'Budi sedang menelusuri data statistik pengguna internet Indonesia tahun 2023. Dari 5 sumber yang ia temukan:\n- 4 sumber resmi (Kominfo, BPS, dan 2 portal berita besar) menyebutkan angka pertumbuhan sekitar 5% - 7%.\n- 1 sumber blog anonim menyebutkan angka pertumbuhan mencapai 90% dalam setahun tanpa data survei tambahan.\nKesimpulan evaluasi numerik yang paling tepat mengenai informasi dari blog anonim tersebut adalah ...',
    options: {
      A: 'Blog tersebut paling benar karena menyajikan angka pertumbuhan tertinggi yang optimis.',
      B: 'Blog tersebut memiliki kredibilitas sangat rendah karena datanya menyimpang jauh (outlier) dari mayoritas sumber resmi tanpa dukungan bukti survei.',
      C: 'Blog tersebut harus dijadikan sumber utama karena berani tampil beda dari pemerintah.',
      D: 'Keempat sumber resmi salah hitung dan datanya perlu direvisi.',
    },
    answer: 'B',
    explanation:
      'Data yang menyimpang ekstrem (outlier) dari sumber-sumber resmi tanpa metodologi atau bukti survei patut dicurigai tidak akurat dan tidak kredibel.',
  },
  {
    id: 46,
    topic: 'Fakta dan Opini',
    question:
      'Kalimat di media digital yang mencerminkan sebuah fakta objektif ditandai dengan ...',
    options: {
      A: 'Menyertakan ungkapan perasaan penulis terhadap suatu peristiwa.',
      B: 'Mengandung penilaian subjektif yang berbeda-beda bagi setiap pembaca.',
      C: 'Menyajikan kejadian nyata, tempat, waktu, atau data numerik yang dapat dibuktikan kebenarannya.',
      D: "Menggunakan kata-kata seperti 'sebaiknya', 'mungkin', dan 'menurut saya'.",
    },
    answer: 'C',
    explanation:
      'Fakta objektif berisi peristiwa nyata, lokasi, waktu, atau angka terukur yang dapat diverifikasi kebenarannya secara umum.',
  },
  {
    id: 47,
    topic: 'Fakta dan Opini',
    question:
      'Di antara kalimat-kalimat berikut yang diunggah di sebuah blog, manakah yang merupakan kalimat fakta objektif?',
    options: {
      A: 'Ibu Kota Negara Kesatuan Republik Indonesia pada tahun 2020 adalah Jakarta.',
      B: 'Pemandangan di Gunung Bromo saat matahari terbit adalah yang terindah di dunia.',
      C: 'Saya merasa cuaca di bulan Januari selalu membuat orang sedih.',
      D: 'Musik dangdut adalah genre musik terbaik untuk didengarkan saat santai.',
    },
    answer: 'A',
    explanation:
      'Pilihan A menyatakan kenyataan historis/geografis yang pasti dan dapat dibuktikan. Pilihan B, C, dan D berisi selera serta perasaan pribadi (opini).',
  },
  {
    id: 48,
    topic: 'Fakta dan Opini',
    question:
      'Perhatikan kalimat-kalimat berikut:\n(1) Jarak antara Bumi dan Bulan rata-rata adalah 384.400 km.\n(2) Bunga mawar adalah bunga yang paling indah di dunia.\n(3) Suhu air mendidih pada tekanan atmosfer standar adalah 100° Celsius.\n(4) Menurut saya, cuaca hari ini sangat tidak mendukung untuk belajar.\nKalimat yang merupakan representasi dari fakta objektif berbasis data kuantitatif ditunjukkan oleh nomor ...',
    options: {
      A: '(1) dan (3)',
      B: '(2) dan (4)',
      C: '(1) dan (2)',
      D: '(3) dan (4)',
    },
    answer: 'A',
    explanation:
      'Kalimat (1) memuat data jarak 384.400 km dan kalimat (3) memuat suhu 100° Celsius; keduanya adalah fakta ilmiah berbasis angka (kuantitatif) yang dapat diukur.',
  },
  {
    id: 49,
    topic: 'Fakta dan Opini',
    question:
      'Sebuah paragraf berbunyi: "Film pahlawan super keluaran tahun ini sudah tayang di bioskop seluruh Indonesia. Menurut banyak kritikus pribadi, alur ceritanya membosankan dan aktornya terlihat kaku." Kalimat kedua dalam teks tersebut termasuk opini subjektif karena ...',
    options: {
      A: 'Didasarkan pada data penjualan tiket bioskop.',
      B: 'Menyatakan jadwal penayangan yang pasti.',
      C: 'Memuat pandangan, penilaian, atau selera seseorang yang belum tentu disetujui orang lain.',
      D: 'Merupakan laporan peristiwa yang nyata-nyata terjadi.',
    },
    answer: 'C',
    explanation:
      'Kata "membosankan" dan "terlihat kaku" adalah penilaian subjektif atau selera penilai yang bisa berbeda pada tiap penonton.',
  },
  {
    id: 50,
    topic: 'Fakta dan Opini',
    question:
      'Dari kutipan sebuah artikel review masakan berikut, manakah kalimat yang murni mengandung opini subjektif penulis?',
    options: {
      A: '"Warung sate ini buka mulai pukul 17.00 WIB hingga pukul 22.00 WIB setiap harinya."',
      B: '"Bumbu kacang sate di sini terasa terlalu manis bagi lidah kebanyakan orang dewasa."',
      C: '"Sate di warung ini terbuat dari daging ayam dan daging kambing."',
      D: '"Satu porsi sate ayam dijual dengan harga Rp20.000,00."',
    },
    answer: 'B',
    explanation:
      'Rasa "terlalu manis" bersifat relatif/subjektif tergantung selera masing-masing orang, sedangkan jam buka, bahan daging, dan harga adalah fakta terukur.',
  },
  {
    id: 51,
    topic: 'Fakta dan Opini',
    question:
      'Sebuah ulasan ponsel pintar di media digital berbunyi: "Ponsel Tipe X ini dilengkapi dengan baterai 5000 mAh dan memori 8 GB. Namun, desain warna merahnya terlihat sangat mencolok dan terkesan murahan bagi kalangan anak muda."\nBerdasarkan kutipan di atas, pernyataan opini subjektif dari penulis terletak pada klaim tentang ...',
    options: {
      A: 'Kapasitas baterai 5000 mAh',
      B: 'Ukuran memori 8 GB',
      C: 'Nama ponsel Tipe X',
      D: 'Desain warna yang terkesan murahan',
    },
    answer: 'D',
    explanation:
      'Spesifikasi 5000 mAh, 8 GB, dan nama produk adalah data faktual, sementara penilaian "terkesan murahan" merupakan opini estetika subjektif.',
  },
  {
    id: 52,
    topic: 'Fakta dan Opini',
    question:
      'Perhatikan daftar berikut:\n(1) Nasi goreng adalah makanan terenak di Asia Tenggara.\n(2) Nasi goreng dibuat dari bahan dasar beras putih yang dimasak.\n(3) Mobil balap warna merah lebih terlihat keren di sirkuit.\n(4) Mobil balap tersebut memiliki kecepatan maksimal 300 km/jam.\nPasangan manakah yang secara tepat membandingkan antara Fakta (pertama) dan Opini (kedua)?',
    options: {
      A: '(1) dan (2)',
      B: '(2) dan (3)',
      C: '(3) dan (1)',
      D: '(4) dan (2)',
    },
    answer: 'B',
    explanation:
      'Kalimat (2) adalah fakta tentang bahan dasar nasi goreng, sedangkan kalimat (3) adalah opini subjektif ("lebih terlihat keren").',
  },
  {
    id: 53,
    topic: 'Fakta dan Opini',
    question:
      'Dalam sebuah laporan olahraga, jurnalis menulis: (X) Pertandingan sepak bola tadi malam dimenangkan oleh Tim Tuan Rumah dengan skor 2-0. (Y) Pertandingan itu berjalan sangat membosankan. Analisis yang tepat untuk kedua kalimat di atas adalah ...',
    options: {
      A: 'Kalimat X dan Y sama-sama fakta karena dimuat di media berita.',
      B: 'Kalimat X adalah opini karena hasil akhir pertandingan ditentukan oleh wasit, sedangkan Y fakta.',
      C: 'Kalimat X adalah fakta yang tidak bisa didebat, sedangkan kalimat Y adalah opini subjektif jurnalis.',
      D: 'Kalimat X dan Y sama-sama opini subjektif dari penulis berita.',
    },
    answer: 'C',
    explanation:
      'Skor akhir 2-0 adalah fakta hasil pertandingan yang objektif, sementara menilai pertandingan "sangat membosankan" adalah opini jurnalis.',
  },
  {
    id: 54,
    topic: 'Fakta dan Opini',
    question:
      'Tabel perbandingan pernyataan dalam unggahan media digital:\nNo | Pernyataan\n1 | Penduduk Provinsi Bali pada tahun 2020 berjumlah sekitar 4,32 juta jiwa\n2 | Berlibur ke Bali jauh lebih menyenangkan daripada ke gunung\n3 | Makanan pedas adalah makanan yang paling lezat\n4 | Candi Borobudur terletak di Kabupaten Magelang, Jawa Tengah\nJika dikelompokkan, pernyataan yang secara murni merupakan fakta ditunjukkan oleh nomor ...',
    options: {
      A: '1 dan 4',
      B: '2 dan 3',
      C: '1 dan 2',
      D: '3 dan 4',
    },
    answer: 'A',
    explanation:
      'Pernyataan 1 (data kependudukan 2020) dan 4 (lokasi geografis Candi Borobudur) adalah fakta yang dapat dibuktikan, sedangkan 2 dan 3 merupakan selera pribadi.',
  },
  {
    id: 55,
    topic: 'Ciri Berita Hoaks',
    question:
      'Salah satu ciri paling mencolok yang sering ditemukan pada judul berita hoaks (berita palsu) di internet adalah ...',
    options: {
      A: 'Menggunakan bahasa Indonesia baku (EYD) yang sangat rapi dan santun.',
      B: 'Disertai dengan daftar pustaka yang kredibel di bagian bawah artikel.',
      C: 'Menggunakan kalimat provokatif, huruf kapital berlebih, tanda seru ganda, dan bernada mengancam.',
      D: 'Menyebutkan nama-nama jurnalis dan dewan redaksi dengan jelas.',
    },
    answer: 'C',
    explanation:
      'Hoaks kerap memancing emosi pembaca dengan judul sensasional, huruf kapital penuh, tanda seru berlebih (!!!), dan nada menakut-nakuti.',
  },
  {
    id: 56,
    topic: 'Ciri Berita Hoaks',
    question:
      'Beredar sebuah artikel panjang di WhatsApp dengan penutup: "Sebarkan pesan ini ke seluruh kontakmu! Jika tidak, kamu akan tertimpa kesialan besok pagi!". Pesan tersebut patut dicurigai sebagai hoaks karena ciri-cirinya memuat unsur ...',
    options: {
      A: 'Paksaan emosional (viralitas buatan) yang tidak masuk akal.',
      B: 'Ajakan edukatif kepada masyarakat luas.',
      C: 'Fakta empiris yang didukung oleh ahli sosiologi.',
      D: 'Format penulisan jurnalistik modern.',
    },
    answer: 'A',
    explanation:
      'Pesan berantai hoaks sering memaksa penerima untuk menyebarkan pesan secara cepat melalui ancaman kesialan yang tidak rasional.',
  },
  {
    id: 57,
    topic: 'Ciri Berita Hoaks',
    question:
      'Terdapat unggahan berbunyi: "AWAS!!! TELAH DITEMUKAN VIRUS KOMPUTER BARU YANG BISA MELEDAKKAN HP KAMU. VIRALKAN PESAN INI KE 10 ORANG ATAU HP KAMU AKAN MELEDAK BESOK PAGI!"\nBerdasarkan literasi digital, ciri utama hoaks yang tampak paling menonjol pada pesan tersebut adalah ...',
    options: {
      A: 'Disertai dengan gambar animasi yang menarik.',
      B: 'Berisi data statistik yang berasal dari lembaga penelitian kampus.',
      C: 'Menggunakan huruf kapital semua, bernada ancaman, dan memaksa penyebaran.',
      D: 'Ditulis menggunakan bahasa Inggris standar.',
    },
    answer: 'C',
    explanation:
      'Kombinasi huruf kapital seluruhnya, klaim mustahil yang menakut-nakuti, serta perintah memviralkan pesan adalah ciri klasik berita hoaks.',
  },
  {
    id: 58,
    topic: 'Verifikasi Gambar (Reverse Image Search)',
    question:
      'Jika kamu menerima sebuah foto yang menunjukkan sebuah kejadian banjir besar di kotamu namun langit di foto itu terlihat aneh dan berbeda dari kenyataan hari ini, perangkat digital utama (tools) yang paling efektif untuk mengecek asal-usul foto tersebut adalah ...',
    options: {
      A: 'Aplikasi Kalkulator Bawaan Smartphone.',
      B: 'Google Translate untuk menerjemahkan caption foto.',
      C: 'Reverse Image Search (Pencarian Gambar Terbalik).',
      D: 'Aplikasi pengedit teks seperti Microsoft Word.',
    },
    answer: 'C',
    explanation:
      'Reverse Image Search membantu melacak kemunculan foto yang sama di internet sehingga kita tahu kapan dan di mana foto itu sebenarnya diambil.',
  },
  {
    id: 59,
    topic: 'Verifikasi Gambar (Reverse Image Search)',
    question:
      'Fungsi utama dari penggunaan perangkat Reverse Image Search (seperti Yandex Image atau Google Lens) dalam menguji kebenaran berita di internet adalah ...',
    options: {
      A: 'Memperjelas resolusi gambar yang buram (blur) menjadi HD.',
      B: 'Mencari jejak digital gambar tersebut untuk melihat kapan pertama kali diunggah dan konteks aslinya.',
      C: 'Menyimpan gambar ke dalam galeri smartphone secara otomatis.',
      D: 'Menghapus subjek yang mengganggu dari latar belakang foto.',
    },
    answer: 'B',
    explanation:
      'Reverse Image Search digunakan untuk menemukan sumber awal foto, waktu publikasi pertamanya, serta konteks peristiwa asli dari gambar tersebut.',
  },
  {
    id: 60,
    topic: 'Verifikasi Gambar (Reverse Image Search)',
    question:
      'Beredar gambar seekor dinosaurus yang sedang berjalan di jalan raya Jakarta dan diklaim sebagai kejadian asli minggu lalu akibat eksperimen ilmuwan gila.\nUntuk membuktikan bahwa gambar tersebut adalah hasil rekayasa komputer (manipulasi), tools (alat bantu) digital yang paling efektif digunakan adalah ...',
    options: {
      A: 'Aplikasi penerjemah bahasa (Google Translate).',
      B: 'Aplikasi pengolah angka (Microsoft Excel).',
      C: 'Mesin pencari gambar terbalik (Google Reverse Image Search).',
      D: 'Aplikasi pembuat presentasi (Microsoft PowerPoint).',
    },
    answer: 'C',
    explanation:
      'Google Reverse Image Search dapat melacak gambar asli sebelum diedit atau menemukan artikel cek fakta yang membongkar manipulasi foto tersebut.',
  },
];
