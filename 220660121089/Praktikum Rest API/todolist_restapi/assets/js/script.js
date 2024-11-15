document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk menampilkan notifikasi
    function showNotification(message, type = 'success') {
        const notification = document.getElementById("notification");
        notification.innerText = message;
        notification.style.display = "block";
        notification.style.backgroundColor = type === 'error' ? '#f8d7da' : '#e3f7e3';
        notification.style.color = type === 'error' ? '#721c24' : '#4CAF50';

        setTimeout(() => {
            notification.style.display = "none";
        }, 100000);
    }

    // Tambahkan event listener untuk setiap form edit, selesai, dan hapus
    document.querySelectorAll(".edit-form").forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const taskText = form.querySelector(".edit-input").value;
            showNotification(`Tugas "${taskText}" berhasil diperbarui`);
            form.submit();
        });
    });

    document.querySelectorAll(".complete-form").forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const taskText = form.parentNode.querySelector(".task-text").innerText;
            showNotification(`Tugas "${taskText}" selesai`);
            form.submit();
        });
    });

    document.querySelectorAll(".delete-form").forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const taskText = form.parentNode.querySelector(".task-text").innerText;
            showNotification(`Tugas "${taskText}" dihapus`);
            form.submit();
        });
    });
});
