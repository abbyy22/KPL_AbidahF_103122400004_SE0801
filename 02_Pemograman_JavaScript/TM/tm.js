function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    let result = [];

    for (let n of arr) {
        if (n % 14 === 0) {
            result.push("FizzBuzz");
        } else if (n % 2 === 0) {
            result.push("Fizz");
        } else if (n % 7 === 0) {
            result.push("Buzz");
        } else {
            result.push(n);
        }
    }

    let pakaiKoma = arr.some(n => n < 0 || n > 90);

    return pakaiKoma ? result.join(", ") : result.join(" ");
}

module.exports = fizzBuzz;
console.log(fizzBuzz([8, 9, 32, 75, 84]));