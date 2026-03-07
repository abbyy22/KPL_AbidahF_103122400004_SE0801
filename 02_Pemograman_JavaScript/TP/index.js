//coba sesuai di tp

const arr1 = [1, -2, 3, -4, 5, -6];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) { //looping untuk mengakses setiap elemen dalam array
       if (arr[i] >= 0) { //kondisi untuk memeriksa apakah elemen tersebut lebih besar atau sama dengan 0
           result = result * arr[i]; //jika kondisi terpenuhi, maka hasil perkalian akan disimpan dalam variabel result
       } // 1*3*5 = 15, yang minus gabole ikut dikaliin, soalnya peraturannya >= 0
    }
    
    return result;
}

// Panggil fungsinya
const arr1Result = mulOfArray(arr1);
console.log(arr1Result);

// soal

const arr2 = [2, 0, 26, 28, -2];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
       if (arr[i] > 0) { //bedanya disini, 0 nya jangan diikutin biar hasilnya ga 0. soalnya semua yg dikaliin 0 = 0
           result = result * arr[i];
       } // 2*26*28 = 1456, yang minus dan 0 gabole ikut dikaliin, soalnya peraturannya > 0
    }
    
    return result;
}

// Panggil fungsinya
const arr2Result = mulOfArray(arr2);
console.log(arr2Result);