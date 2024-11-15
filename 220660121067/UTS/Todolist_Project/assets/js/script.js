function showSuccessMessage(message) {
    alert(message);
}

function markAsCompleted(id) {
    // Menambahkan kelas 'completed' ke tugas dengan id tertentu
    const taskElement = document.querySelector(`.task[data-id="${id}"]`);
    if (taskElement) {
        taskElement.classList.add('completed');
    }
    showSuccessMessage('Tugas berhasil diselesaikan!');
}

function deleteTask(id) {
    // Hapus tugas sesuai dengan id
    const taskElement = document.querySelector(`.task[data-id="${id}"]`);
    if (taskElement) {
        taskElement.remove();
    }
    showSuccessMessage('Tugas berhasil dihapus!');
}

function addTask(event) {
    const taskInput = document.querySelector('input[name="task"]');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        event.preventDefault();
        alert('Tugas tidak boleh kosong!');
    } else {
        alert('Tugas berhasil ditambahkan!');
    }
}
