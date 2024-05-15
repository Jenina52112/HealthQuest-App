document.addEventListener('DOMContentLoaded', function () {
    const btnEl = document.getElementById('btnEl');

    // Function to start countdown
    function startCountdown() {
        let countdown = 5; // Initial countdown value

        // Update countdown every second (1000 milliseconds)
        const timer = setInterval(function () {
            // Display countdown value
            btnEl.innerText = countdown;

            // If countdown reaches 0, stop the timer
            if (countdown <= 0) {
                clearInterval(timer);
                btnEl.innerText = 'Start Countdown'; // Reset button text
            }

            countdown--; // Decrement countdown
        }, 1000);
    }

    // Add click event listener to the button
    btnEl.addEventListener('click', startCountdown);
});