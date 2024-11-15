<?php
// index.php

/**
 * File ini adalah titik awal dari aplikasi.
 *
 * Ia menggunakan kelas TodoController untuk menangani berbagai aksi
 * dan kemudian merender tampilan dengan daftar tugas.
 */

// Memanggil file TodoController.php untuk menggunakan class TodoController
require_once 'controllers/TodoController.php';

$controller = new TodoController();
$action = $_GET['action'] ?? null;

// Menangani parameter aksi
switch ($action) {
    case 'add':
        // Dapatkan tugas dari request
        $task = $_POST['task'] ?? '';

        // Tambahkan tugas ke daftar
        $controller->add($task);

        // Kembalikan daftar tugas dalam format JSON agar JavaScript bisa menggunakannya
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'todos' => $controller->index() // Dapatkan semua tugas setelah ditambahkan
        ]);
        exit;

    case 'complete':
        // Dapatkan id dari request
        $id = $_GET['id'] ?? '';

        // Tandai tugas sebagai selesai
        $controller->markAsCompleted($id);
        break;
        
    case 'delete':
        // Dapatkan id dari request
        $id = $_GET['id'] ?? '';

        // Hapus tugas dari daftar
        $controller->delete($id);
        break;
}

// Dapatkan daftar tugas untuk halaman pertama kali
$todos = $controller->index();

// Merender tampilan
require 'views/listTodos.php';
