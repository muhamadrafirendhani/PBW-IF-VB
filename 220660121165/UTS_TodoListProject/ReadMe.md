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

CSS ini mengatur gaya visual untuk halaman web dengan beberapa elemen menarik, seperti efek latar belakang animasi, gelombang, dan elemen UI yang diatur untuk daftar dan notifikasi. Berikut adalah penjelasan dari setiap bagian:

Body
Background Gradient: Menggunakan gradien linear dengan beberapa warna untuk latar belakang halaman, yang memberi efek warna beragam dari ungu ke biru, lalu ke hijau dan merah.
Animation: Animasi gradient diterapkan, yang mengubah posisi latar belakang dari awal hingga akhir (0% hingga 100%) dalam waktu 15 detik, dengan pergerakan latar belakang yang terus-menerus (infinite).
Background Size: Diatur agar lebih besar dari viewport (400% 400%) untuk menciptakan efek pergerakan latar belakang yang halus.
Keyframes Gradient
Keyframes ini mengontrol pergerakan animasi latar belakang dengan menggeser posisi latar dari 0% ke 100%, lalu kembali ke 0%, menciptakan efek gradien yang bergerak.

Wave
Background: Warna putih semi-transparan untuk elemen wave di bagian bawah.
Animation: Animasi wave membuat elemen ini bergerak horizontal secara bergelombang, menciptakan efek ombak.
Positioning: Menempatkan wave pada posisi tetap di bagian bawah, sehingga tetap berada di bawah konten.
Nth Child Selectors: Variasi nth-of-type(2) dan nth-of-type(3) memberikan efek ombak bertumpuk, bergerak dengan kecepatan berbeda.

Keyframes Wave
Memberikan gerakan maju-mundur pada elemen wave, menciptakan efek ombak berkelanjutan.

Heading (h1)
Mengatur teks judul (h1) agar berada di tengah dengan font sans-serif dan warna putih.

Unordered List (ul) dan List Items (li)
List Style: Menghilangkan penanda list (list-style-type: none).
Item Layout: Setiap item di dalam daftar (li) menggunakan Flexbox agar item dalam list disejajarkan secara horizontal dan memiliki jarak seimbang.
Styling: Masing-masing item berbentuk kotak dengan bayangan halus dan sudut melengkung.

Links (a)
Link Styling: Warna biru untuk link, dan efek garis bawah saat kursor hover.

Form Input dan Button
Input: Styling sederhana dengan padding dan border radius untuk membentuk kotak.
Button: Tombol pengiriman dengan warna biru, berubah menjadi biru gelap saat hover, memberikan umpan balik visual.