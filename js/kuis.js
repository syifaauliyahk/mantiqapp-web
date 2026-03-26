// =============================================
// kuis.js — Bank Soal Ilmu Mantiq
// =============================================

const BANK_SOAL = [
  {
    soal: "Ilmu Mantiq dikenal dengan nama lain dalam tradisi keilmuan Barat. Dalam bahasa Barat, ilmu ini disebut...",
    pilihan: ["Filsafat", "Logika", "Retorika", "Matematika"],
    kunci: 1,
    pembahasan: "Mantiq dalam bahasa Arab setara dengan Logika dalam bahasa Barat, yang berasal dari kata Yunani 'logos' yang berarti pikiran atau akal. Keduanya membahas hal yang sama, yaitu metode berpikir yang benar dan sistematis."
  },
  {
    soal: "Anda mencium aroma masakan dari kejauhan dan langsung mengetahui bahwa ada orang yang sedang memasak di sekitar situ. Dalam Ilmu Mantiq, 'aroma masakan' sebagai penanda adanya aktivitas memasak adalah contoh dari...",
    pilihan: ["Tasawwur", "Tashdiq", "Dilalah", "Qiyas"],
    kunci: 2,
    pembahasan: "Dilalah adalah proses memahami sesuatu (madlul) melalui sesuatu yang lain (dall). Aroma masakan berperan sebagai dall (penanda), sedangkan aktivitas memasak adalah madlul (yang ditandakan). Ini termasuk Dilalah Thabi'iyyah, yaitu dilalah yang bersifat alami."
  },
  {
    soal: "Manakah di antara pernyataan berikut yang BUKAN termasuk proposisi (qadhiyyah)?",
    pilihan: [
      "Semua kucing adalah hewan.",
      "Tolong tutup pintunya!",
      "Sebagian burung tidak dapat terbang.",
      "Tidak ada manusia yang hidup selamanya."
    ],
    kunci: 1,
    pembahasan: "Proposisi adalah pernyataan yang dapat dinilai benar atau salah. Kalimat perintah 'Tolong tutup pintunya!' tidak dapat dinilai benar atau salahnya, sehingga tidak termasuk proposisi. Tiga pilihan lainnya dapat dinilai kebenarannya."
  },
  {
    soal: "Ketika Anda pertama kali mendengar istilah 'demokrasi' dan mulai membayangkan maknanya dalam pikiran — tanpa menilai apakah demokrasi itu baik atau buruk — proses ini dalam Ilmu Mantiq disebut...",
    pilihan: ["Tashdiq", "Tasawwur", "Dilalah Lafzhiyyah", "Qiyas Tamtsili"],
    kunci: 1,
    pembahasan: "Tasawwur adalah proses membentuk gambaran atau konsep sesuatu dalam pikiran tanpa memberikan penilaian benar atau salah. Apabila sudah muncul penilaian seperti baik atau buruk, benar atau salah, maka proses tersebut telah masuk ke tahap Tashdiq."
  },
  {
    soal: "Pernyataan 'Tidak ada koruptor yang layak untuk dihormati' termasuk jenis proposisi...",
    pilihan: [
      "Kulliyyah Mujibah (A) — Universal Afirmatif",
      "Kulliyyah Salibah (E) — Universal Negatif",
      "Juz'iyyah Mujibah (I) — Parsial Afirmatif",
      "Juz'iyyah Salibah (O) — Parsial Negatif"
    ],
    kunci: 1,
    pembahasan: "Kulliyyah Salibah (E) ditandai dengan penggunaan kata 'tidak ada' dan bersifat negatif secara menyeluruh, artinya tidak satu pun anggota subjek masuk ke dalam predikat. Tanaqudh (kontradiksinya) adalah: 'Sebagian koruptor layak untuk dihormati' yang termasuk Juz'iyyah Mujibah (I)."
  },
  {
    soal: "Perhatikan qiyas berikut: 'Semua logam dapat menghantarkan listrik. Tembaga adalah logam. Maka, tembaga dapat menghantarkan listrik.' Kata 'logam' yang muncul pada kedua premis disebut...",
    pilihan: ["Had Ashghar (term kecil)", "Had Akbar (term besar)", "Had Awsath (term tengah)", "Natijah (kesimpulan)"],
    kunci: 2,
    pembahasan: "Had Awsath atau term tengah adalah kata penghubung yang muncul pada kedua premis, namun tidak muncul dalam kesimpulan. Kata 'logam' muncul di premis mayor dan premis minor, tetapi tidak di kesimpulan. Had Awsath inilah yang menjadi kunci agar qiyas dapat bekerja secara valid."
  },
  {
    soal: "Seorang ulama menyamakan hukum tuak dengan khamar karena keduanya sama-sama memabukkan. Metode penarikan kesimpulan seperti ini dalam Ilmu Mantiq disebut...",
    pilihan: ["Istiqra' (Induktif)", "Qiyas Mantiqi (Deduktif)", "Qiyas Tamtsili (Analogi)", "Qiyas Murakkab (Berantai)"],
    kunci: 2,
    pembahasan: "Qiyas Tamtsili (Analogi) adalah metode menyamakan hukum dua hal karena terdapat kesamaan sifat atau akibat. Tuak dan khamar memiliki kesamaan, yaitu sama-sama memabukkan, sehingga hukumnya pun disamakan menjadi haram. Metode ini banyak digunakan dalam kajian Ushul Fiqh."
  },
  {
    soal: "Seseorang berargumen: 'Pasti dia sedang banyak masalah, lihat saja badannya sangat kurus.' Jenis kekeliruan berpikir apa yang terdapat dalam argumen tersebut?",
    pilihan: [
      "Fallacy of Four Terms — menggunakan kata dengan dua makna berbeda",
      "Fallacy of Undistributed Middle — term penghubung tidak mencakup semua anggota",
      "Fallacy of Hasty Generalization — tergesa-gesa dalam menarik kesimpulan",
      "Fallacy of Appeal to Authority — mendasarkan argumen pada otoritas"
    ],
    kunci: 1,
    pembahasan: "Ini termasuk Fallacy of Undistributed Middle. Premis yang digunakan adalah 'orang yang banyak masalah cenderung kurus', namun tidak berarti berlaku sebaliknya bahwa 'semua orang kurus pasti banyak masalah'. Seseorang bisa bertubuh kurus karena berbagai sebab lain, seperti faktor genetik, pola makan, atau kondisi kesehatan."
  },
  {
    soal: "Dua pernyataan disebut Tanaqudh (kontradiksi) apabila...",
    pilihan: [
      "Keduanya membahas topik yang berbeda.",
      "Salah satunya pasti benar dan yang lainnya pasti salah, tidak dapat keduanya benar sekaligus.",
      "Keduanya dapat benar sekaligus bergantung pada situasi tertentu.",
      "Keduanya sama-sama menggunakan kata 'semua' atau 'tidak ada'."
    ],
    kunci: 1,
    pembahasan: "Tanaqudh terjadi ketika dua proposisi memiliki subjek dan predikat yang sama, namun satu bersifat universal-positif dan yang lainnya parsial-negatif, atau sebaliknya. Hasilnya adalah salah satu proposisi pasti benar dan yang lainnya pasti salah — keduanya tidak dapat benar sekaligus dan tidak dapat salah sekaligus."
  },
  {
    soal: "Para ilmuwan mengamati bahwa manusia, sapi, kuda, kucing, dan monyet semuanya menggerakkan rahang bagian bawahnya saat mengunyah makanan. Dari pengamatan ini, mereka menyimpulkan bahwa semua binatang menggerakkan rahang bawahnya saat makan. Metode ini disebut...",
    pilihan: [
      "Qiyas Mantiqi — dari pernyataan umum ke kesimpulan khusus",
      "Istiqra' — dari kasus-kasus khusus ke kesimpulan umum",
      "Qiyas Tamtsili — menyamakan dua hal karena kesamaan sifat",
      "Qiyas Murakkab — kesimpulan berantai dari satu qiyas ke qiyas berikutnya"
    ],
    kunci: 1,
    pembahasan: "Istiqra' (Induktif) adalah metode menarik kesimpulan umum dari sejumlah kasus khusus yang diamati. Para ilmuwan mengamati banyak kasus spesifik, lalu menarik kesimpulan yang berlaku umum. Kelemahan metode ini adalah kesimpulannya bersifat relatif dan dapat berubah jika ditemukan kasus yang berbeda."
  }
];

let nomorSoal = 0;
let totalSkor = 0;
let sudahMenjawab = false;

function mulaiKuis() {
  nomorSoal = 0;
  totalSkor = 0;
  sudahMenjawab = false;
  document.getElementById('kuisStart').classList.add('hidden');
  document.getElementById('kuisHasil').classList.add('hidden');
  document.getElementById('kuisSoal').classList.remove('hidden');
  tampilkanSoal();
}

function tampilkanSoal() {
  sudahMenjawab = false;
  const soal = BANK_SOAL[nomorSoal];
  const progress = ((nomorSoal + 1) / BANK_SOAL.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('nomorSoalLabel').textContent = 'Soal ' + (nomorSoal + 1) + ' dari ' + BANK_SOAL.length;
  document.getElementById('skorSementara').textContent = 'Skor: ' + totalSkor;
  document.getElementById('pertanyaan').textContent = soal.soal;

  const container = document.getElementById('pilihanContainer');
  container.innerHTML = '';
  const huruf = ['A', 'B', 'C', 'D'];
  soal.pilihan.forEach(function(pilihan, i) {
    const btn = document.createElement('button');
    btn.className = 'pilihan-btn';
    btn.innerHTML = '<span class="pilihan-huruf">' + huruf[i] + '</span> ' + pilihan;
    btn.onclick = function() { prosesJawaban(i); };
    container.appendChild(btn);
  });

  const feedback = document.getElementById('feedbackBox');
  feedback.classList.add('hidden');
  feedback.className = 'feedback-box hidden';
  document.getElementById('nextBtn').classList.add('hidden');
}

function prosesJawaban(indexPilihan) {
  if (sudahMenjawab) return;
  sudahMenjawab = true;
  const soal = BANK_SOAL[nomorSoal];
  const tombol = document.querySelectorAll('.pilihan-btn');
  const benar = indexPilihan === soal.kunci;
  if (benar) totalSkor++;

  tombol.forEach(function(btn, i) {
    btn.disabled = true;
    if (i === soal.kunci) btn.classList.add('benar');
    if (i === indexPilihan && !benar) btn.classList.add('salah');
  });

  const feedback = document.getElementById('feedbackBox');
  feedback.classList.remove('hidden', 'benar', 'salah');
  feedback.classList.add(benar ? 'benar' : 'salah');
  feedback.innerHTML = (benar
    ? '&#10003; <strong>Jawaban Anda benar!</strong> '
    : '&#10007; <strong>Jawaban kurang tepat.</strong> ') + soal.pembahasan;

  document.getElementById('skorSementara').textContent = 'Skor: ' + totalSkor;

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = nomorSoal === BANK_SOAL.length - 1
    ? 'Lihat Hasil Akhir \uD83C\uDFC6'
    : 'Soal Berikutnya \u2192';
}

function soalBerikutnya() {
  nomorSoal++;
  if (nomorSoal < BANK_SOAL.length) {
    tampilkanSoal();
  } else {
    tampilkanHasilAkhir();
  }
}

function tampilkanHasilAkhir() {
  document.getElementById('kuisSoal').classList.add('hidden');
  document.getElementById('kuisHasil').classList.remove('hidden');
  const persentase = Math.round((totalSkor / BANK_SOAL.length) * 100);

  let emoji, predikat, pesan;
  if (persentase >= 90) {
    emoji = '\uD83C\uDFC6';
    predikat = 'Luar Biasa!';
    pesan = 'Pemahaman Anda tentang Ilmu Mantiq sudah sangat baik. Pertahankan dan terus kembangkan kemampuan berpikir logis Anda.';
  } else if (persentase >= 70) {
    emoji = '\u2B50';
    predikat = 'Bagus Sekali!';
    pesan = 'Pemahaman Anda sudah cukup kuat. Tinjau kembali bagian yang masih kurang untuk menyempurnakan penguasaan materi.';
  } else if (persentase >= 50) {
    emoji = '\uD83D\uDCDA';
    predikat = 'Cukup Baik!';
    pesan = 'Anda sudah memiliki dasar yang baik. Pelajari kembali materi secara menyeluruh, lalu coba kuis ini sekali lagi.';
  } else {
    emoji = '\uD83D\uDCAA';
    predikat = 'Tetap Semangat!';
    pesan = 'Jangan putus asa! Mulailah dengan membaca materi dari awal, terutama bagian Proposisi dan Qiyas, kemudian coba kuis ini kembali.';
  }

  document.getElementById('hasilEmoji').textContent = emoji;
  document.getElementById('hasilPredikat').textContent = predikat;
  document.getElementById('hasilSkorBesar').textContent = totalSkor + ' / ' + BANK_SOAL.length;
  document.getElementById('hasilPesan').textContent = pesan;
  document.getElementById('hasilRingkasan').innerHTML =
    'Jawaban benar: <strong>' + totalSkor + '</strong> dari <strong>' + BANK_SOAL.length +
    '</strong> soal &nbsp;|&nbsp; Nilai: <strong>' + persentase + '%</strong>';
}

function ulangiKuis() {
  document.getElementById('kuisHasil').classList.add('hidden');
  document.getElementById('kuisStart').classList.remove('hidden');
}
