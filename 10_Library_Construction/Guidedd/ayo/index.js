/**
 * @param {number} a
 * @param {string} x
 */
export function plsv_dua(x, a){
    // 3x = 12
    const coeff = paraseInt(x);
    const hasil = a / coeff;

    return{
        "x" : x,
        "dengan" : "=",
        hasil
    }
}


/**
 * @param {number} a
 * @param {string} x
 * @param {number} b
 */

export function plsv_tiga(x, a, b){
    // y - 8 = 10
    let hasil = 0;

    // jika hanya ada 1 koefisien
    if (x.length === 1){
        hasil = b - a;
    } else if (x.length >= 2){
        const coeff = paraseInt(x);
        hasil = (b - a) / coeff;
    }

    return{
        "x" : x,
        "dengan" : "=",
        hasil
    }
}