<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo List</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
    <div class="container">
        <!-- Area Notifikasi -->
        <div id="notification" class="notification"></div>

        <!-- Form Tambah Project -->
        <h2>Tambah Project</h2>
        <form action="index.php?action=add" method="POST" class="add-task">
            <input type="text" name="task" placeholder="Tugas baru" required class="task-input">
            <button type="submit" class="submit-button">Tambah</button>
        </form>

        <!-- Daftar Project -->
        <h1>Daftar Project</h1>
        <ul id="task-list">
            <?php foreach ($todos as $todo): ?>
                <li class="<?= $todo['is_completed'] ? 'completed' : '' ?>">
                    <span class="task-text"><?= htmlspecialchars($todo['task']) ?></span>

                    <!-- Form Edit -->
                    <form action="index.php?action=edit&id=<?= $todo['id'] ?>" method="POST" class="edit-form">
                        <input type="text" name="task" value="<?= htmlspecialchars($todo['task']) ?>" required class="edit-input">
                        <button type="submit" class="update-button">Update</button>
                    </form>

                    <!-- Tombol Tandai Selesai -->
                    <form action="index.php?action=complete&id=<?= $todo['id'] ?>" method="POST" class="complete-form">
                        <button type="submit" class="complete-button" <?= $todo['is_completed'] ? 'disabled' : ''; ?>>Selesai</button>
                    </form>

                    <!-- Tombol Hapus -->
                    <form action="index.php?action=delete&id=<?= $todo['id'] ?>" method="POST" class="delete-form">
                        <button type="submit" class="delete-button">Hapus</button>
                    </form>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <script src="assets/js/script.js"></script>
</body>
</html>
