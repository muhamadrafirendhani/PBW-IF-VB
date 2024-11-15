<?php
// Memanggil file TodoController.php untuk menggunakan class TodoController
require_once 'controllers/TodoController.php';

$controller = new TodoController();
$todos = $controller->index();
$action = $_GET['action'] ?? null;

switch ($action) {
    case 'add':
        $task = $_POST['task'] ?? '';
        $controller->add($task);
        header("Location: index.php?status=add_success");
        exit;

    case 'complete':
        $id = $_GET['id'] ?? '';
        $controller->markAsCompleted($id);
        header("Location: index.php?status=complete_success");
        exit;

    case 'delete':
        $id = $_GET['id'] ?? '';
        $controller->delete($id);
        header("Location: index.php?status=delete_success");
        exit;

    case 'edit':
        $id = $_GET['id'] ?? '';
        $task = $_POST['task'] ?? '';
        $controller->edit($id, $task);
        header("Location: index.php?status=edit_success");
        exit;
}

// Dapatkan daftar tugas
$todos = $controller->index();

// Merender tampilan
require 'views/listTodos.php';
