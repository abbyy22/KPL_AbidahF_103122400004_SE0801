const opmat = {
  tambah: (a, b) => a + b,
  kurang: (a, b) => a - b,
  kali: (a, b) => a * b,
  bagi: (a, b) => a / b
};

const ot = opmat.tambah;

// Hasilnya 3
console.log(
    ot(1, 2)
);