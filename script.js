// script.js 
document.getElementById("pesan").textContent = "Hello World"; 
console.log("Hello World"); 

const namaPengguna = prompt("Masukkan nama Anda:", ""); 
if (namaPengguna && namaPengguna.trim() !== "") { 
  alert("Halo, " + namaPengguna + "!"); 
  document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + "."; 
} else { 
  alert("Nama belum diisi.");
}

function operasiDasar(a, b) { 
  console.log("Penjumlahan:", a + b); 
  console.log("Pengurangan:", a - b); 
  console.log("Perkalian:", a * b); 
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol"); 
  console.log("Modulus:", a % b); 
} 
operasiDasar(9, 4); 

const inputNilai = prompt("Masukkan nilai (0–100):"); 
const nilaiMahasiswa = Number(inputNilai); 
 
if (inputNilai === null || inputNilai.trim() === "" || 
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) { 
  alert("Input nilai tidak valid."); 
} else if (nilaiMahasiswa >= 60) { 
  alert("Lulus"); 
} else { 
  alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:"); 
switch (inputPilihan) { 
  case "1": alert("Bilangan satu"); break; 
  case "2": alert("Bilangan dua"); break; 
  case "3": alert("Bilangan tiga"); break; 
  case "4": alert("Bilangan empat"); break; 
  case "5": alert("Bilangan lima"); break; 
  default: alert("Pilihan tidak tersedia"); 
} 

function cekBilangan() { 
  const input = document.getElementById("bilangan").value; 
  const angka = Number(input); 
  const hasil = document.getElementById("hasilBilangan"); 
 
  if (input.trim() === "" || !Number.isInteger(angka)) { 
    hasil.textContent = "Masukkan bilangan bulat yang valid."; 
  } else if (angka % 2 === 0) { 
    hasil.textContent = "Bilangan genap"; 
  } else { 
    hasil.textContent = "Bilangan ganjil"; 
  } 
} 

function ubahWarnaLatar(warna) { 
  document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu"); 
daftarMenu.forEach((item) => { 
  item.addEventListener("change", hitungTotal); 
}); 
 
function hitungTotal() { 
  let total = 0; 
  daftarMenu.forEach((item) => { 
    if (item.checked) total += Number(item.value); 
  }); 
  document.getElementById("total").textContent = total.toLocaleString("id-ID"); 
}


// Mini Project — Kalkulator Nilai Mahasiswa

// 1. Menghitung nilai akhir
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

// 2. Menentukan predikat
function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

// 3. Mengambil input, memvalidasi, dan menampilkan hasil
function prosesNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;

    const hasil = document.getElementById("hasilNilai");

    // Validasi input kosong
    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === ""
    ) {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    // Validasi nilai harus 0–100
    if (
        ![tugas, uts, uas].every(
            nilai => Number.isFinite(nilai) &&
                     nilai >= 0 && nilai <= 100
        )
    ) {
        hasil.textContent =
            "Nilai harus berada pada rentang 0–100.";
        return;
    }

    // Perhitungan
    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    // Menampilkan hasil pada halaman HTML
    hasil.innerHTML =
        "Nilai akhir: " + akhir.toFixed(2) + "<br>" +
        "Predikat: " + predikat + "<br>" +
        "Status: " + status;
}


// G. EKSPERIMEN MANDIRI

// 1. Operasi dua bilangan dari prompt
function operasiDariPrompt() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");

    if (
        inputA === null || inputA.trim() === "" ||
        inputB === null || inputB.trim() === "" ||
        !Number.isFinite(Number(inputA)) ||
        !Number.isFinite(Number(inputB))
    ) {
        alert("Masukkan dua bilangan yang valid.");
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    operasiDasar(a, b);
    alert("Hasil perhitungan sudah ditampilkan di Console.");
}

// 7. Tabel perkalian 7 dari 1 sampai 10
function tabelPerkalian() {
    let hasil = "";

    for (let i = 1; i <= 10; i++) {
        hasil += "7 x " + i + " = " + (7 * i) + "\n";
    }

    document.getElementById("hasilPerkalian").textContent = hasil;
}

// 8. Function mengembalikan true jika genap
function cekGenap(angka) {
    return Number.isInteger(angka) && angka % 2 === 0;
}

function ujiCekGenap() {
    const input = document.getElementById("angkaGenap").value;
    const hasil = document.getElementById("hasilGenap");

    if (input.trim() === "" || !Number.isInteger(Number(input))) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
        return;
    }

    const angka = Number(input);

    if (cekGenap(angka)) {
        hasil.textContent = angka + " adalah bilangan genap.";
    } else {
        hasil.textContent = angka + " adalah bilangan ganjil.";
    }
}

// 9. Validasi nilai sudah ada pada prosesNilai()
// Fungsi prosesNilai() memeriksa kolom kosong
// dan memastikan nilai berada pada rentang 0–100.

// 10. Tambahan dua menu sudah ada di HTML.
// Checkbox otomatis dihitung oleh fungsi hitungTotal()
// karena menggunakan class="menu".

// 11. Menyembunyikan atau menampilkan teks
function ubahTampilan() {
    const pesan = document.getElementById("pesanEksperimen");

    if (pesan.style.display === "none") {
        pesan.style.display = "block";
    } else {
        pesan.style.display = "none";
    }
}
