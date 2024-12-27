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