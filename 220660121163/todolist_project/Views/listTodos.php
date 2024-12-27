<!-- views/listTodos.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    
    <link rel="stylesheet" href="assets/css/style.css">

    <script src="assets/js/script.js"></script>
    
</head>
<body>
    <h1>Todo List</h1>
    <ul>
        <?php foreach ($todos as $todo): ?>
            <li>
                <?php
                    // Tampilkan deskripsi Todo
                    echo $todo['task'];

                    // Jika Todo belum selesai, tampilkan link untuk menandai sebagai selesai
                    if (!$todo['is_completed']) {
                        echo ' ';
                        echo '<a href="?action=complete&id=' . $todo['id'] . '">Mark as completed</a>';
                    }

                    // Tampilkan link untuk menghapus Todo
                    echo ' ';
                    echo '<a href="?action=delete&id=' . $todo['id'] . '">Delete</a>';
                ?>
            </li>
        <?php endforeach; ?>
    </ul>
    <form method="POST" action="?action=add">
        <input type="text" name="task" placeholder="New Task">
        <button type="submit">Add</button>
    </form>
</body>
</html>