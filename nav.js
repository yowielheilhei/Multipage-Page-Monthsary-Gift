document.addEventListener("DOMContentLoaded", function() {
    // 1. Updated to include the background video tag at the top
    const navHTML = `
        <video class="yunky-bg-video" autoplay loop muted playsinline>
            <source src="assets/videos/bgst1.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <div class="yunky-nav-container">
            <header class="yunky-top-bar">
                <div class="yunky-menu-btn" id="yunky-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="yunky-logo">YUNKY</div>
            </header>

            <nav class="yunky-sidebar" id="yunky-sidebar">
                <ul class="yunky-nav-links">
                    <li><a href="home.html" class="nav-item">HOME</a></li>
                    <li><a href="gallery.html" class="nav-item">GALLERY</a></li>
                    <li><a href="song.html" class="nav-item">SONG FOR YOU</a></li>
                    <li><a href="notes.html" class="nav-item">NOTES</a></li>
                    <li><a href="loveletter.html" class="nav-item">LOVE LETTER</a></li>
                </ul>
            </nav>

            <div class="yunky-overlay" id="yunky-overlay"></div>
        </div>
    `;

    // 2. Inject the HTML into the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // ... (Keep the rest of your existing nav.js code exactly the same below this) ...
    const menuToggle = document.getElementById('yunky-menu-toggle');
    const sidebar = document.getElementById('yunky-sidebar');
    const overlay = document.getElementById('yunky-overlay');
    const navItems = document.querySelectorAll('.nav-item');

    function toggleMenu() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    const currentPage = window.location.pathname.split("/").pop();
    navItems.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});