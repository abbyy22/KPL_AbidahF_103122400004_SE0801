/**
 * Pustaka utilitas teks
 * Menyediakan fungsi untuk menghitung huruf dan kata dalam sebuah string.
 *
 * Kriteria:
 * - Hanya alfabet A-Z (besar dan kecil) yang dihitung
 * - Spasi tidak dihitung
 */

/**
 * Menghitung jumlah huruf (A-Z, a-z) dalam sebuah string.
 * @param {string} teks - String yang akan dihitung hurufnya.
 * @returns {number} Jumlah huruf alfabet dalam string.
 */
export function hitungHuruf(teks) {
  if (typeof teks !== 'string') return 0;
  const hurufSaja = teks.match(/[a-zA-Z]/g);
  return hurufSaja ? hurufSaja.length : 0;
}

/**
 * Menghitung jumlah kata dalam sebuah string.
 * Kata didefinisikan sebagai urutan karakter alfabet (A-Z, a-z) yang berurutan.
 * Angka, spasi, dan karakter non-alfabet tidak dihitung sebagai bagian dari kata.
 * @param {string} teks - String yang akan dihitung katanya.
 * @returns {number} Jumlah kata dalam string.
 */
export function hitungKata(teks) {
  if (typeof teks !== 'string') return 0;
  const kata = teks.match(/[a-zA-Z]+/g);
  return kata ? kata.length : 0;
}