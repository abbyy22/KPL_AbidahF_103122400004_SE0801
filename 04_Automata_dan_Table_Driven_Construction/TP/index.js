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
const buttonSephiaElement = document.getElementById("tombol-sephia");

class ModeState {
    #state;

    constructor() {
        this.#state = localStorage.getItem("theme") || "light";
        this.apply(this.#state);
    }

    set state(newState) {
        if (newState === this.#state) return;
        this.#state = newState;
        this.apply(newState);
        localStorage.setItem("theme", newState);
    }

    apply(state) {
        document.documentElement.classList.remove("dark-mode", "sephia-mode");

        if (state === "dark") {
            document.documentElement.classList.add("dark-mode");
        } else if (state === "sephia") {
            document.documentElement.classList.add("sephia-mode");
        }
    }
}

const mode = new ModeState();

buttonDarkElement.addEventListener("click", () => { mode.state = "dark"; });
buttonLightElement.addEventListener("click", () => { mode.state = "light"; });
buttonSephiaElement.addEventListener("click", () => { mode.state = "sephia"; }); // tambah ini
