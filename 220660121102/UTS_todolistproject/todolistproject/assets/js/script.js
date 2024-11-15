function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message; // Set the message
    toast.className = 'toast show'; // Add the "show" class to trigger the CSS transition

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.className = toast.className.replace('show', ''); // Remove the "show" class
    }, 3000);
}

// Check URL parameters to determine action (add or delete) and show notification
function checkNotification() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');

    if (action === 'add') {
        showToast('List Berhasil Ditambah');
    } else if (action === 'delete') {
        showToast('List Berhasil Dihapus');
    }
}

// Run checkNotification when the page loads
document.addEventListener('DOMContentLoaded', checkNotification);