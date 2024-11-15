# Todo List Application

## Overview

Aplikasi Todo List ini dirancang untuk membantu pengguna mengelola daftar tugas mereka secara efisien. Aplikasi ini memungkinkan pengguna menambahkan, menandai selesai, dan menghapus item dalam daftar todo.

## Fitur Utama

1. **Menampilkan Daftar Todo**: Menampilkan semua item dalam daftar todo.
2. **Menambahkan Todo Baru**: Memungkinkan pengguna menambahkan item baru melalui formulir input.
3. **Menandai Selesai**: Memungkinkan pengguna menandai item sebagai selesai dengan klik tautan.
4. **Menghapus Item**: Memungkinkan pengguna menghapus item dari daftar todo.

## Desain Antarmuka

Desain antarmuka aplikasi didasarkan pada stylesheet CSS yang menciptakan tampilan modern dan intuitif. Berikut beberapa komponen penting dalam desain:

### Body Background
- **Linear Gradient**: Menggunakan gradient linier untuk background body agar terlihat dinamis dan menarik.
  
```css
body {
    background: linear-gradient(135deg, #f0f0f0 25%, transparent 25%) -50px 0,
                linear-gradient(225deg, #f0f0f0 25%, transparent 25%) -50px 0,
                linear-gradient(315deg, #f0f0f0 25%, transparent 25%),
                linear-gradient(45deg, #f0f0f0 25%, transparent 25%);
    background-size: 100px 100px;
}
```
### Form Layout

Menyimpan form input di tengah halaman dan memberikan jarak atas untuk memberikan ruang kosong.

```css
form {
    display: flex; /* Menggunakan flexbox untuk layout */
    justify-content: center; /* Memusatkan form */
    margin-top: 30px; /* Jarak atas */
}

form input[type="text"] {
    padding: 12px; /* Padding dalam input */
    border: 2px solid #ced4da; /* Border */
    border-radius: 5px; /* Sudut membulat */
    width: 250px; /* Lebar input */
    margin-right: 10px; /* Jarak antara input dan tombol */
}

form button {
    padding: 12px 20px; /* Padding dalam tombol */
    background-color: #28a745; /* Warna latar belakang tombol */
    color: white; /* Warna teks tombol */
    border: none; /* Menghilangkan border default */
    border-radius: 5px; /* Sudut membulat */
    cursor: pointer; /* Menampilkan kursor pointer saat hover */
    transition: background-color 0.3s; /* Transisi untuk efek hover */
}

form button:hover {
    background-color: #218838; /* Warna latar belakang saat hover */
}
```

### Kode javascript
Aplikasi ini menggunakan JavaScript untuk menangani pengiriman form tanpa memuat ulang halaman. Berikut adalah kode JavaScript yang digunakan:
```js 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        const taskInput = form.querySelector("input[name='task']");
        const taskValue = taskInput.value.trim();

        if (taskValue === "") {
            alert("Silahkan masukkan kegiatan.");
            return;
        }

        // Mengirimkan data ke server menggunakan Fetch API
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(new FormData(form)).toString()
        })
        .then(response => {
            if (response.ok) {
                alert("Kegiatan ditambahkan sukses!");
                // Reload halaman untuk menampilkan daftar terbaru
                window.location.reload();
            } else {
                alert("Error menambahkan kegiatan.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Terdapat error pada permintaan.");
        });
    });
});
```

#### Penjelasan Kode JavaScript
1. Event Listener:
- DOMContentLoaded: Menunggu hingga seluruh konten HTML dimuat sebelum menjalankan kode.
- form.addEventListener("submit", ...): Menangani event saat form disubmit.
2. Mencegah Pengiriman Default:
- event.preventDefault(): Mencegah pengiriman form secara default agar kita dapat memprosesnya dengan JavaScript.
3. Validasi Input:
- Memeriksa apakah input tugas kosong. Jika kosong, akan muncul alert meminta pengguna untuk memasukkan kegiatan.
4. Mengirim Data ke Server:
- Menggunakan Fetch API untuk mengirim data ke server dengan metode POST.
- Mengatur header Content-Type untuk mengindikasikan bahwa data yang dikirim adalah URL encoded.
- Menggunakan new URLSearchParams(new FormData(form)).toString() untuk mengonversi data form menjadi format yang sesuai untuk pengiriman.
5. Menangani Respons:
- Jika respons dari server berhasil (response.ok), tampilkan alert bahwa kegiatan berhasil ditambahkan dan muat ulang halaman untuk memperbarui daftar.
- Jika terjadi error saat pengiriman, tampilkan alert kesalahan.