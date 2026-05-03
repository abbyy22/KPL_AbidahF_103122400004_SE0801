import { hitungHuruf, hitungKata } from './index.js';

// --- Pengujian hitungHuruf ---
console.log('=== Uji hitungHuruf ===');
console.log(hitungHuruf('Hello World'));     // 10 (H,e,l,l,o,W,o,r,l,d)
console.log(hitungHuruf('abc 123 !@#'));    // 3  (a,b,c)
console.log(hitungHuruf(''));               // 0
console.log(hitungHuruf('   '));            // 0
console.log(hitungHuruf('Pemrograman'));    // 11

// --- Pengujian hitungKata ---
console.log('\n=== Uji hitungKata ===');
console.log(hitungKata('Hello World'));     // 2
console.log(hitungKata('abc 123 def'));     // 2  ('abc' dan 'def', '123' bukan kata)
console.log(hitungKata(''));               // 0
console.log(hitungKata('   '));            // 0
console.log(hitungKata('satu dua tiga'));  // 3