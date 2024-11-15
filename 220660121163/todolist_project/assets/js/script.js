document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const taskInput = form.querySelector('input[name="task"]');
        
        if (taskInput.value.trim() === '') {
            alert('Please enter a task.');
            event.preventDefault(); // Mencegah pengiriman form
        } else {
            alert('Task added successfully!');
        }
    });
});