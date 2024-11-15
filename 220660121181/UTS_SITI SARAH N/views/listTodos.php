<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
    <script src="assets/CSS/js/script.js"></script>
</head>
<body>
    <div class="container">
        <div class="todo">
            <h1>My To-do List</h1>

            <div class="row">
                <form method="POST" action="?action=add">
                    <input type="text" name="task" placeholder="Add your list">
                    <button type="submit" class="btn" title="Click to add your task"> 
                        <i class="fa fa-circle-plus"></i> 
                    </button>
                </form>
            </div>

            <ul id="list-container">
                <?php foreach ($todos as $todo): ?>
                    <li class="todo-item">
                        <span class="todo-text"><?php echo $todo['task']; ?></span>
                        <div class="todo-actions">
                            <?php
                                if (!$todo['is_completed']) {
                                    echo '<a href="?action=complete&id=' . $todo['id'] . '" class="complete-todo">
                                        <i class="fa-duotone fa-solid fa-circle-check"></i>
                                    </a>';
                                }

                                echo '<a href="?action=delete&id=' . $todo['id'] . '" class="delete-todo">
                                    <i class="fa-solid fa-trash"></i>
                                </a>';
                            ?>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>

            <div id="notification" style="display:none; position:fixed; top:10px; right:10px; padding:10px; border-radius:5px; z-index:1000;"></div>
        </div>
    </div>  
</body>
</html>
