# Tugas Mandiri 13: Design_Pattern_Implementation

Nama : Abidah F

Kelas : SE08-01

NIM : 103122400004

**Soal**

Jelaskan dengan kemampuanmu apa itu event delegation dalam design pattern JavaScript. Tidak ada batas bobot kata dalam menjawab tugas ini, tetapi penilaian akan bergantung dari sepaham apa dan sebagus apa kamu menyajikan jawabanmu.

**Penjelasan**

Event delegation itu teknik di JavaScript buat **nanganin banyak elemen dengan satu event listener aja**, biasanya dipasang di parent element.

Misal ada 100 tombol di dalam `<div>`. Daripada bikin 100 `addEventListener()`, kamu cukup pasang 1 listener di parent-nya.

Contoh tanpa delegation:

```js
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("klik");
  });
});
```

Dengan delegation:

```js
document.getElementById("container").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    console.log("klik");
  }
});
```

HTML:

```html
<div id="container">
  <button class="btn">A</button>
  <button class="btn">B</button>
  <button class="btn">C</button>
</div>
```

Kenapa bisa? Karena ada konsep **event bubbling**. Event klik dari tombol akan "naik" ke parent-parentnya sampai document.

Alurnya:

```
button
  ↑
div
  ↑
body
  ↑
document
```

Jadi parent bisa "ngintip" event yang terjadi di child lewat:

```js
e.target
```

Keuntungan:

* Lebih hemat memori.
* Cocok buat elemen yang dibuat secara dinamis (`append`, `innerHTML`, dll).
* Kode lebih rapi.

Contoh kasus nyata:

```js
todoList.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    e.target.parentElement.remove();
  }
});
```

Mau ada 10 atau 10.000 item todo, listener tetap cuma 1.

Kalau di konteks design pattern, event delegation sering dianggap bagian dari pola **event-driven programming** dan pemanfaatan **behavioral pattern** untuk mengelola interaksi UI secara efisien, walaupun secara teknis lebih sering disebut teknik DOM daripada design pattern formal kayak Observer atau Singleton.
