document.addEventListener('DOMContentLoaded', () => {
    const envelopeLink = document.getElementById('envelopeLink');
    // Grab the text element directly below the envelope
    const clickText = document.querySelector('.click-text');

    envelopeLink.addEventListener('click', function(event) {
        // Prevent the link from firing immediately
        event.preventDefault();
        
        // Add the 'open' class to trigger the CSS opening animation
        this.classList.add('open');

        // Get the target URL from the href attribute in the HTML
        const targetUrl = this.getAttribute('href');

        // --- NEW COUNTDOWN LOGIC ---
        let timeLeft = 59; // Number of seconds for the countdown
        
        // Immediately change the text on click
        clickText.textContent = `Opening in ${timeLeft}...`;
        
        // Start a timer that runs every 1000 milliseconds (1 second)
        const countdownTimer = setInterval(() => {
            timeLeft--; // Subtract 1 from the time left
            
            if (timeLeft > 0) {
                // Update the text on screen
                clickText.textContent = `Opening in ${timeLeft}...`;
            } else {
                // When it reaches 0, stop the timer
                clearInterval(countdownTimer);
                clickText.textContent = "Welcome!";
                
                // Wait just half a second so they can read "Welcome!", then redirect
                setTimeout(() => {
                    if (targetUrl && targetUrl !== '#') {
                        window.location.href = targetUrl;
                    } else {
                        alert("Countdown finished! (Replace '#' with your actual destination URL in the HTML file)");
                        
                        // Reset everything for testing purposes
                        envelopeLink.classList.remove('open');
                        clickText.textContent = "Click the Message";
                    }
                }, 500); 
            }
        }, 1000); 
    });
});