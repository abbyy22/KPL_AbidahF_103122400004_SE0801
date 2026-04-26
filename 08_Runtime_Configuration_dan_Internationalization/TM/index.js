/*
require('./dotenv/lib/main').config()

const angka1 = 25000;

const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    // ini diganti jadi currency untuk menampilkan simbol mata uang
    // currency untuk menentukan jenis mata uang yang digunakan
});

console.log(formatter.format(angka1).replace(/\s/g, ''));
// ditambahin replace untuk menghilangkan spasi yang ada di hasil format

function ambilData() {
    const mode = process.env.BASE_API;
    console.log(`Kurs pada  ${mode}`);
}

ambilData();
*/

require('./dotenv/lib/main').config()

const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
});

async function ambilData(angka) {
    const baseApi = process.env.BASE_API;

    const response = await fetch(baseApi);
    const data = await response.json();

    const rateCNH = data.idr.cnh;
    const rateEUR = data.idr.eur;

    const hasilCNH = angka * rateCNH;
    const hasilEUR = angka * rateEUR;

    const tanggal = new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date());

    const rp = formatter.format(angka).replace(/\s/g, '');

    const cnh = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(hasilCNH);
    const eur = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(hasilEUR);

    console.log(`Kurs ${rp} pada ${tanggal} adalah CNH ${cnh} dan ${eur} €`);
}

ambilData(25000);
ambilData(50000);
ambilData(100000);