<?php
// Memanggil file TodoController.php untuk menggunakan class TodoController
require_once 'controllers/TodoController.php';

$controller = new TodoController();
$action = $_GET['action'] ?? null;

switch ($action) {
    case 'add':
        $task = $_POST['task'] ?? '';
        $controller->add($task);

        // Redirect setelah penambahan untuk mencegah duplikasi saat refresh
        header("Location: index.php");
        exit;

    case 'complete':
        $id = $_GET['id'] ?? '';
        $controller->markAsCompleted($id);

        // Redirect setelah menyelesaikan tugas untuk mencegah duplikasi saat refresh
        header("Location: index.php");
        exit;

    case 'delete':
        $id = $_GET['id'] ?? '';
        $controller->delete($id);

        // Redirect setelah penghapusan untuk mencegah duplikasi saat refresh
        header("Location: index.php");
        exit;

    case 'edit':
        $id = $_GET['id'] ?? '';
        $task = $_POST['task'] ?? '';
        $controller->edit($id, $task);

        // Redirect setelah pengeditan untuk mencegah duplikasi saat refresh
        header("Location: index.php");
        exit;
}

// Dapatkan daftar tugas
$todos = $controller->index();

// Merender tampilan
require 'view/listTodos.php';