function devide(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new TypeError('Salah tipe data banh');
    }
    if (b === 0) {
        throw new Error('Pembagi tidak boleh nol');
    }
    const hasil = a / b;

    if (hasil * b === a) { 
        return hasil;
    }
    return hasil;
}

try {
    console.log(devide(10, 2));
}catch (error) {
    console.log(error);
}