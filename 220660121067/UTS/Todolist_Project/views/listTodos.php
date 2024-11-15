<!-- views/listTodos.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
    <h1>Todo List</h1>

    <form method="POST" action="?action=add" onsubmit="addTask(event)">
        <input type="text" name="task" placeholder="Masukkan Tugas">
        <button type="submit">Tambah</button>
    </form>

    <ul>
        <?php foreach ($todos as $todo): ?>
            <li>
                <span class="task <?php echo $todo['is_completed'] ? 'completed' : ''; ?>">
                    <?php echo $todo['task']; ?>
                </span>
                <div class="actions">
                    <?php if (!$todo['is_completed']): ?>
                        <a href="?action=complete&id=<?php echo $todo['id']; ?>" class="complete" onclick="markAsCompleted(<?php echo $todo['id']; ?>)">Selesaikan</a>
                    <?php endif; ?>
                    <a href="?action=delete&id=<?php echo $todo['id']; ?>" class="delete" onclick="deleteTask(<?php echo $todo['id']; ?>)">Hapus</a>
                </div>
            </li>
        <?php endforeach; ?>
    </ul>

    <script src="assets/js/script.js"></script>
</body>
</html>
