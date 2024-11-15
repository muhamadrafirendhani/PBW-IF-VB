// Fungsi untuk menghasilkan warna acak
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// Mengubah warna latar belakang halaman secara acak
function changeBackgroundColor() {
    document.body.style.backgroundColor = generateRandomColor();
}

// Menampilkan pesan sambutan
function showWelcomeMessage() {
    alert("Catat kegiatan yang ingin kamu selesaikan!");
}

// Menambahkan alert ketika tombol "Mark as completed" diklik
function addMarkCompletedListener() {
    document.querySelectorAll('.mark-completed').forEach(button => {
        button.addEventListener('click', function(event) {
            alert("Selamat tugasmu telah selesai!");
            // Tidak menggunakan event.preventDefault() agar aksi tetap berjalan
        });
    });
}

// Menambahkan konfirmasi penghapusan ketika tombol "Delete" diklik
function addDeleteButtonListener() {
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function(event) {
            if (confirm("Apakah kamu yakin ingin menghapus tugas ini?")) {
                // Lanjutkan ke URL untuk menghapus item
                window.location.href = this.href;
            } else {
                event.preventDefault();  // Batalkan aksi jika pengguna memilih "Tidak"
            }
        });
    });
}

// Pastikan event listener dijalankan setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColor();
    showWelcomeMessage(); // Panggil fungsi pesan sambutan
    addMarkCompletedListener();  // Menambahkan event listener untuk tombol Mark as Completed
    addDeleteButtonListener();   // Menambahkan event listener untuk tombol Delete
});
