/**
 * 
 * @param {number} value bilangan bulat
 * @returns {number | string} hasil transformasi bilbul jadi string
 */


function zzzzOrNum(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}


/**
 * 
 * @param {number[]} sequence array of numbers
 * @returns {Array<number | string>} 
 */

function fizzBuzz(sequence) {
    // Ubah kode di sini

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};


/*
npm init -y
npm install typescript --save-dev
node test.js
 */