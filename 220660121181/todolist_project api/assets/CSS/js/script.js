document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const input = document.querySelector("input[name='task']");
    const listContainer = document.getElementById("list-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        if (input.value.trim() === "") {
            showNotification("Please enter a task before submitting.", 'error');
            return;
        }

        // Use the form's action URL for the fetch request
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(new FormData(form))
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showNotification("Task added successfully!");

                // Create a new list item element and append it to the list container
                const listItem = document.createElement("li");
                listItem.textContent = input.value;

                // Create check and delete icons
                const checkIcon = document.createElement("i");
                checkIcon.className = "fa-solid fa-circle-check";
                checkIcon.style.cursor = "pointer"; // Make it clickable
                checkIcon.onclick = function() {
                    showNotification("Task marked as complete!");
                    // Implement complete functionality here if needed
                };

                const deleteIcon = document.createElement("i");
                deleteIcon.className = "fa-solid fa-trash";
                deleteIcon.style.cursor = "pointer"; // Make it clickable
                deleteIcon.onclick = function() {
                    listContainer.removeChild(listItem);
                    showNotification("Task deleted successfully!");
                };

                // Append icons to the list item
                listItem.appendChild(checkIcon);
                listItem.appendChild(deleteIcon);
                listContainer.appendChild(listItem);

                // Clear the input field
                input.value = "";
            } else {
                showNotification("Error adding task.", 'error');
            }
        })
        .catch(error => {
            showNotification("An error occurred while adding the task: " + error.message, 'error');
            console.error(error);
        });
    });
});

function showNotification(message, type = 'success') {
    const notification = document.getElementById("notification");
    notification.innerText = message;
    notification.style.display = "block";
    notification.style.backgroundColor = type === 'error' ? '#f8d7da' : '#e3f7e3';
    notification.style.color = type === 'error' ? '#721c24' : '#4CAF50';

    setTimeout(() => {
        notification.style.display = "none";
    }, 3000); // Adjust the time as needed
}

console.log("lolo");