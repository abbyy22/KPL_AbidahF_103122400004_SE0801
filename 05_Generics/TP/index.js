/**
 * @param {string} str - Teks yang akan dihitung
 * @param {"semua" | "huruf"} mode - Mode penghitungan
 * @returns {number | undefined} Jumlah karakter sesuai mode
 */
function hitung(str, mode) {
    if (mode === "semua") { // === itu ngecek nilai sama tipe datanya sekaligus
        let jumlah = 0;
        for (const c of str) { //const c of str itu buat ngambil setiap karakter dari string str
            jumlah++;
        }
        return jumlah;
    } else if (mode === "huruf") {
        let jumlah = 0;
        for (const c of str) {
            if (c === ' ') continue;
            jumlah++;
        }
        return jumlah;
    }
}

// Test
const str = "Bar bar bar";

console.log(hitung(str, "semua"));
console.log(hitung(str, "huruf"));
hitung(str, "huruf"); // ini gaada output soalnya ga di console