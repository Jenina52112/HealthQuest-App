document.addEventListener("DOMContentLoaded", function () {
  const btnEl = document.getElementById("btnEl");
  const breathText = document.querySelector(".breathin");
  let isBreathingIn = true; // To toggle between "Breath in!" and "Breath Out!"
  let breathOutCount = 0; // Counter for "Breath Out!" cycles
  let isInitialClick = true; // To check if it's the first click

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
        isBreathingIn = !isBreathingIn; // Toggle breathing state

        if (isBreathingIn) {
          breathText.innerText = "Breath in!";
        } else {
          breathText.innerText = "Breath Out!";
          breathOutCount++; // Increment "Breath Out!" counter
        }

        // Check if "Breath Out!" has been displayed 3 times
        if (breathOutCount < 3 || (breathOutCount === 3 && !isBreathingIn)) {
          startCountdown(); // Restart the countdown for all but the final "Breath Out!"
        } else {
          breathText.innerText = "Nicely Done";
          btnEl.innerText = "benefits"; // Change button text to "benefits"
          btnEl.onclick = function () {
            window.location.href = "path/to/benefits.js"; // Redirect to the desired JavaScript file
          };
        }
      }

      countdown--; // Decrement countdown
    }, 1000);
  }

  // Add click event listener to the button
  btnEl.addEventListener("click", function () {
    if (isInitialClick) {
      isInitialClick = false; // Set to false after the first click
      startCountdown(); // Start the initial countdown
    }
  });
});
