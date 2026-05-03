# Tugas Mandiri 09

Nama : Abidah F

Kelas : SE08-01

NIM : 103122400004

**Soal**

Tugasmu adalah membuat API yang terdiri dari satu endpoint saja, yaitu POST /. Ketika kita melakkukan POST, formatnya adalah seperti di bawah ini.

{
  "nama": "Hamid",
  "tebakan": 24
}
Jika tebakan benar.

{
    "jawaban": "Benar sekali! Tebakannya adalah 24."
}
Jika tebakan terlalu tinggi.

{
    "jawaban": "Tebakanmu terlalu tinggi!"
}
Jika tebakan terlalu rendah.

{
    "jawaban": "Tebakanmu terlalu rendah!"
}
Beberapa aturan:

Angka acak yang dihasilkan harus tetap dan tidak boleh berubah setiap kali permintaan API dilakukan, tetapi boleh berubah setiap harinya atau dibuat tetap selamanya
Rentang harus di antara 1-100
Nama harus sensitif terhadap besar kecil huruf (mis. hamid dan Hamid akan menghasilkan angka acak yang berbeda)
Tidak menggunakan pustaka apapun, murni mengandalkan nama dan tebakan
Penjelasan untuk nomor 1: Jika namanya Hamid, ia akan diharapkan tetap pada nilai tebakan 24 mau kamu melakukan 100 kali permintaan. Tidak ada jawaban benar di sini (Hamid tidak harus 24, bebas mau dibuat acak seperti apa yang penting harus tetap).


**Output**

![alt text](image.png)

**Penjelasan**

sesuai soal :3