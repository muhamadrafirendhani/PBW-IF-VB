<!DOCTYPE html>
<html>
<head>
    <title>Welcome to My Todo List</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <script src="assets/js/script.js"></script>
    </head>
<body>
    <div class="app">
        <div class="container">
            <h1>Ismi's Todo List</h1>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
         <div id="button">
            <form method="POST" action="?action=add">  
                <input type="text" name="task" placeholder="Task To Be Done...">
                <button id="submit">Add</button>          
                <div class="tasks">            
                </div>
            </form>
        </div>
    <ul>
        <?php foreach ($todos as $todo): ?>
            <li>
                <?php
                    // Tampilkan deskripsi Todo
                    echo $todo['task'];

                    // Jika Todo belum selesai, tampilkan ikon untuk menandai sebagai selesai
                    if (!$todo['is_completed']) {
                        echo ' ';
                        echo '<a href="?action=complete&id=' . $todo['id'] . '" class="complete">';
                        echo '<i class="fa fa-check"></i>'; // Ikon untuk menandai sebagai selesai
                        echo '</a>';
                    }

                        // Tampilkan ikon untuk menghapus Todo
                        echo ' ';
                        echo '<a href="?action=delete&id=' . $todo['id'] . '" class="delete">';
                        echo '<i class="fa fa-trash"></i>'; // Ikon untuk menghapus
                        echo '</a>';
                ?>
            </li>
        <?php endforeach; ?>
    </ul>
        <p id="pending-tasks"> You have <span class="count-value">0</span> task(S) to complete. </p>
        </div>
        <p id="error">Input cannot be empty!</p>
    </div>               
</body>
</html>