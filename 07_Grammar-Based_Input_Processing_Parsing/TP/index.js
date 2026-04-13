function toNumberArray(number) {
    if (typeof number === 'string') {
        return number.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    } else if (Array.isArray(number)) {
        return number.map(num => parseFloat(num)).filter(num => !isNaN(num));
    }
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]