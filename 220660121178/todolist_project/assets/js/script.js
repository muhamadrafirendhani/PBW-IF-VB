document.addEventListener("DOMContentLoaded", function() {

    // Menangani form submission
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form default

        const taskInput = document.querySelector('input[name="task"]');
        const taskValue = taskInput.value.trim();

        if (taskValue === "") {
            showAlert("Please enter a task.", "danger");
            return; // Tidak melanjutkan jika input kosong
        }

        // Mengirim data ke server
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(new FormData(form))
        })
        .then(response => response.text())
        .then(data => {
            showAlert("Task added successfully!", "success");
            location.reload(); // Memuat ulang halaman untuk menampilkan tugas terbaru
        })
        .catch(error => console.error('Error:', error));

        taskInput.value = ""; // Mengosongkan input setelah pengiriman
        animateButton(event.target.querySelector('button')); // Animasi tombol saat diklik
    });

});

// Fungsi untuk menampilkan alert
function showAlert(message, type) {
    const alertBox = document.createElement('div');

    alertBox.className = `alert alert-${type}`;
    
    alertBox.textContent = message;

    document.body.insertBefore(alertBox, document.body.firstChild);
    
    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
        document.body.removeChild(alertBox);
    }, 3000); // Menghilangkan alert setelah 3 detik
}

// Fungsi untuk animasi tombol saat diklik
function animateButton(button) {
   button.classList.add('clicked');
   setTimeout(() => button.classList.remove('clicked'), 300); // Durasi animasi sama dengan transisi CSS
}