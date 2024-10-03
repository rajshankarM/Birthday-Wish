function openBox() {
  const lid = document.getElementById("lid");
  const message = document.getElementById("message");
  const balloonContainer = document.getElementById("balloonContainer");
  const confetti = document.getElementById("confetti");

  // Animate the lid to open the box
  lid.style.transform = "translateY(-80px)";

  // Show the message after the box opens
  setTimeout(() => {
    message.parentElement.style.opacity = "1";
  }, 500);

  // Show the balloons and confetti after the box opens
  balloonContainer.style.display = "block";
  confetti.style.display = "block";

  // Automatically reset the box after 3 seconds
  setTimeout(() => {
    // Hide the message
    message.parentElement.style.opacity = "0";

    // Close the lid after the message fades
    setTimeout(() => {
      lid.style.transform = "translateY(0px)";
      // Hide the balloons and confetti
      balloonContainer.style.display = "none";
      confetti.style.display = "none";
    }, 500); // 0.5 seconds to hide the message
  }, 3000); // 3 seconds of message visibility before reset
}

// Start the box opening automatically
openBox();

// To keep the box opening in a loop, you can call the `openBox()` again after reset
setInterval(() => {
  openBox();
}, 4000); // 4 seconds interval for full open-reset loop
