document.addEventListener('DOMContentLoaded', function() {
    const deleteLinks = document.querySelectorAll('a[href*="delete"]');
    
    deleteLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const confirmation = confirm("Are you sure you want to delete this task?");
            if (!confirmation) {
                event.preventDefault(); // Mencegah penghapusan jika pengguna tidak mengkonfirmasi
            }
        });
    });
});