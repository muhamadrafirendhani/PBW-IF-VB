// Check URL parameters to determine action (add or delete) and show alert
function checkNotification() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');

    if (action === 'add') {
        alert('List Berhasil Ditambah');
    } else if (action === 'delete') {
        alert('List Berhasil Dihapus');
    } else if (action === 'Mark as completed'){
        alert('List Selesai')
    }
}

// Run checkNotification when the page loads
document.addEventListener('DOMContentLoaded', checkNotification);