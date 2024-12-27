<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <link rel="stylesheet" type="text/css" href="assets/CSS/style.css">
    <script src="assets/js/script.js"></script>
</head>
<body>
    <div class="container">
        <h1 class="text-center">To Do List My Activity</h1>
        <div class="todo">
            <form method="POST" action="?action=add">
                <input type="text" name="task" placeholder="My Activity">
                <button type="submit">Add &nbsp; <span>&#43;</span></button>
            </form>
        </div>

        <div class="todo-item">
            <div class="empty">

                <img src="assets/listtt.JPEG" width="50%"/>
                <ul>
                    <?php foreach ($todos as $todo): ?>
                        <li>
                            <input type="checkbox" 
                                   <?php echo $todo['is_completed'] ? 'checked' : ''; ?> 
                                   onclick="location.href='?action=complete&id=<?php echo $todo['id']; ?>'">
                            <span class="task-text"><?php echo $todo['task']; ?></span>
                            
                            <!-- Container untuk tombol dalam kotak item -->
                            <div class="button-group">
                                <?php if (!$todo['is_completed']): ?>
                                    <a href="?action=complete&id=<?php echo $todo['id']; ?>" class="mark-completed">Mark as completed</a>
                                <?php endif; ?>
                                <a href="?action=delete&id=<?php echo $todo['id']; ?>" class="delete-button">Delete</a>
                            </div>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
