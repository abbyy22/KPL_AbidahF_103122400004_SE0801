# Tugas Mandiri 14: Clean Code

Nama : Abidah F

Kelas : SE08-01

NIM : 103122400004

**Soal**

![alt text](<Cuplikan layar 2026-06-10 075958.png>)

**Penjelasan**

Menurut saya kode kedua jauh lebih mudah di-debug jam 1 malam, karena:

1. Lebih mudah dibaca sekilas

```js
if (!isValidCandidate(user)) return null;
return doSomething(user);
```
vs kode 1 yang punya 3 level nested if otak yang ngantuk gampang salah baca alurnya.

2. Kondisi validasi terpusat
Fungsi `isValidCandidate()` mengumpulkan semua syarat (`user && user.isActive && user.hasPermission`) di **satu tempat**. Kalau ada bug validasi, cukup cek satu fungsi.

3. Pakai Early Return
Kode 2 langsung keluar (`return null`) kalau tidak valid tidak perlu trace alur sampai ke bawah untuk tahu kapan fungsi return null.

4. Kalau ada bug, lebih mudah isolasi
- Bug di validasi? → cek `isValidCandidate`
- Bug di logika utama? → cek `processUser`

Kode 1 mencampur semua logika dalam satu fungsi bersarang, jadi lebih susah diisolasi saat panik tengah malam.
