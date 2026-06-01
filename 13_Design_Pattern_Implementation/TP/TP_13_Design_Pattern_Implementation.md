# Tugas Pedahuluan 13: Design_Pattern_Implementation

Nama : Abidah F

Kelas : SE08-01

NIM : 103122400004

**Soal**

Bukalah repostori kode tugas besarmu dan carilah satu saja design pattern yang digunakan di dalamnya (boleh design pattern apa saja, akan direviu kasus-per-kasus). Sertakan kodenya di tugas ini dan coba jelaskan desainnya.

**Kode sumber**

Tersedia di https://github.com/abbyy22/TUBES-KPL-TIM-GEHENDUL 

**Penjelasan**

Di repository ditemukan implementasi **State Machine** — pola desain yang tergolong dalam kategori *Behavioral Pattern*. Lokasinya ada di dua tempat sekaligus: `backend/src/utils/orderStateMachine.js` dan `frontend/src/js/siswa/orderStateMachine.js`.

---

### Apa itu State Machine?

State Machine (Mesin Keadaan Terbatas) adalah pola di mana sebuah objek hanya bisa berada di **satu state pada satu waktu**, dan perpindahan antar state hanya diizinkan melalui **transisi yang telah didefinisikan secara eksplisit**. State yang tidak terdaftar sebagai transisi yang valid akan ditolak.

---

### Kode Backend (`orderStateMachine.js`)

```javascript
const STATES = Object.freeze({
  ORDERED: 'ORDERED',
  COOKING: 'COOKING',
  READY:   'READY',
  DONE:    'DONE',
});

const TRANSITIONS = Object.freeze({
  ORDERED: ['COOKING'],
  COOKING: ['READY'],
  READY:   ['DONE'],
  DONE:    [],           // state final, tidak ada transisi keluar
});

function canTransition(from, to) {
  if (!isValidState(from) || !isValidState(to)) return false;
  return TRANSITIONS[from].includes(to);
}
```

Tabel `TRANSITIONS` adalah jantung dari pola ini — ia mendefinisikan graf berarah yang hanya mengizinkan alur `ORDERED → COOKING → READY → DONE`. Tidak bisa loncat, tidak bisa mundur.

---

### Penggunaan di Controller (`orderController.js`)

```javascript
// Saat pesanan dibuat, status awal selalu ORDERED
await conn.query(
  `INSERT INTO orders (..., status) VALUES (?, ?, ?, ?, ?)`,
  [..., STATES.ORDERED],
);

// Saat admin update status, transisi divalidasi dulu
if (!canTransition(current, status)) {
  throw ApiError.badRequest(
    `Transisi tidak valid: ${current} -> ${status}. Allowed: ${nextStates(current).join(', ')}`
  );
}
```

State machine tidak hanya ada di utility file, tapi benar-benar **ditegakkan** di lapisan API sebelum setiap `UPDATE` ke database.

---

### Kenapa ini desain yang baik?

**Tanpa** state machine, kode validasi status bisa tersebar di mana-mana — misalnya `if (status !== 'ORDERED' && status !== 'COOKING') throw error` yang mudah tidak konsisten antar endpoint.

**Dengan** state machine, aturan transisi **tersentralisasi** di satu tempat. Kalau ada aturan baru (misalnya status `CANCELLED`), cukup tambahkan di `TRANSITIONS` — semua controller otomatis mengikutinya.

Nilai tambah lain: error message yang dihasilkan informatif (`Transisi tidak valid: COOKING -> ORDERED. Allowed: READY`), sehingga memudahkan debugging baik dari sisi developer maupun pengguna API.