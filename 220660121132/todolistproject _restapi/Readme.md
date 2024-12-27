# Todo List App

## Deskripsi
Ini adalah aplikasi Todo List sederhana untuk mencatat lagu yangdidengarakan. Aplikasi ini memiliki tampilan yang bersih dan responsif serta menyediakan beberapa fungsionalitas tambahan untuk meningkatkan pengalaman pengguna.

## Fitur Utama
- **Tambah Lagu**: Menambahkan lagu baru ke dalam daftar.
- **Edit Lagu**: Memungkinkan pengguna untuk mengedit teks lagu.
- **Tandai Selesai**: Menandai lagu sebagai selesai dengan memberikan tanda silang pada teks.
- **Hapus Lagu**: Menghapus lagu dari daftar.
- **Filter Lagu**: Menampilkan tugas yang belum selesai, sudah selesai, maupun keseluruhan tugas.
- **Penyimpanan Lokal**: Menyimpan daftar lagu secara lokal di browser agar tetap tersedia setelah halaman dimuat ulang.

## Cara Kerja Fungsionalitas

1. **Filter Lagu**
   - Pengguna dapat memfilter lagu berdasarkan statusnya: "Semua", "Selesai", atau "Belum Selesai".
   - JavaScript digunakan untuk memanipulasi DOM dan menyembunyikan atau menampilkan lagu sesuai dengan statusnya.

2. **Animasi Penambahan dan Penghapusan**
   - Lagu yang baru ditambahkan atau dihapus akan dianimasikan menggunakan transisi CSS. Misalnya, lagu yang baru ditambahkan akan muncul dengan efek transisi `opacity`, dan tugas yang dihapus akan menghilang dengan transisi.

3. **Penyimpanan Lokal**
   - Saat lagu ditambahkan, diubah, atau dihapus, daftar tugas akan disimpan dalam `localStorage` sehingga tetap tersedia saat aplikasi dimuat kembali.
   - Ketika aplikasi dimuat, data dari `localStorage` akan diambil dan ditampilkan dalam daftar.

## Cara Menggunakan
1. **Tambah Lagu**: Masukkan teks lagu pada form di bagian atas halaman, lalu klik tombol "Tambah".
2. **Tandai Lagu Sebagai Selesai**: Klik tombol "Selesai" di samping tugas untuk menandainya sebagai selesai. Lagu yang sudah selesai akan dicoret.
3. **Edit Lagu**: Klik tombol "Update" di samping lagu untuk mengedit teks tugas.
4. **Hapus Lagu**: Klik tombol "Hapus" di samping lagu untuk menghapusnya dari daftar.
5. **Filter Lagu**: Gunakan tombol filter di atas daftar lagu untuk menampilkan tugas berdasarkan statusnya: "Semua", "Selesai", atau "Belum Selesai".

## Teknologi yang Digunakan
- **HTML/CSS**: Untuk struktur dan styling aplikasi.
- **JavaScript**: Untuk manipulasi DOM, filter lagu, animasi, dan penyimpanan lokal.
