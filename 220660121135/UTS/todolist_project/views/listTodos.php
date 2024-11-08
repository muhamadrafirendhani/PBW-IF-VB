<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo List</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="container">
        <!-- Notifikasi -->
        <div id="notification" style="display: none; padding: 10px; color: #fff; background-color: #4CAF50; margin-bottom: 10px; border-radius: 4px;">
            <span id="notificationMessage"></span>
        </div>

        <h2>Tambah Tugas</h2>
        <form action="index.php?action=add" method="POST" class="add-task">
            <input type="text" name="task" placeholder="Tugas baru" required class="task-input">
            <button type="submit" class="submit-button">Tambah</button>
        </form>

        <h1>Daftar Tugas</h1>
        <ul>
            <?php foreach ($todos as $todo): ?>
                <li style="<?= $todo['is_completed'] ? 'text-decoration: line-through; color: gray;' : ''; ?>">
                    <span class="task-text"><?= htmlspecialchars($todo['task']) ?></span>

                    <!-- Form Edit -->
                    <form action="index.php?action=edit&id=<?= $todo['id'] ?>" method="POST" style="display:inline;">
                        <input type="text" name="task" value="<?= htmlspecialchars($todo['task']) ?>" required class="edit-input">
                        <button type="submit" class="update-button">Update</button>
                    </form>

                    <!-- Tombol Tandai Selesai -->
                    <form action="index.php?action=complete&id=<?= $todo['id'] ?>" method="POST" style="display:inline;">
                        <button type="submit" class="complete-button" <?= $todo['is_completed'] ? 'disabled' : ''; ?>>Selesai</button>
                    </form>

                    <!-- Tombol Hapus -->
                    <form action="index.php?action=delete&id=<?= $todo['id'] ?>" method="POST" style="display:inline;">
                        <button type="submit" class="delete-button">Hapus</button>
                    </form>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>

    <script src="assets/js/script.js"></script>
</body>
</html>
