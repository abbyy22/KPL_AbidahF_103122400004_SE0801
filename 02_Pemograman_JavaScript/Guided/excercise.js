/* minuman kesukaan 3, list minuman
ganti 2 elemen pertama pake minuman lain
caranya index dan penugasan
tambah 1 minuman di depan array */

const listMinuman = ['matcha latte', 'susu stroberi', 'alpukat kocok'];

// ganti 2 elemen pertama pake minuman lain
listMinuman[0] = 'jus jambu';
listMinuman[1] = 'air mineral';

// tambah 1 minuman di depan array
listMinuman.unshift('es teh');

console.log(listMinuman);


/*sebuah fungsi yang nerima bilangan
ngembaliin nilai penjumlahan dari 1 sampai bilangan tersebut*/

function penjumlahan(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(penjumlahan(7));
