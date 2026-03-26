// =============================================
// app.js — Navigasi & logika utama MantiqApp
// =============================================

function navigateTo(target) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const section = document.getElementById(target);
  if (section) section.classList.add('active');
  const btn = document.querySelector(`.nav-btn[data-target="${target}"]`);
  if (btn) btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {

  // Navigasi tombol navbar
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      navigateTo(this.dataset.target);
    });
  });

  // Toggle mobile menu
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Materi tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const tab = document.getElementById(this.dataset.tab);
      if (tab) tab.classList.add('active');
    });
  });

  // Validator: Enter key
  const inputProp = document.getElementById('inputProposisi');
  if (inputProp) {
    inputProp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        validasiProposisi();
      }
    });
  }

  // Kalkulator: Enter key
  const inputMinor = document.getElementById('premisMinor');
  if (inputMinor) {
    inputMinor.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') prosesQiyas();
    });
  }
});

// Reset fungsi untuk validator
function resetValidator() {
  document.getElementById('inputProposisi').value = '';
  const hasil = document.getElementById('hasilValidator');
  hasil.classList.add('hidden');
  hasil.className = 'hasil-box hidden';
}
