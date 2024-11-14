JavaScript: Notifikasi Menggunakan alert
Kode JavaScript ini bertujuan untuk menampilkan notifikasi berupa pesan alert setelah menambahkan atau menghapus tugas pada aplikasi Todo List.
Penjelasan Kode:

URL Parameters:
const urlParams = new URLSearchParams(window.location.search);
Kode ini mengambil seluruh parameter URL setelah tanda ? di URL, misalnya pada ?action=add.
Kemudian, urlParams.get('action') mengambil nilai dari parameter action dalam URL, yang diharapkan bernilai add atau delete.

Conditional Check:
if (action === 'add') dan else if (action === 'delete') menentukan notifikasi mana yang akan ditampilkan.
Jika action bernilai add, muncul alert bahwa tugas berhasil ditambahkan. Jika action bernilai delete, muncul alert bahwa tugas berhasil dihapus.
DOMContentLoaded Event:

document.addEventListener('DOMContentLoaded', checkNotification);
Menjalankan checkNotification setelah seluruh halaman (DOM) selesai dimuat. Ini memastikan bahwa notifikasi tidak muncul sebelum halaman siap ditampilkan.

CSS: (Jika Menggunakan Notifikasi Kustom)
Jika Anda ingin mengkustomisasi notifikasi (selain menggunakan alert), kode CSS ini menyediakan gaya untuk notifikasi yang muncul sebagai pesan kecil di bagian atas halaman. Kode CSS ini opsional jika Anda beralih menggunakan alert.

Penjelasan Kode CSS:
Positioning:

position: fixed; memastikan notifikasi tetap berada di posisi yang sama pada layar, bahkan ketika halaman di-scroll.
top: 20px; dan right: 20px; menempatkan notifikasi 20px dari atas dan kanan layar.
Background and Text Styling:

background-color: #4CAF50; memberikan warna hijau (biasanya digunakan untuk menandakan sukses).
color: white; mengatur warna teks menjadi putih untuk kontras yang baik.
Padding and Border Radius:

padding: 10px; memberi jarak di dalam elemen, membuat teks tidak menempel langsung ke tepi.
border-radius: 5px; membuat sudut elemen menjadi bulat, sehingga tampil lebih lembut.
Box Shadow and Opacity:

box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); menambahkan bayangan di sekitar elemen, memberikan efek kedalaman.
opacity: 0.9; membuat notifikasi sedikit transparan.
Z-Index:

z-index: 1000; memastikan notifikasi berada di depan elemen lain di halaman.
Dengan penjelasan ini, Anda sekarang memahami bagaimana JavaScript dan CSS bekerja untuk membuat notifikasi alert atau notifikasi kustom pada aplikasi Todo List.