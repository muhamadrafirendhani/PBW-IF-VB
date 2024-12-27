const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');

        if (status) {
            const notification = document.getElementById('notification');
            const notificationMessage = document.getElementById('notificationMessage');

            switch (status) {
                case 'add_success':
                    notificationMessage.textContent = "Tugas berhasil ditambahkan!";
                    break;
                case 'complete_success':
                    notificationMessage.textContent = "Tugas berhasil diselesaikan!";
                    break;
                case 'delete_success':
                    notificationMessage.textContent = "Tugas berhasil dihapus!";
                    break;
                case 'edit_success':
                    notificationMessage.textContent = "Tugas berhasil diubah!";
                    break;
            }

            // Tampilkan notifikasi
            notification.style.display = 'block';

            // Sembunyikan notifikasi setelah 3 detik
            setTimeout(() => {
                notification.style.display = 'none';
                // Hapus parameter status dari URL
                history.replaceState(null, null, window.location.pathname);
            }, 3000);
        }

        $(document).ready(function() {
            // Fungsi untuk memuat semua todo dari API
            function loadTodos() {
                $.get('api.php?action=list', function(data) {
                    var todoList = $('#todo-list');
                    todoList.empty();
                    data.forEach(function(todo) {
                        var li = $('<li>').text(todo.task);
                        if (!todo.is_completed) {
                            li.append(' <a href="#" class="complete" data-id="' + todo.id + '">Mark as completed</a>');
                        }
                        li.append(' <a href="#" class="delete" data-id="' + todo.id + '">Delete</a>');
                        todoList.append(li);
                    });
                });
            }

            // Add todo
            // Fungsi untuk menambahkan todo baru
            $('#add-form').submit(function(e) {
                e.preventDefault();
                var task = $('#task').val();
                $.post('api.php?action=add', JSON.stringify({task: task}), function() {
                    $('#task').val('');
                    loadTodos();
                });
            });

            // Complete todo
            // // Fungsi untuk menandai todo sebagai selesai
            $(document).on('click', '.complete', function() {
                var id = $(this).data('id');
                $.ajax({
                    url: 'api.php?action=complete',
                    type: 'PUT',
                    data: JSON.stringify({id: id}),
                    success: loadTodos
                });
            });

            // Delete todo
            // Fungsi untuk menghapus todo
            $(document).on('click', '.delete', function() {
                var id = $(this).data('id');
                $.ajax({
                    url: 'api.php?action=delete',
                    type: 'DELETE',
                    data: JSON.stringify({id: id}),
                    success: loadTodos
                });
            });

            // Initial load
            // Memuat todos pada inisialisasi awal
            loadTodos();
        });