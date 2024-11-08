## PENAMBAHAN CSS

- Tata Letak Halaman
container dan elemen-elemen dalam halaman diberi gaya untuk membuat tampilan yang bersih dan terpusat.

- Efek Button
Tombol memiliki efek hover dan warna yang berbeda untuk membedakan aksi yang dilakukan (misalnya, complete-button berwarna biru, delete-button berwarna merah, update-button berwarna kuning, dan submit-button berwarna hijau).

- Form Edit
Input teks untuk edit menggunakan kelas edit-input, di mana ukurannya dibatasi agar tetap rapi saat diinput.


## PENAMBAHAN JAVASCRIPT

- Bagian Notifikasi pada listTodos.php
Elemen notifikasi (<div id="notification">) berfungsi untuk menampilkan pesan saat terjadi perubahan, seperti menambah, memperbarui, menandai selesai, atau menghapus tugas.

- Daftar Tugas
Ditampilkan sebagai <ul>, setiap tugas dalam daftar diberi gaya berdasarkan statusnya (misalnya, tugas yang selesai dicoret).
Setiap tugas memiliki tombol Update, Selesai, dan Hapus yang terkait dengan form-form kecil untuk memproses setiap aksi ke index.php dengan parameter aksi dan ID tugas yang relevan.

- Fungsi Notifikasi di JavaScript (script.js)
script.js mengecek parameter URL status untuk menentukan pesan yang akan ditampilkan di elemen notifikasi.
Berdasarkan statusnya, isi pesan dalam elemen notifikasi (notificationMessage) akan diperbarui sesuai aksi terakhir yang berhasil, seperti “Tugas berhasil ditambahkan!”
Setelah menampilkan notifikasi, JavaScript akan menyembunyikannya secara otomatis setelah 3 detik menggunakan setTimeout(), dan menghapus parameter status dari URL untuk membersihkan halaman.


## PENAMBAHAN UPDATE DATA

Update ini memungkinkan pengguna untuk mengedit atau memperbarui isi tugas yang ada. Saat tombol Update diklik, form akan mengirim data ke index.php dengan metode POST dan menyertakan parameter action=edit serta id dari tugas yang akan diupdate di URL.
Setelah tugas diperbarui, pengguna dialihkan kembali ke halaman utama dengan parameter status=edit_success. JavaScript di script.js kemudian memproses notifikasi. Saat status=edit_success, pesan "Tugas berhasil diubah!" ditampilkan selama 3 detik di notifikasi sebelum otomatis menghilang.

----RIO IRLANDY PUSAN----