Ujian Tengah Semester (UTS)
Pemrograman Berbasis Web

NIM     : 220660121037
Nama    : Ismi Indah Aryani
Kelas   : IF-VB

Berikut cara kerja fungsionalitas

Todo List Application

Aplikasi Todo List ini memungkinkan pengguna untuk menambahkan, mengedit, menandai, dan menghapus tugas (task). Aplikasi ini menggunakan HTML, CSS, dan JavaScript untuk interaksi dinamis, tanpa memerlukan server atau database. Semua data tugas disimpan sementara di dalam browser.

Fitur Utama

1.  Menambahkan Tugas Baru
    - Pengguna dapat menambahkan tugas baru melalui input form yang disediakan. 
    - Setelah tugas ditambahkan, tugas akan muncul di daftar tugas dengan checkbox untuk menandai tugas sebagai selesai dan tombol untuk menghapus tugas.
   
2.  Menandai Tugas sebagai Selesai**
    - Setiap tugas memiliki checkbox. Ketika checkbox dicentang, nama tugas akan diberi garis tengah, menandakan bahwa tugas telah selesai.
    - Jumlah tugas yang belum selesai secara otomatis diperbarui saat tugas ditandai selesai atau kembali dibatalkan (uncheck).

3.  Menghapus Tugas
    - Pengguna dapat menghapus tugas yang tidak lagi diperlukan menggunakan tombol sampah (trash).
    - Setelah tugas dihapus, jumlah tugas yang belum selesai akan diperbarui.

4.  Jumlah Tugas yang Belum Selesai
    - Aplikasi menampilkan jumlah tugas yang belum selesai secara dinamis di bagian bawah daftar tugas. Jumlah ini akan terus diperbarui setiap kali tugas ditambahkan, selesai, atau dihapus.


Cara Kerja

HTML

`index.html` adalah file utama yang berfungsi untuk struktur tampilan aplikasi Todo List. Di dalam file ini terdapat form untuk menambahkan tugas dan daftar tugas yang dapat diubah secara dinamis.

CSS

`style.css` mendefinisikan gaya dan tampilan aplikasi, seperti tata letak tugas, tombol, dan input form. CSS ini juga bertanggung jawab untuk memberikan efek hover dan memberi penampilan yang bersih dan responsif pada aplikasi.

JavaScript

File `script.js` mengatur logika interaktif aplikasi, seperti menambahkan tugas, menandai tugas sebagai selesai, menghapus tugas, dan memperbarui jumlah tugas yang belum selesai.

1.  Menambahkan Tugas
    - Ketika pengguna menekan tombol "Add", JavaScript menangani pengambilan nilai dari input field, memvalidasi input (menyaring input kosong), dan menambahkan tugas ke daftar yang ditampilkan.
    - Setiap tugas baru ditambahkan ke dalam elemen `ul`, dengan menggunakan elemen `li` baru.

2.  Menandai Tugas sebagai Selesai
    - Ketika pengguna mencentang checkbox untuk sebuah tugas, fungsi `toggleComplete()` dijalankan. Fungsi ini menambahkan atau menghapus garis tengah pada nama tugas untuk menandakan status selesai.
    - Jumlah tugas yang belum selesai akan dikurangi setiap kali tugas ditandai selesai, dan ditambah kembali jika statusnya dibatalkan.

3.  Menghapus Tugas
    - Ketika tombol hapus diklik, tugas akan dihapus dari daftar tugas, dan jumlah tugas yang belum selesai akan diperbarui.

4.  Memperbarui Jumlah Tugas
    - Setiap kali ada perubahan pada daftar tugas (baik menambahkan, menandai selesai, atau menghapus tugas), jumlah tugas yang belum selesai akan dihitung ulang dan ditampilkan di elemen dengan kelas `.count-value`.
    - Fungsi `updateTaskCount()` digunakan untuk menghitung ulang jumlah tugas yang belum selesai dan menampilkan hasilnya di layar.

Fungsi-fungsi Penting dalam JavaScript

- `addTask()`: Menambahkan tugas baru ke dalam daftar dan memperbarui jumlah tugas yang belum selesai.
- `toggleComplete()`: Menandai tugas sebagai selesai atau kembali belum selesai, sambil memperbarui jumlah tugas yang belum selesai.
- `deleteTask()`: Menghapus tugas dari daftar dan memperbarui jumlah tugas yang belum selesai.
- `updateTaskCount()`: Menghitung dan memperbarui jumlah tugas yang belum selesai.