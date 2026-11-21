import { QuizQuestion } from '../types/quiz';

export const questionsPart1: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Mesin Pencari',
    question:
      'Saat Budi mencari bahan referensi untuk tugas sejarahnya, ia mengetikkan "Sejarah Kerajaan Majapahit" di sebuah situs pencari. Fungsi utama dari situs (search engine) tersebut bagi Budi adalah ...',
    options: {
      A: 'Menerjemahkan bahasa daerah ke bahasa Indonesia.',
      B: 'Menemukan dan menampilkan daftar halaman web yang memuat informasi sejarah Kerajaan Majapahit.',
      C: 'Mengunduh video dokumenter secara otomatis dari seluruh internet.',
      D: 'Memblokir iklan yang mengganggu saat membaca artikel.',
    },
    answer: 'B',
    explanation:
      'Search engine (mesin pencari) berfungsi menelusuri indeks halaman web di internet dan menampilkan daftar halaman yang paling relevan dengan kata kunci yang diketikkan pengguna.',
  },
  {
    id: 2,
    topic: 'Mesin Pencari',
    question:
      'Santi kebingungan mencari panduan merakit komputer. Ia menggunakan Google untuk menemukan panduannya. Dalam hal ini, Google bertindak sebagai mesin pencari yang berfungsi untuk ...',
    options: {
      A: 'Menelusuri database internet dan menyajikan hasil pencarian yang relevan dengan kata kuncinya.',
      B: 'Membantu Santi merakit komputer secara virtual dengan robot.',
      C: 'Menyimpan file tugas Santi agar terhindar dari kerusakan perangkat keras.',
      D: 'Menghapus situs web yang tidak memuat gambar komputer.',
    },
    answer: 'A',
    explanation:
      'Google sebagai mesin pencari bekerja dengan mencocokkan kata kunci pengguna terhadap database halaman web yang telah diindeks untuk menyajikan hasil yang relevan.',
  },
  {
    id: 3,
    topic: 'Mesin Pencari',
    question:
      'Budi sedang mengerjakan proyek Ilmu Pengetahuan Alam (IPA) tentang ekosistem laut. Ia membuka peramban web dan mengetikkan kata kunci untuk mendapatkan artikel atau jurnal yang sesuai dari internet.\nBerdasarkan ilustrasi tersebut, fungsi utama dari mesin pencari (search engine) yang digunakan Budi adalah ...',
    options: {
      A: 'Menyimpan dokumen dan file tugas secara online agar aman dan tidak terhapus.',
      B: 'Mengumpulkan, mengindeks, dan menampilkan daftar halaman web yang relevan dengan kata kunci.',
      C: 'Menerjemahkan halaman web berbahasa asing ke dalam Bahasa Indonesia secara instan.',
      D: 'Memeriksa dan memblokir situs-situs yang berpotensi menyebarkan virus komputer.',
    },
    answer: 'B',
    explanation:
      'Mesin pencari memiliki tiga proses utama—crawling (mengumpulkan), indexing (mengindeks), dan ranking/menampilkan daftar halaman web yang sesuai dengan kata kunci.',
  },
  {
    id: 4,
    topic: 'Cara Kerja Mesin Pencari',
    question:
      'Mesin pencari menggunakan bot atau spider untuk mengunjungi berbagai situs web, mengumpulkan data, dan mengikuti tautan ke halaman-halaman lain di internet. Proses pengumpulan informasi otomatis ini disebut ...',
    options: {
      A: 'Ranking',
      B: 'Indexing',
      C: 'Crawling',
      D: 'Phishing',
    },
    answer: 'C',
    explanation:
      'Crawling adalah tahap pertama mesin pencari, yaitu ketika program otomatis (bot/spider/crawler) menjelajahi tautan dan mengumpulkan data dari halaman web.',
  },
  {
    id: 5,
    topic: 'Cara Kerja Mesin Pencari',
    question:
      'Setelah bot mengumpulkan miliaran halaman web dari seluruh dunia, mesin pencari kemudian menyusun, mengkategorikan, dan menyimpan data tersebut di dalam basis data (database) yang sangat besar agar mudah dan cepat ditemukan. Proses penyimpanan ini dikenal dengan sebutan ...',
    options: {
      A: 'Indexing',
      B: 'Crawling',
      C: 'Spamming',
      D: 'Browsing',
    },
    answer: 'A',
    explanation:
      'Indexing adalah proses menyusun, mengelompokkan, dan menyimpan informasi halaman web hasil crawling ke dalam indeks database agar cepat ditemukan saat ada pencarian.',
  },
  {
    id: 6,
    topic: 'Cara Kerja Mesin Pencari',
    question:
      "Dalam sistem kerjanya, mesin pencari menggunakan program otomatis yang disebut 'spider' atau 'bot'. Program ini secara terus-menerus menelusuri berbagai tautan (link) dari satu halaman web ke halaman web lainnya di seluruh dunia.\nProses penelusuran dan pengumpulan data halaman web oleh bot tersebut dikenal dengan istilah ...",
    options: {
      A: 'Indexing',
      B: 'Ranking',
      C: 'Crawling',
      D: 'Browsing',
    },
    answer: 'C',
    explanation:
      'Bot atau spider bertugas melakukan crawling, yakni menelusuri link antarhalaman web secara terus-menerus untuk mengumpulkan konten terbaru di internet.',
  },
  {
    id: 7,
    topic: 'Cara Kerja Mesin Pencari',
    question:
      'Perhatikan tabel data mesin pencari untuk 4 situs yang memuat artikel "Teknologi AI":\nWeb W: Kecocokan 98%, Kecepatan Muat 1 detik, Reputasi Baik.\nWeb X: Kecocokan 50%, Kecepatan Muat 5 detik, Reputasi Sedang.\nWeb Y: Kecocokan 95%, Kecepatan Muat 3 detik, Reputasi Rendah.\nWeb Z: Kecocokan 80%, Kecepatan Muat 2 detik, Reputasi Baik.\nMesin pencari kemungkinan besar akan menempatkan pada peringkat (ranking) pertama adalah ...',
    options: {
      A: 'Web W, karena memiliki kecocokan tertinggi dan kualitas keseluruhan paling baik.',
      B: 'Web X, karena membutuhkan waktu muat paling lama sehingga isinya pasti lengkap.',
      C: 'Web Y, karena memiliki reputasi rendah yang sering dikunjungi orang.',
      D: 'Web Z, karena merupakan penengah dari semua kriteria.',
    },
    answer: 'A',
    explanation:
      'Algoritma pemeringkatan (ranking) memprioritaskan halaman dengan kecocokan kata kunci tinggi, kecepatan muat cepat (1 detik), dan reputasi situs yang baik—semuanya unggul pada Web W.',
  },
  {
    id: 8,
    topic: 'Cara Kerja Mesin Pencari',
    question:
      'Situs web sekolah tiba-tiba turun ke halaman ketiga di hasil pencarian, padahal sebelumnya berada di peringkat teratas. Berdasarkan cara kerja mesin pencari, alasan paling logis atas fenomena ini adalah ...',
    options: {
      A: 'Algoritma mesin pencari menilai ada situs web lain yang kontennya lebih relevan, berkualitas, dan baru dibandingkan situs sekolah tersebut.',
      B: 'Kepala sekolah tidak mendaftarkan ulang nama domain situs setiap harinya.',
      C: 'Terlalu banyak siswa yang mengakses situs tersebut secara bersamaan.',
      D: 'Komputer yang digunakan siswa terserang virus dari mesin pencari.',
    },
    answer: 'A',
    explanation:
      'Peringkat hasil pencarian bersifat dinamis. Jika situs lain menerbitkan konten yang lebih relevan, berkualitas, dan mutakhir, algoritma dapat menempatkannya lebih tinggi.',
  },
  {
    id: 9,
    topic: 'Cara Kerja Mesin Pencari',
    question:
      'Perhatikan tabel hasil analisis mesin pencari terhadap 4 halaman web dengan kata kunci "Cara Membuat Kompos":\nWeb A: Kecocokan kata kunci 90%, Popularitas kunjungan 5.000, Usia artikel 1 tahun.\nWeb B: Kecocokan kata kunci 60%, Popularitas kunjungan 1.000, Usia artikel 5 tahun.\nWeb C: Kecocokan kata kunci 95%, Popularitas kunjungan 12.000, Usia artikel 2 bulan.\nWeb D: Kecocokan kata kunci 40%, Popularitas kunjungan 50.000, Usia artikel 10 tahun.\nBerdasarkan data numerik tersebut, mesin pencari akan meletakkan halaman web pada urutan (ranking) pertama adalah ...',
    options: {
      A: 'Web A, karena usianya paling ideal.',
      B: 'Web B, karena memiliki data yang paling stabil.',
      C: 'Web C, karena memiliki kecocokan tertinggi, sangat populer, dan paling aktual.',
      D: 'Web D, karena jumlah popularitas kunjungannya paling banyak sepanjang masa.',
    },
    answer: 'C',
    explanation:
      'Web C unggul di kombinasi faktor penting: kecocokan kata kunci tertinggi (95%), kunjungan tinggi (12.000), dan artikel paling baru (2 bulan).',
  },
  {
    id: 10,
    topic: 'Operator Pencarian',
    question:
      'Sita ingin mencari informasi mengenai "Evolusi" yang juga membahas mengenai "Adaptasi". Agar hasil pencariannya wajib memunculkan kedua kata tersebut dalam satu artikel, ia sebaiknya menggunakan operator pencarian ...',
    options: {
      A: 'Evolusi OR Adaptasi',
      B: 'Evolusi AND Adaptasi',
      C: 'Evolusi NOT Adaptasi',
      D: 'Evolusi -Adaptasi',
    },
    answer: 'B',
    explanation:
      'Operator logika AND mewajibkan kedua kata kunci ("Evolusi" dan "Adaptasi") muncul sekaligus dalam hasil halaman yang ditampilkan.',
  },
  {
    id: 11,
    topic: 'Operator Pencarian',
    question:
      'Tono sedang mencari jurnal ilmiah. Ia memperbolehkan artikel yang muncul berisi tentang "Bioteknologi" atau berisi tentang "Genetika". Operator logika yang paling tepat disematkan di antara kedua kata kunci tersebut adalah ...',
    options: {
      A: 'AND',
      B: 'NOT',
      C: 'OR',
      D: 'MINUS (-)',
    },
    answer: 'C',
    explanation:
      'Operator OR memperluas pencarian sehingga halaman yang mengandung salah satu kata ("Bioteknologi" atau "Genetika") maupun keduanya akan tetap ditampilkan.',
  },
  {
    id: 12,
    topic: 'Operator Pencarian',
    question:
      'Ani mendapat tugas mencari informasi tentang dampak "Pemanasan Global". Ia juga ingin artikel tersebut mencakup kata "Perubahan Iklim".\nOperator logika pada mesin pencari yang paling tepat digunakan Ani agar hasil pencarian wajib menampilkan KEDUA kata tersebut di dalam satu artikel adalah ...',
    options: {
      A: 'Pemanasan Global OR Perubahan Iklim',
      B: 'Pemanasan Global AND Perubahan Iklim',
      C: 'Pemanasan Global NOT Perubahan Iklim',
      D: 'Pemanasan Global - Perubahan Iklim',
    },
    answer: 'B',
    explanation:
      'Operator AND memastikan setiap hasil pencarian memuat kedua topik sekaligus ("Pemanasan Global" dan "Perubahan Iklim").',
  },
  {
    id: 13,
    topic: 'Operator Pencarian',
    question:
      'Anton membutuhkan file presentasi untuk bahan rapat OSIS tentang pelestarian lingkungan. Agar mesin pencari langsung menampilkan dokumen berformat presentasi, maka kata kunci penjelas yang tepat digunakan adalah ...',
    options: {
      A: 'Pelestarian Lingkungan filetype:doc',
      B: 'Pelestarian Lingkungan filetype:ppt',
      C: 'Pelestarian Lingkungan filetype:jpg',
      D: 'Pelestarian Lingkungan filetype:xls',
    },
    answer: 'B',
    explanation:
      'Operator filetype:ppt menyaring hasil pencarian khusus untuk file presentasi PowerPoint (.ppt/.pptx).',
  },
  {
    id: 14,
    topic: 'Operator Pencarian',
    question:
      'Jika Dila ingin mencari data statistik berupa tabel data dalam format Microsoft Excel, kata kunci tambahan yang harus disisipkan pada mesin pencari adalah ...',
    options: {
      A: 'filetype:xls',
      B: 'filetype:pdf',
      C: 'filetype:docx',
      D: 'filetype:mp3',
    },
    answer: 'A',
    explanation:
      'Ekstensi .xls atau .xlsx adalah format file Microsoft Excel untuk lembar kerja (spreadsheet) dan tabel data.',
  },
  {
    id: 15,
    topic: 'Operator Pencarian',
    question:
      'Siti ingin mengunduh dokumen resmi berupa panduan kepramukaan. Ia hanya membutuhkan dokumen yang siap cetak dan memiliki format layout tetap (tidak bisa diedit sembarangan).\nKata kunci penjelas yang paling tepat diketikkan oleh Siti di mesin pencari adalah ...',
    options: {
      A: 'Panduan Kepramukaan filetype:pdf',
      B: 'Panduan Kepramukaan filetype:docx',
      C: 'Panduan Kepramukaan filetype:jpg',
      D: 'Panduan Kepramukaan filetype:mp4',
    },
    answer: 'A',
    explanation:
      'PDF (Portable Document Format) memiliki tata letak tetap dan siap cetak, sehingga cocok dicari menggunakan operator filetype:pdf.',
  },
  {
    id: 16,
    topic: 'Operator Pencarian',
    question:
      "Hasil pencarian untuk kata kunci Budaya Gotong Royong terlalu luas dan menampilkan jutaan halaman yang hanya memuat kata 'budaya' saja atau 'royong' saja. Agar mesin pencari hanya menampilkan halaman web dengan frasa persis seperti kata kunci tersebut, langkah yang tepat adalah ...",
    options: {
      A: 'Menggunakan huruf kapital di semua awal kata.',
      B: 'Mengapit kata kunci dengan tanda kutip ganda ("Budaya Gotong Royong").',
      C: 'Menghapus salah satu kata agar lebih singkat.',
      D: 'Menambahkan angka di belakang kata kunci.',
    },
    answer: 'B',
    explanation:
      'Mengapit kata kunci dengan tanda kutip ganda ("...") membatasi pencarian agar hanya menampilkan halaman dengan urutan frasa yang persis sama.',
  },
  {
    id: 17,
    topic: 'Operator Pencarian',
    question:
      'Reza sangat kesulitan menemukan lirik lagu yang spesifik hanya dengan mengetikkan sepotong liriknya. Mesin pencari terus menampilkan frasa yang terpisah-pisah. Mengevaluasi kondisi ini, yang sebaiknya Reza gunakan untuk mendapat hasil frasa utuh dan presisi adalah ...',
    options: {
      A: 'Tanda tambah (+)',
      B: 'Tanda bintang (*)',
      C: 'Tanda kutip ("...")',
      D: 'Tanda kurung (...)',
    },
    answer: 'C',
    explanation:
      'Tanda kutip ("...") memerintahkan mesin pencari mencari rangkaian kata secara utuh dan berurutan sesuai teks yang diapit.',
  },
  {
    id: 18,
    topic: 'Operator Pencarian',
    question:
      "Edo mencari kata kunci: Dampak Hujan Asam (tanpa tanda kutip). Hasil pencarian yang keluar mencapai 5 juta halaman, dan banyak artikel yang hanya membahas 'dampak', 'hujan' biasa, atau senyawa 'asam' secara terpisah.\nLangkah evaluasi yang harus dilakukan Edo untuk mendapatkan hasil frasa yang presisi secara berurutan adalah ...",
    options: {
      A: "Menambahkan kata 'semua' di depan kata kunci.",
      B: 'Menggunakan tanda kutip ganda sehingga menjadi "Dampak Hujan Asam".',
      C: 'Mengganti mesin pencari ke perangkat gawai (smartphone).',
      D: "Menghapus kata 'dampak' agar mesin pencari tidak bingung.",
    },
    answer: 'B',
    explanation:
      'Dengan mengetik "Dampak Hujan Asam", mesin pencari hanya menyaring halaman yang memuat ketiga kata itu dalam urutan frasa yang tepat.',
  },
  {
    id: 19,
    topic: 'Akurasi Informasi',
    question:
      'Perhatikan teks informasi dari dua sumber berbeda berikut ini:\nSumber 1: "Kementerian Kesehatan mencatat ada 1.200 kasus baru Demam Berdarah bulan ini berdasarkan rekam medis rumah sakit."\nSumber 2: "Ada kabar bahwa jutaan orang di kota kita mendadak sakit parah akibat gigitan nyamuk jadi-jadian."\nTingkat akurasi informasi yang lebih tinggi terdapat pada ...',
    options: {
      A: 'Sumber 1, karena mengutip data angka dari institusi resmi yang berwenang.',
      B: "Sumber 2, karena kata 'jutaan' menunjukkan besarnya skala bahaya.",
      C: 'Keduanya tidak akurat karena berasal dari media digital.',
      D: 'Keduanya sama-sama akurat karena membahas topik nyamuk.',
    },
    answer: 'A',
    explanation:
      'Informasi yang akurat didukung data terukur dan berasal dari lembaga resmi yang berwenang (Kementerian Kesehatan), bukan kabar sensasional tanpa bukti.',
  },
  {
    id: 20,
    topic: 'Akurasi Informasi',
    question:
      'Siswa kelas 7 menerima informasi di internet tentang kebijakan libur sekolah sebulan penuh dari seseorang anonim di media sosial, sementara situs web resmi Dinas Pendidikan menyatakan libur hanya satu minggu. Berdasarkan kriteria akurasi informasi, sikap yang tepat adalah ...',
    options: {
      A: 'Mempercayai informasi anonim karena lebih disukai oleh para siswa.',
      B: 'Mempercayai situs web resmi Dinas Pendidikan karena datanya bersumber dari pihak yang memiliki otoritas (akurat).',
      C: 'Menggabungkan kedua informasi sehingga menjadi libur dua minggu.',
      D: 'Menunggu informasi viral dari grup pesan instan lainnya.',
    },
    answer: 'B',
    explanation:
      'Sumber resmi seperti Dinas Pendidikan memiliki otoritas dan tanggung jawab hukum atas kebijakan sekolah dibandingkan akun anonim di media sosial.',
  },
  {
    id: 21,
    topic: 'Akurasi Informasi',
    question:
      'Perhatikan dua potongan teks berita berikut:\nTeks 1: "Menurut data BMKG, gempa bermagnitudo 5,2 terjadi di titik 10 km barat daya kota X."\nTeks 2: "Banyak yang bilang di grup warga, gempanya sangat besar sampai kekuatan 9,0 dan menghancurkan separuh kota."\nBerdasarkan kriteria akurasi informasi digital, simpulan yang paling tepat adalah ...',
    options: {
      A: 'Teks 1 lebih akurat karena memuat angka spesifik dari instansi berwenang (BMKG).',
      B: 'Teks 2 lebih akurat karena informasinya berasal langsung dari warga setempat.',
      C: 'Keduanya sama-sama akurat karena membahas topik peristiwa yang sama.',
      D: 'Keduanya tidak akurat karena hanya berupa teks digital tanpa disertai video kejadian.',
    },
    answer: 'A',
    explanation:
      'Teks 1 mengutip instansi resmi pemantau gempa (BMKG) dengan koordinat dan magnitudo spesifik, sedangkan Teks 2 sekadar desas-desus tanpa verifikasi.',
  },
  {
    id: 22,
    topic: 'Relevansi Informasi',
    question:
      'Maya mendapat tugas merangkum artikel tentang "Perkembangan Artificial Intelligence di Dunia Medis". Dari empat pilihan judul artikel berikut, yang paling relevan dengan topik tugas Maya adalah ...',
    options: {
      A: 'Sejarah Penciptaan Komputer Generasi Pertama',
      B: 'Daftar Harga Perangkat Medis Rumah Sakit Tahun Ini',
      C: 'Pemanfaatan Robot AI untuk Membantu Operasi Bedah Jantung',
      D: 'Tips Lulus Ujian Masuk Fakultas Kedokteran',
    },
    answer: 'C',
    explanation:
      'Artikel "Pemanfaatan Robot AI untuk Membantu Operasi Bedah Jantung" secara langsung membahas penerapan kecerdasan buatan (AI) di bidang medis.',
  },
  {
    id: 23,
    topic: 'Relevansi Informasi',
    question:
      'Rudi ingin memahami tentang daur hidup kupu-kupu. Ia mencari artikel di internet. Namun, ia menemukan artikel berjudul "Cara Merawat Bunga agar Mengundang Kupu-kupu". Analisis relevansi artikel ini terhadap kebutuhan Rudi adalah ...',
    options: {
      A: 'Sangat relevan, karena ada kata "kupu-kupu" di judulnya.',
      B: 'Kurang relevan, karena artikel tersebut lebih fokus pada tips merawat bunga, bukan daur hidup kupu-kupu.',
      C: 'Tidak relevan sama sekali karena membahas hal yang salah.',
      D: 'Sangat relevan, karena kupu-kupu membutuhkan bunga untuk hidup.',
    },
    answer: 'B',
    explanation:
      'Relevansi tidak cukup dilihat dari kesamaan satu kata di judul; isi artikel tersebut membahas perawatan tanaman, bukan fase metamorfosis/daur hidup kupu-kupu.',
  },
  {
    id: 24,
    topic: 'Relevansi Informasi',
    question:
      'Doni mendapat tugas membuat makalah tentang "Pemanfaatan Tenaga Surya di Daerah Pedesaan". Ia menemukan empat artikel dengan judul berikut:\na. Harga Panel Surya di Kota Besar\nb. Inovasi Pompa Air Tenaga Matahari untuk Petani Desa X\nc. Cara Membuat Baterai dari Bahan Kimia\nd. Sejarah Ditemukannya Listrik\nArtikel manakah yang memiliki tingkat relevansi paling tinggi untuk digunakan sebagai referensi utama tugas Doni?',
    options: {
      A: 'Artikel a',
      B: 'Artikel b',
      C: 'Artikel c',
      D: 'Artikel d',
    },
    answer: 'B',
    explanation:
      'Artikel b membahas langsung pemanfaatan energi matahari (tenaga surya) dalam konteks masyarakat pedesaan (petani desa), sesuai topik makalah Doni.',
  },
  {
    id: 25,
    topic: 'Keaktualan Informasi',
    question:
      'Budi perlu menyajikan data tentang "Jumlah Pengguna Smartphone di Indonesia" untuk presentasinya besok. Ia memiliki dua referensi, yaitu buku cetakan tahun 2012 dan jurnal online terbitan tahun 2023. Tindakan evaluasi data yang paling tepat dilakukan Budi adalah ...',
    options: {
      A: 'Menggunakan buku tahun 2012 karena buku cetak selalu lebih dapat dipercaya.',
      B: 'Memilih jurnal online tahun 2023 karena data teknologi berubah cepat dan jurnal tersebut memiliki keaktualan data yang lebih relevan.',
      C: 'Tidak menggunakan keduanya karena data pengguna smartphone tidak pernah akurat.',
      D: 'Mengambil nilai tengah dari kedua sumber data tersebut.',
    },
    answer: 'B',
    explanation:
      'Untuk topik teknologi yang cepat berubah, keaktualan (up-to-date) sangat penting. Jurnal terbitan 2023 jauh lebih mencerminkan kondisi terkini daripada buku 2012.',
  },
  {
    id: 26,
    topic: 'Keaktualan Informasi',
    question:
      'Sebuah situs kesehatan A menyajikan artikel tentang protokol penanganan virus varian baru yang dipublikasikan kemarin. Sedangkan situs B menyajikan protokol virus sejenis yang diterbitkan tiga tahun lalu. Berdasarkan asas keaktualan (update) data, artikel di situs A lebih layak dijadikan referensi karena ...',
    options: {
      A: 'Ditulis oleh dokter yang usianya lebih tua dan berpengalaman.',
      B: 'Diterbitkan kemarin sehingga menyajikan perkembangan terkini dari kondisi medis mutakhir.',
      C: 'Telah dibagikan ribuan kali di grup warga.',
      D: 'Menggunakan font teks yang lebih mudah dibaca masyarakat awam.',
    },
    answer: 'B',
    explanation:
      'Asas keaktualan melihat kapan informasi dipublikasikan atau diperbarui. Artikel terbaru memuat protokol kesehatan yang sesuai dengan perkembangan varian baru.',
  },
  {
    id: 27,
    topic: 'Keaktualan Informasi',
    question:
      'Santi mencari data statistik jumlah penduduk Provinsi Y. Ia menemukan dua situs web pemerintah.\nSitus A mempublikasikan data sensus pada 15 Januari 2010 dengan total 2 juta jiwa.\nSitus B mempublikasikan data sensus terbaru pada 20 Februari 2023 dengan total 3,5 juta jiwa.\nUntuk mendapatkan informasi yang paling tepat dan dapat diandalkan untuk tahun ini, Santi harus memilih Situs B karena alasan ...',
    options: {
      A: 'Jumlah penduduk pada Situs B lebih banyak, sehingga datanya lebih lengkap.',
      B: 'Situs B menyajikan tingkat keaktualan (update) data numerik yang lebih relevan dengan kondisi masa kini.',
      C: 'Situs A sudah dihapus dari mesin pencari karena datanya salah.',
      D: 'Situs B dipublikasikan pada bulan Februari yang merupakan bulan pelaporan akhir tahun.',
    },
    answer: 'B',
    explanation:
      'Data sensus penduduk terus berubah seiring waktu. Situs B menyediakan data terbaru (2023) yang paling relevan untuk menggambarkan jumlah penduduk saat ini.',
  },
  {
    id: 28,
    topic: 'Ekstensi Domain & Kredibilitas',
    question:
      'Disediakan daftar URL (alamat situs web) berikut ini:\n1) www.belajarbersama.com\n2) www.kemdikbud.go.id\n3) www.hobisaya.net\n4) www.sekolahmaju.sch.id\nBerdasarkan ekstensinya, situs web yang dipastikan resmi dikelola oleh lembaga pemerintahan dan institusi pendidikan adalah ...',
    options: {
      A: '1 dan 3',
      B: '2 dan 4',
      C: '1 dan 2',
      D: '3 dan 4',
    },
    answer: 'B',
    explanation:
      'Domain .go.id khusus untuk instansi pemerintah Indonesia (Government) dan .sch.id khusus untuk sekolah resmi di Indonesia (School).',
  },
  {
    id: 29,
    topic: 'Ekstensi Domain & Kredibilitas',
    question:
      'Lina diinstruksikan oleh gurunya untuk mengambil referensi dari situs-situs web institusi akademik tingkat perguruan tinggi atau universitas di Indonesia. Maka, ia harus mencari situs web dengan ekstensi domain ...',
    options: {
      A: '.ac.id',
      B: '.co.id',
      C: '.com',
      D: '.org',
    },
    answer: 'A',
    explanation:
      'Ekstensi .ac.id (Academic Indonesia) digunakan khusus oleh perguruan tinggi dan universitas resmi di Indonesia, sedangkan .co.id untuk perusahaan komersial.',
  },
  {
    id: 30,
    topic: 'Ekstensi Domain & Kredibilitas',
    question:
      'Daftar alamat situs web (URL) berikut ditemukan saat mencari referensi kurikulum sekolah:\na. belajarkomputer.com\nb. materi.blogspot.com\nc. smpn1cerdas.sch.id\nd. forumguru.net\nBerdasarkan ekstensi domainnya, situs web manakah yang merupakan domain resmi lembaga pendidikan di Indonesia?',
    options: {
      A: 'a',
      B: 'b',
      C: 'c',
      D: 'd',
    },
    answer: 'C',
    explanation:
      'smpn1cerdas.sch.id menggunakan ekstensi .sch.id yang memerlukan verifikasi resmi sebagai lembaga sekolah di Indonesia.',
  },
];
