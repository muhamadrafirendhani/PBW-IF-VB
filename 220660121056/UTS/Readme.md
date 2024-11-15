penjelasan css : untuk membuat background, lalu ada yang untuk membuat background dinamis content: "";: Menambahkan konten kosong yang digunakan untuk menampilkan background. 
position: absolute;: Menempatkan elemen ini di posisi absolut di dalam <body>.
top: 0; left: 0;: Menempatkan elemen pada sudut kiri atas halaman.
width: 100%; height: 100%;: Membuat elemen mencakup seluruh lebar dan tinggi halaman.
background: linear-gradient(120deg, #ffffff, #03c4ff, #42aeec, #000000);: Menambahkan gradasi warna dari putih ke biru dan hitam dengan sudut 120 derajat.
background-size: 200% 200%;: Memperbesar ukuran background agar gradasi terlihat lebih halus saat bergerak.
animation: gradientAnimation 10s ease infinite;: Menambahkan animasi pada background yang bergerak secara terus menerus (infinite) selama 10 detik.
z-index: -1;: Menempatkan elemen background di bawah konten halaman, sehingga tidak menutupi elemen lain.
Animasi ini mengubah posisi latar belakang untuk menciptakan efek gerakan gradasi.
0% { background-position: 0% 50%; }: Posisi awal gradasi berada di kiri.
50% { background-position: 100% 50%; }: Pada setengah waktu, gradasi bergerak ke kanan.
50% { background-position: 50% 100%;}: Kemudian bergerak ke bawah.
100% { background-position: 0% 50%; }: Kembali ke posisi awal.
color: #ebe3e3;: Memberikan warna teks abu-abu muda pada elemen <h1> dan <p>.
text-align: center;: Menyelaraskan teks ke tengah.
margin-top: 20%;: Memberikan jarak atas sebesar 20% dari tinggi halaman.
ul: Menghilangkan bullet points dengan list-style-type: none, dan menambahkan border kiri dan kanan.
li:
Menambahkan padding, jarak antar item, dan latar belakang transparan.
display: flex; dan justify-content: space-between;: Menggunakan Flexbox untuk mengatur item dalam <li>, memberikan ruang antara elemen di dalamnya.
border-radius: 5px;: Membuat sudut item menjadi membulat.
border-bottom: 1px solid #ccc;: Menambahkan garis bawah pada setiap item, kecuali pada item terakhir (li:last-child).
form: Memusatkan elemen form dengan Flexbox dan memberi jarak atas.
input[type="text"]: Menambahkan padding, border, dan sudut membulat pada input teks.
button: Memberikan tombol dengan latar belakang hijau, warna teks putih, dan efek transisi saat hover.
button:hover: Mengubah warna latar belakang tombol menjadi oranye ketika di-hover.

CSS ini dirancang untuk memberikan desain yang bersih dan dinamis dengan latar belakang gradasi yang bergerak, layout responsif untuk form dan daftar tugas, serta tombol yang menarik dengan efek hover.

Penjelasan JS
. Membuat Elemen Canvas dan Menambahkannya ke Body: document.createElement("canvas"): Membuat elemen <canvas> secara dinamis di JavaScript.
document.body.appendChild(canvas): Menambahkan elemen <canvas> yang baru dibuat ke dalam elemen <body> dari halaman web, sehingga bisa ditampilkan.

Mengambil Context 2D dari Canvas: getContext("2d"): Mengambil konteks 2D dari canvas, yang memungkinkan kita menggambar grafik (seperti garis, bentuk, gambar, dll) di atas canvas.

Menentukan Ukuran Canvas: canvas.width = window.innerWidth: Mengatur lebar canvas agar sesuai dengan lebar jendela browser.
canvas.height = window.innerHeight: Mengatur tinggi canvas agar sesuai dengan tinggi jendela browser.
Menangani Perubahan Ukuran Jendela (Resize Event): resize event listener: Ketika ukuran jendela browser berubah, kode ini akan memperbarui ukuran canvas untuk menyesuaikan dengan ukuran jendela yang baru.

Deklarasi Array Partikel dan Jumlah Partikel: particles: Array yang digunakan untuk menyimpan objek partikel.
numParticles: Jumlah partikel yang akan dibuat (dalam hal ini, 100 partikel).

Mendefinisikan Kelas Particle: constructor: Fungsi ini dijalankan ketika sebuah objek Particle baru dibuat.
this.x dan this.y: Posisi partikel secara acak di dalam canvas.
this.size: Ukuran partikel yang acak antara 1 hingga 3 piksel.
this.speedX dan this.speedY: Kecepatan partikel di sepanjang sumbu X dan Y, yang acak antara -0.5 dan 0.5, memberikan pergerakan yang acak.
update: Fungsi ini memperbarui posisi partikel berdasarkan kecepatannya.
Jika partikel melewati batas kiri atau kanan canvas, kecepatannya diubah arah (membalikkan arah gerakan).
Jika partikel melewati batas atas atau bawah canvas, kecepatannya juga dibalik.
draw: Fungsi ini menggambar partikel di posisi (x, y) dengan menggunakan metode arc untuk membuat bentuk lingkaran dengan warna putih semi-transparan (rgba(255, 255, 255, 0.5)).

Inisialisasi Partikel: initParticles: Fungsi ini membuat numParticles partikel baru dan menambahkannya ke dalam array particles.

Fungsi Animasi untuk Menampilkan Partikel: clearRect: Membersihkan area canvas sebelum menggambar frame baru, memastikan tidak ada jejak animasi sebelumnya.
particles.forEach: Melakukan iterasi untuk setiap partikel di array particles. Setiap partikel diperbarui (dengan update()) dan digambar ulang (dengan draw()).
requestAnimationFrame(animate): Fungsi ini meminta browser untuk memanggil kembali fungsi animate() sebelum frame berikutnya ditampilkan, sehingga menciptakan animasi yang halus.

Inisialisasi dan Menjalankan Animasi:initParticles(): Memanggil fungsi ini untuk membuat dan menambahkan partikel ke dalam array particles.
animate(): Memanggil fungsi ini untuk memulai animasi dan memastikan partikel bergerak dan digambar di canvas




Kode ini menciptakan animasi partikel yang bergerak di dalam sebuah elemen <canvas>. Setiap partikel digambar sebagai lingkaran putih transparan yang bergerak acak di dalam canvas.
Ukuran dan posisi partikel diinisialisasi secara acak, dan gerakan partikel dihitung dengan kecepatan acak pada setiap frame.
Canvas di-resize otomatis ketika ukuran jendela browser berubah.
Animasi berjalan secara terus-menerus menggunakan requestAnimationFrame, memberikan efek partikel yang bergerak dengan mulus di layar.