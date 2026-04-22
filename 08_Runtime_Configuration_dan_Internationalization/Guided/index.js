require('dotenv').config()

/*
function ambilData() {
    const mode = process.env.NODE_ENV;
    console.log(`Mode apa: ${mode}`);
    // ini bukan ' tapi `
}

ambilData();

function ambilData1() {
    const mode = process.env.SECRET;
    console.log(`Mode apa: ${mode}`);
    // ini bukan ' tapi `
}

ambilData1();


async function ambilData2() {
    try{
        const response = await fetch(process.env.BASE_API, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) throw new Error();

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

ambilData2();

*/

const angka = 19000;

const formatter = new Intl.NumberFormat('id-ID', {
    notation: 'compact',
    compactDisplay: 'long',
});

console.log(formatter.format(angka));