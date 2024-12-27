document.addEventListener("DOMContentLoaded", function() {
    
    // Menangani form submission
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form default
        
        const taskInput = document.querySelector('input[name="task"]');
        const taskValue = taskInput.value.trim();
        
        if (taskValue === "") {
            alert("Please enter a task.");
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
            alert("Task added successfully!");
            location.reload(); // Memuat ulang halaman untuk menampilkan tugas terbaru
        })
        .catch(error => console.error('Error:', error));
        
        taskInput.value = ""; // Mengosongkan input setelah pengiriman
    });
});