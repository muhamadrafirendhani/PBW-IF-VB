document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        const taskInput = form.querySelector("input[name='task']");
        const taskValue = taskInput.value.trim();

        if (taskValue === "") {
            alert("Please enter a task.");
            return;
        }

        // Mengirimkan data ke server menggunakan Fetch API
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(new FormData(form)).toString()
        })
        .then(response => {
            if (response.ok) {
                alert("Task added successfully!");
                // Reload halaman untuk menampilkan daftar terbaru
                window.location.reload();
            } else {
                alert("Error adding task.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an error with the request.");
        });
    });
});