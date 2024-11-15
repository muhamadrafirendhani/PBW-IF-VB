// script.js

// Menambahkan event listener untuk form submit agar menampilkan alert setelah berhasil menambahkan task
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk reload halaman

    var taskInput = document.querySelector('input[name="task"]');
    var taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
    } else {
        alert('Task has been added!');
        this.submit(); // Submit form jika valid
    }
});

// Fungsi untuk menandai tugas sebagai selesai
function markAsCompleted(id) {
    // Mengirim permintaan untuk menandai sebagai selesai
    fetch('?action=complete&id=' + id)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Task marked as completed!');
                location.reload(); // Reload halaman setelah menandai sebagai selesai
            } else {
                alert('Failed to mark task as completed.');
            }
        });
}

// Fungsi untuk menghapus tugas
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        fetch('?action=delete&id=' + id)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Task has been deleted!');
                    location.reload(); // Reload halaman setelah dihapus
                } else {
                    alert('Failed to delete task.');
                }
            });
    }
}
