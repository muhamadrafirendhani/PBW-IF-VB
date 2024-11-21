# Todo List App

## Deskripsi
Ini adalah aplikasi Todo List sederhana untuk mencatat progaram harian harian. Aplikasi ini memiliki tampilan yang bersih, tampilan yang menarik dan responsif serta menyediakan beberapa fungsionalitas tambahan untuk meningkatkan pengalaman pengguna.

## Fitur Utama
- **Tambah Projet**: Menambahkan project baru ke dalam daftar.
- **Edit Project**: Memungkinkan pengguna untuk mengedit teks project.
- **Tandai Selesai**: Menandai project sebagai selesai dengan memberikan tanda silang pada teks.
- **Hapus Project**: Menghapus project dari daftar.
- **Filter Project**: Menampilkan project yang belum selesai, sudah selesai, atau semuanya.
- **Penyimpanan Lokal**: Menyimpan daftar project secara lokal di browser agar tetap tersedia setelah halaman dimuat ulang.

## Cara Kerja Fungsionalitas

1. **Filter Project**
   - Pengguna dapat memfilter project berdasarkan statusnya: "Semua", "Selesai", atau "Belum Selesai".
   - JavaScript digunakan untuk memanipulasi DOM dan menyembunyikan atau menampilkan project sesuai dengan statusnya.

2. **Animasi Penambahan dan Penghapusan**
   - Project yang baru ditambahkan atau dihapus akan dianimasikan menggunakan transisi CSS. Misalnya, Project yang baru ditambahkan akan muncul dengan efek transisi `opacity`, dan Project yang dihapus akan menghilang dengan transisi.

3. **Penyimpanan Lokal**
   - Saat Project ditambahkan, diubah, atau dihapus, daftar Project akan disimpan dalam `localStorage` sehingga tetap tersedia saat aplikasi dimuat kembali.
   - Ketika aplikasi dimuat, data dari `localStorage` akan diambil dan ditampilkan dalam daftar.

## Cara Menggunakan
1. **Tambah Project**: Masukkan teks Project pada form di bagian atas halaman, lalu klik tombol "Tambah".
2. **Tandai Project Sebagai Selesai**: Klik tombol "Selesai" di samping Project untuk menandainya sebagai selesai. Project yang sudah selesai akan dicoret.
3. **Edit Project**: Klik tombol "Update" di samping Project untuk mengedit teks Project.
4. **Hapus Project**: Klik tombol "Hapus" di samping Projecst untuk menghapusnya dari daftar.
5. **Filter Project**: Gunakan tombol filter di atas daftar Project untuk menampilkan Project berdasarkan statusnya: "Semua", "Selesai", atau "Belum Selesai".

## Teknologi yang Digunakan
- **HTML/CSS**: Untuk struktur dan styling aplikasi.
- **JavaScript**: Untuk manipulasi DOM, filter Project, animasi, dan penyimpanan lokal.
