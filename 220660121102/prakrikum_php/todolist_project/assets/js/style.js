document.querySelector('form').addEventListener('submit', function(event) {
    const taskInput = document.querySelector('input[name="task"]');
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Task added successfully!');
    }
});