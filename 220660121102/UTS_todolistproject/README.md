CSS: 
Animasi Latar Belakang Gradien:

Bagian body memiliki latar belakang gradien yang bergerak secara halus dari satu warna ke warna lain dalam 15 detik secara terus-menerus. Efek ini dihasilkan oleh animasi @keyframes gradient yang menggeser posisi latar belakang untuk menciptakan efek perpindahan warna.
Efek Gelombang di Bawah Layar:

Tiga elemen .wave dengan variasi opasitas, lebar, dan tinggi ditumpuk di bagian bawah layar untuk menciptakan efek gelombang yang lembut dan bergerak. Setiap lapisan gelombang memiliki kecepatan animasi dan posisi awal yang berbeda untuk memberikan tampilan seperti ombak yang realistis.
Gaya Elemen Konten:

Teks di h1 diberi warna dan dipusatkan.
Setiap item di dalam ul (dengan elemen li) ditata dengan latar belakang putih, bayangan, serta sudut membulat untuk tampilan bersih.
Link dan button diberi warna dan efek hover untuk interaksi pengguna.
Notifikasi Toast:

.toast digunakan sebagai gaya untuk elemen notifikasi sementara (toast). Toast ini mulai dalam keadaan tersembunyi dan akan muncul dengan animasi transisi halus ketika kelas .show ditambahkan.

JavaScript:
Fungsi showToast(message):

Fungsi ini mengambil sebuah pesan sebagai argumen dan menampilkannya pada elemen HTML dengan ID toast.
Teks notifikasi diatur menggunakan toast.textContent = message.
Kelas CSS show ditambahkan untuk menampilkan notifikasi dengan efek transisi.
Setelah 3 detik, kelas show dihapus agar notifikasi menghilang secara otomatis.
Fungsi checkNotification():

Fungsi ini mengecek parameter URL untuk menentukan apakah pengguna menambahkan atau menghapus item dari daftar.
Menggunakan URLSearchParams, fungsi ini mengambil parameter action dari URL.
Jika nilai action adalah 'add', fungsi showToast dipanggil dengan pesan "List Berhasil Ditambah".
Jika nilai action adalah 'delete', maka notifikasi "List Berhasil Dihapus" akan ditampilkan.
Event Listener untuk DOMContentLoaded:

Fungsi checkNotification dijalankan saat halaman selesai dimuat (DOMContentLoaded), memastikan notifikasi ditampilkan segera jika parameter action ada di URL.