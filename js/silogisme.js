// =============================================
// silogisme.js — Kalkulator Silogisme & Validator
// =============================================

// Daftar kata kerja yang didukung
const VERBS = [
  'membutuhkan',
  'memerlukan',
  'mempunyai',
  'mengandung',
  'menghasilkan',
  'melakukan',
  'merupakan',
  'termasuk',
  'bersifat',
  'adalah',
  'ialah',
  'dapat',
  'bisa',
  'harus',
  'pasti',
  'butuh',
  'perlu',
  'akan',
];

function prosesQiyas() {
  const mayor = document.getElementById('premisMayor').value.trim();
  const minor = document.getElementById('premisMinor').value.trim();
  const hasilBox = document.getElementById('hasilQiyas');

  if (!mayor || !minor) {
    tampilHasil(hasilBox, 'error', '&#9888;', 'Data Belum Lengkap',
      'Kedua premis harus diisi sebelum menarik kesimpulan.',
      'Silakan isi Premis Mayor dan Premis Minor terlebih dahulu.');
    return;
  }

  const mayorLower = mayor.toLowerCase().trim();
  const minorLower = minor.toLowerCase().trim();

  // ── LANGKAH 1: Periksa keberadaan kuantifier pada premis mayor ──
  const pakaiKuantifier = /^(?:semua|setiap|seluruh)\b/i.test(mayorLower);
  if (!pakaiKuantifier) {
    tampilHasil(hasilBox, 'error', '&#10007;', 'Format Premis Mayor Tidak Valid',
      'Premis mayor tidak dapat dikenali oleh sistem.',
      'Gunakan pola: <strong>Semua / Setiap [subjek] [kata kerja] [predikat]</strong><br><br>' +
      'Contoh yang valid:<br>' +
      '&bull; "Semua manusia <u>adalah</u> makhluk fana"<br>' +
      '&bull; "Semua tumbuhan <u>membutuhkan</u> air"<br>' +
      '&bull; "Setiap besi <u>akan memuai jika</u> dipanaskan"<br>' +
      '&bull; "Setiap yang memabukkan <u>adalah</u> haram"');
    return;
  }

  // Hapus kuantifier dari awal kalimat
  let mayorBersih = mayorLower.replace(/^(?:semua|setiap|seluruh)\s+/, '');

  // ── LANGKAH 2: Ekstrak subjek dan predikat dari premis mayor ──
  let subjekMayor = null;
  let predikatMayor = null;
  let kataKerjaMayor = null;

  for (const verb of VERBS) {
    const idx = mayorBersih.indexOf(verb);
    if (idx > 0) {
      subjekMayor    = mayorBersih.substring(0, idx).trim();
      kataKerjaMayor = verb.trim();
      predikatMayor  = mayorBersih.substring(idx + verb.length).trim();
      predikatMayor  = predikatMayor.replace(/\s*[,\.;].*$/, '').trim();
      break;
    }
  }

  if (!subjekMayor || !predikatMayor) {
    tampilHasil(hasilBox, 'error', '&#10007;', 'Format Premis Mayor Tidak Valid',
      'Premis mayor tidak dapat dikenali oleh sistem.',
      'Gunakan pola: <strong>Semua / Setiap [subjek] [kata kerja] [predikat]</strong><br><br>' +
      'Contoh yang valid:<br>' +
      '&bull; "Semua manusia <u>adalah</u> makhluk fana"<br>' +
      '&bull; "Semua tumbuhan <u>membutuhkan</u> air"<br>' +
      '&bull; "Setiap besi <u>akan memuai jika dipanaskan</u>"<br>' +
      '&bull; "Setiap yang memabukkan <u>adalah</u> haram"');
    return;
  }

  // ── LANGKAH 3: Ekstrak subjek dan predikat dari premis minor ──
  let subjekMinor = null;
  let predikatMinor = null;

  for (const verb of VERBS) {
    const idx = minorLower.indexOf(verb);
    if (idx > 0) {
      subjekMinor   = minorLower.substring(0, idx).trim();
      predikatMinor = minorLower.substring(idx + verb.length).trim();
      predikatMinor = predikatMinor.replace(/\s*[,\.;].*$/, '').trim();
      break;
    }
  }

  if (!subjekMinor || !predikatMinor) {
    tampilHasil(hasilBox, 'error', '&#10007;', 'Format Premis Minor Tidak Valid',
      'Premis minor tidak dapat dikenali oleh sistem.',
      'Gunakan pola: <strong>[nama/benda] adalah [kategori]</strong><br><br>' +
      'Contoh yang valid:<br>' +
      '&bull; "Ali <u>adalah</u> manusia"<br>' +
      '&bull; "Pohon <u>adalah</u> tumbuhan"<br>' +
      '&bull; "Kunci <u>adalah</u> besi"<br>' +
      '&bull; "Tuak <u>adalah</u> arak yang memabukkan"');
    return;
  }

  // ── LANGKAH 4: Periksa kesesuaian term tengah (middle term) ──
  const cocok = predikatMinor === subjekMayor ||
                predikatMinor.includes(subjekMayor) ||
                subjekMayor.includes(predikatMinor);

  if (!cocok) {
    tampilHasil(hasilBox, 'error', '&#10007;', 'Silogisme Tidak Valid',
      'Tidak terdapat kaitan antara kedua premis.',
      'Predikat premis minor "<strong>' + predikatMinor + '</strong>" tidak berkaitan dengan ' +
      'subjek premis mayor "<strong>' + subjekMayor + '</strong>".<br><br>' +
      'Pastikan predikat premis minor mengandung subjek premis mayor.<br><br>' +
      'Contoh yang benar:<br>' +
      '&bull; Mayor: "Setiap yang <u>memabukkan</u> adalah haram"<br>' +
      '&bull; Minor: "Tuak adalah arak yang <u>memabukkan</u>" &#10003;');
    return;
  }

  // ── LANGKAH 5: Susun kesimpulan ──
  const namaTampil = kapitalHurufPertama(subjekMinor);
  const kesimpulan = namaTampil + ' ' + kataKerjaMayor + ' ' + predikatMayor + '.';

  tampilHasil(hasilBox, 'success', '&#10003;', 'Kesimpulan (Natijah)',
    kesimpulan,
    '<strong>Analisis Silogisme:</strong><br>' +
    '&bull; Premis Mayor&nbsp;: <em>' + mayor + '</em><br>' +
    '&bull; Premis Minor&nbsp;&nbsp;: <em>' + minor + '</em><br>' +
    '&bull; Term Tengah (Had Awsath)&nbsp;: <strong>' + subjekMayor + '</strong><br>' +
    '&bull; Kata Kerja&nbsp;: <strong>' + kataKerjaMayor + '</strong><br>' +
    '&bull; Jenis Silogisme&nbsp;: Silogisme Kategoris (Qiyas Hamliy)');
}

function tampilHasil(box, tipe, icon, label, teks, detail) {
  box.classList.remove('hidden', 'success', 'error');
  box.classList.add(tipe);
  document.getElementById('hasilIcon').innerHTML    = icon;
  document.getElementById('hasilLabel').textContent = label;
  document.getElementById('hasilTeks').textContent  = teks;
  document.getElementById('hasilDetail').innerHTML  = detail;
}

function resetKalkulator() {
  document.getElementById('premisMayor').value = '';
  document.getElementById('premisMinor').value = '';
  const box = document.getElementById('hasilQiyas');
  box.classList.add('hidden');
  box.className = 'hasil-box hidden';
}

function isiContoh(mayor, minor) {
  document.getElementById('premisMayor').value = mayor;
  document.getElementById('premisMinor').value = minor;
  document.getElementById('hasilQiyas').classList.add('hidden');
}

function kapitalHurufPertama(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ════════════════════════════════════════════
// VALIDATOR PROPOSISI
// ════════════════════════════════════════════

const POLA_PROPOSISI = [
  {
    tipe: 'A',
    nama: 'Kulliyyah Mujibah',
    arabik: 'Universal Afirmatif',
    regex: /^(semua|setiap|seluruh)\b/i,
    warna: '#388E3C',
    bg: '#E8F5E9',
    penjelasan: 'Seluruh anggota subjek termasuk ke dalam predikat secara positif.',
    contoh: 'Semua manusia membutuhkan makan.'
  },
  {
    tipe: 'E',
    nama: 'Kulliyyah Salibah',
    arabik: 'Universal Negatif',
    regex: /^(tidak ada|tak ada|tak satu pun|tidak satu pun|tiada)\b/i,
    warna: '#E65100',
    bg: '#FFF3E0',
    penjelasan: 'Tidak satu pun anggota subjek yang termasuk ke dalam predikat.',
    contoh: 'Tidak ada manusia yang hidup selamanya.'
  },
  {
    tipe: 'I',
    nama: "Juz'iyyah Mujibah",
    arabik: 'Parsial Afirmatif',
    regex: /^(sebagian|beberapa|ada yang|ada beberapa)\b/i,
    warna: '#1E9A8C',
    bg: '#E0F7F5',
    penjelasan: 'Sebagian anggota subjek termasuk ke dalam predikat.',
    contoh: 'Sebagian hewan dapat terbang.'
  },
  {
    tipe: 'O',
    nama: "Juz'iyyah Salibah",
    arabik: 'Parsial Negatif',
    regex: /^(sebagian|beberapa).*(tidak|bukan|tak)\b/i,
    warna: '#D4B347',
    bg: '#FFFBEA',
    penjelasan: 'Sebagian anggota subjek tidak termasuk ke dalam predikat.',
    contoh: 'Sebagian burung tidak dapat terbang.'
  }
];

function validasiProposisi() {
  const input = document.getElementById('inputProposisi').value.trim();
  const hasilBox = document.getElementById('hasilValidator');

  if (!input) {
    tampilHasilValidator(hasilBox, 'error', '&#9888;', 'Kolom Masih Kosong',
      'Silakan masukkan sebuah pernyataan terlebih dahulu.', '');
    return;
  }

  const teks = input.toLowerCase();
  let ditemukan = null;

  // Periksa tipe O terlebih dahulu karena lebih spesifik dari tipe I
  if (POLA_PROPOSISI[3].regex.test(teks)) {
    ditemukan = POLA_PROPOSISI[3];
  } else {
    for (let i = 0; i < 3; i++) {
      if (POLA_PROPOSISI[i].regex.test(teks)) {
        ditemukan = POLA_PROPOSISI[i];
        break;
      }
    }
  }

  if (!ditemukan) {
    tampilHasilValidator(hasilBox, 'error', '&#10007;', 'Jenis Proposisi Tidak Terdeteksi',
      'Sistem tidak dapat menentukan jenis proposisi dari pernyataan tersebut.',
      'Pastikan pernyataan mengandung salah satu kata kunci berikut:<br>' +
      '&bull; <strong>Tipe A</strong>: semua, setiap, seluruh<br>' +
      '&bull; <strong>Tipe E</strong>: tidak ada, tiada, tak satu pun<br>' +
      '&bull; <strong>Tipe I</strong>: sebagian, beberapa, ada yang<br>' +
      '&bull; <strong>Tipe O</strong>: sebagian/beberapa + tidak/bukan');
    return;
  }

  const detail =
    '<strong>Tipe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</strong> ' + ditemukan.tipe + ' — ' + ditemukan.arabik + '<br>' +
    '<strong>Istilah Arab&nbsp;:</strong> ' + ditemukan.nama + '<br>' +
    '<strong>Penjelasan&nbsp;&nbsp;:</strong> ' + ditemukan.penjelasan + '<br>' +
    '<strong>Contoh lain&nbsp;:</strong> <em>' + ditemukan.contoh + '</em>';

  tampilHasilValidator(hasilBox, 'success', '&#10003;',
    'Tipe ' + ditemukan.tipe + ' — ' + ditemukan.nama,
    input, detail, ditemukan.bg, ditemukan.warna);
}

function tampilHasilValidator(box, tipe, icon, label, teks, detail, bg, warna) {
  bg    = bg    || '';
  warna = warna || '';
  box.classList.remove('hidden', 'success', 'error');
  box.classList.add(tipe);
  document.getElementById('valIcon').innerHTML    = icon;
  document.getElementById('valLabel').textContent = label;
  document.getElementById('valTeks').textContent  = teks;
  document.getElementById('valDetail').innerHTML  = detail;
  document.getElementById('valTeks').style.background = bg;
  document.getElementById('valLabel').style.color     = warna;
}

function resetValidator() {
  document.getElementById('inputProposisi').value = '';
  const box = document.getElementById('hasilValidator');
  box.classList.add('hidden');
  box.className = 'hasil-box hidden';
}
