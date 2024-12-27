// Seleksi elemen-elemen yang diperlukan dalam DOM
const taskInput = document.querySelector("input[name='task']"); // Input untuk nama tugas
const taskCountElement = document.querySelector(".count-value"); // Elemen untuk menampilkan jumlah tugas
const tasksContainer = document.querySelector(".tasks"); // Kontainer untuk menampung daftar tugas
const notification = document.createElement("div"); // Elemen untuk notifikasi
const error = document.getElementById("error"); // Elemen untuk menampilkan pesan error
const countValue = document.querySelector(".count-value"); // Elemen untuk menampilkan nilai jumlah tugas yang belum selesai

// Inisialisasi jumlah tugas yang belum selesai
let pendingTasks = 0;

// Fungsi untuk memperbarui tampilan jumlah tugas
const displayCount = (taskCount) => {
  countValue.innerText = taskCount; // Mengubah teks countValue untuk menampilkan jumlah tugas
};

// Fungsi untuk menambahkan tugas
const addTask = () => {
  const taskName = taskInput.value.trim(); // Ambil nilai input tugas dan menghapus spasi di sekitarnya
  error.style.display = "none"; // Menyembunyikan pesan error jika ada
  if (!taskName) { // Jika nama tugas kosong
    setTimeout(() => {
      error.style.display = "block"; // Menampilkan pesan error setelah 200ms
    }, 200);
    return; // Menghentikan eksekusi jika tidak ada tugas yang dimasukkan
  }

  // Membuat elemen div baru untuk tugas dengan struktur HTML
  const task = document.createElement("div");
  task.className = "task"; // Memberikan kelas untuk styling
  task.innerHTML = `
        <input type="checkbox" class="task-check" onclick="toggleComplete(this)"> <!-- Checkbox untuk menandai selesai -->
        <span class="taskname">${taskName}</span> <!-- Nama tugas -->
        <button class="edit" onclick="editTask(this)"> <!-- Tombol edit -->
            <i class="fas fa-pen"></i> <!-- Ikon edit -->
        </button>
        <button class="delete" onclick="deleteTask(this)"> <!-- Tombol delete -->
            <i class="fas fa-trash"></i> <!-- Ikon delete -->
        </button>
    `;

  // Menambahkan tugas ke dalam container tugas
  tasksContainer.insertAdjacentElement("beforebegin", task);

  // Meningkatkan jumlah tugas yang belum selesai
  pendingTasks++;
  updateTaskCount(); // Memperbarui jumlah tugas yang belum selesai
}

// Fungsi untuk memperbarui jumlah tugas yang belum selesai
function updateTaskCount() {
  taskCountElement.textContent = pendingTasks; // Mengupdate elemen yang menampilkan jumlah tugas
}

// Fungsi untuk menandai tugas sebagai selesai atau belum selesai
function toggleComplete(checkbox) {
  const taskNameElement = checkbox.nextElementSibling; // Mengambil elemen <span> yang berisi nama tugas
  if (checkbox.checked) { // Jika checkbox dicentang
    taskNameElement.style.textDecoration = "line-through"; // Menambahkan garis tengah pada nama tugas
    pendingTasks--; // Mengurangi jumlah tugas yang belum selesai
  } else {
    taskNameElement.style.textDecoration = "none"; // Menghapus garis tengah pada nama tugas
    pendingTasks++; // Menambahkan jumlah tugas yang belum selesai
  }
  updateTaskCount(); // Memperbarui jumlah tugas yang belum selesai
}

// Fungsi untuk mengedit nama tugas
function editTask(button) {
  const taskName = button.previousElementSibling; // Mengambil nama tugas
  const newTaskName = prompt("Edit your task:", taskName.textContent); // Menampilkan prompt untuk mengedit nama tugas
  if (newTaskName) { // Jika ada perubahan nama tugas
    taskName.textContent = newTaskName; // Mengubah nama tugas dengan yang baru
    task.remove();
    taskCount -= 1;
    displayCount(taskCount);
  }
}

// Fungsi untuk menghapus tugas
function deleteTask(button) {
  const taskItem = button.parentElement; // Mengambil elemen tugas yang akan dihapus
  if (!taskItem.querySelector(".task-check").checked) { // Jika tugas belum selesai (checkbox tidak dicentang)
    pendingTasks--; // Mengurangi jumlah tugas yang belum selesai
  }
  taskItem.remove(); // Menghapus elemen tugas dari DOM
  updateTaskCount(); // Memperbarui jumlah tugas yang belum selesai
}

// Event listener untuk tombol "Add" saat form disubmit
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form untuk melakukan reload halaman
  addTask(taskInput.value); // Menambahkan tugas baru
  taskInput.value = ""; // Mengosongkan input setelah tugas ditambahkan
});

// Event listener yang dijalankan setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
  const countValueElement = document.querySelector(".count-value"); // Mengambil elemen count-value

  // Fungsi untuk memperbarui jumlah tugas yang belum selesai
  function updateTaskCount() {
    const tasks = document.querySelectorAll("ul li:not(.completed)"); // Menghitung hanya tugas yang belum selesai
    countValueElement.textContent = tasks.length; // Menampilkan jumlah tugas yang belum selesai
  }

  // Fungsi untuk menampilkan notifikasi
  function showNotification(message) {
    console.log("Notification triggered: " + message); // Menampilkan pesan di konsol untuk debugging
    const notification = document.createElement("div"); // Membuat elemen div untuk notifikasi
    notification.classList.add("notification"); // Menambahkan kelas untuk styling
    notification.textContent = message; // Menambahkan pesan ke notifikasi

    // Menambahkan notifikasi ke body
    document.body.appendChild(notification);

    // Menghapus notifikasi setelah 3 detik
    setTimeout(() => {
        notification.remove();
    }, 3000);
    
    // Memanggil notifikasi untuk tugas yang ditambahkan atau dihapus
    showNotification("Tugas berhasil ditambahkan!"); 
    showNotification("Tugas berhasil dihapus!"); 
  }

  // Menambahkan event listener untuk form submit
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form reload halaman

    const taskInput = document.querySelector("input[name='task']"); // Mengambil nilai input tugas
    const taskName = taskInput.value.trim(); // Menghapus spasi di awal dan akhir nama tugas

    if (taskName === "") return; // Jika nama tugas kosong, keluar dari fungsi

    const newTask = document.createElement("li"); // Membuat elemen <li> untuk tugas baru
    newTask.innerHTML = `
        <input type="checkbox" class="task-checkbox"> <!-- Checkbox untuk selesai -->
        <span class="task-text">${taskName}</span> <!-- Nama tugas -->
        <a href="#" class="delete"><i class="fa fa-trash"></i></a> <!-- Tombol delete -->
    `;

    document.querySelector("ul").appendChild(newTask); // Menambahkan tugas baru ke dalam daftar
    taskInput.value = ""; // Mengosongkan input setelah tugas ditambahkan

    updateTaskCount(); // Memperbarui jumlah tugas yang belum selesai

    // Event listener untuk checkbox selesai
    const checkbox = newTask.querySelector(".task-checkbox");
    checkbox.addEventListener("change", function () {
      newTask.classList.toggle("completed", checkbox.checked); // Menambahkan atau menghapus kelas 'completed'
      updateTaskCount(); // Memperbarui jumlah tugas
    });

    // Event listener untuk tombol delete
    newTask.querySelector(".delete").addEventListener("click", function () {
      newTask.remove(); // Menghapus tugas
      updateTaskCount(); // Memperbarui jumlah tugas
    });
  });

  updateTaskCount(); // Memperbarui jumlah tugas saat DOM dimuat
});
