export function tambahPengitung(terkini, jumlah) {
  //terkini = terkini + jumlah;
  return terkini + jumlah;
}
// terkini = terkini + jumlah — baris ini memodifikasi parameter lokal, bukan variabel asli di luar fungsi. Ini tidak masalah karena hasilnya langsung di-return, tapi penulisannya agak membingungkan.
//Lebih idiomatis dan jelas jika ditulis: return terkini + jumlah; langsung, tanpa reassign parameter.