// DOM Document Object Model

const elemenEditor = document.getElementById("editor-kecil");

const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");
const elemenHk = document.getElementById("hk");


function hitungHuruf(event) {
    // const inputIsi = elemenEditor.value.length;
    const inputIsi = event.target.value;

    // ['K', 'a', 't'. 'a', '-', ...]
    const chr = inputIsi.split('');

    let jumlahHurufSejati = 0;
    let jumlahHurufBesar = 0;
    let jumlahHurufKecil = 0;

    const spasi = /\s+/;
    const besar = /[A-Z]/;
    const kecil = /[a-z]/;

    chr.forEach(karakter => {
        if (spasi.test(karakter)) {
            return;
        }

        if (besar.test(karakter)) {
            jumlahHurufBesar = jumlahHurufBesar + 1
        }

        if (kecil.test(karakter)) {
            jumlahHurufKecil = jumlahHurufKecil + 1;
        }


        jumlahHurufSejati = jumlahHurufSejati + 1;
    });

    elemenHf.textContent = jumlahHurufSejati;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil;

}

elemenEditor.addEventListener("input", hitungHuruf);

function kapital() {
    elemenEditor.value = elemenEditor.value.toUpperCase();
    hitungHuruf({ target: elemenEditor });
}

function kecil() {
    elemenEditor.value = elemenEditor.value.toLowerCase();
    hitungHuruf({ target: elemenEditor });
}



const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");



// load preference
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
}

buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
});

buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
});
