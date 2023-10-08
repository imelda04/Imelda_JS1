//forstatement//
for (let i = 0; i < 5; i++) {
  console.log("hari ini kapal nomor " + (i + 1) + " sedang beroperasi");
}

//function//
function perkalian(a, b) {
  return a * b;
}

let hasil = perkalian(15, 15);
console.log("Hasil perkalians: " + hasil);

//if//
let nilai = 80;

if (nilai >= 85) {
  console.log("Selamat! anda telah memenuhi syarat untuk bergabung di pt.kali");
} else {
  console.log(
    "Anda tidak memenuhi syarat untuk bergabung di pt.kali, Jangan menyerah, coba lagi di kesempatan lain! dimana ada niat asal mau berusaha pasti ada jalan!!!"
  );
}

// Nested if
let nilaiSiswa = 100;

if (nilaiSiswa >= 80) {
  console.log("Anda mendapatkan nilai A sangat baik.");
} else if (nilaiSiswa >= 75) {
  console.log("Anda mendapat nilai B baik.");
} else {
  console.log("Anda mendapat nilai C cukup.");
}

//switchcase//
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log(
      "Hari ini belajar design dan Mengikuti kelas via zoom di Infinite Learning."
    );
    break;
  case "Selasa":
    console.log(
      "Hari ini belajar technical dan mengikuti kelas via zoom di infinite."
    );
    break;
  case "Rabu":
    console.log("Hari Diskusi, diskusi dengan kelompok macro masing-masing.");
    break;
  default:
    console.log("Hari libur!");
}

//while//
let angka = 2;

while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

let angka2 = 3;

do {
  console.log("Angka: " + angka2);
  angka2++;
} while (angka2 <= 10);
