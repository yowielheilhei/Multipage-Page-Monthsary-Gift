document.addEventListener('DOMContentLoaded', () => {
    
    // Get the modal elements
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('gallery-modal-img');
    const closeBtn = document.getElementById('gallery-close');
    
    // Select ALL images inside the gallery grid
    const galleryImages = document.querySelectorAll('.grid-item img');

    // Add a click event to every single image
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Set the popup image source to exactly what was just clicked
            modalImg.src = img.src; 
            
            // Show the popup
            modal.classList.add('show');
        });
    });

    // Close the popup when clicking the 'X'
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Close the popup when clicking anywhere in the dark background area
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});