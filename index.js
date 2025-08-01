// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Handle button clicks
  document.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      var key = button.innerHTML.toLowerCase();
      playSound(key);
      animateButton(key);
    });
  });

  // Handle key press
  document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    playSound(key);
    animateButton(key);
  });

  // Function to play sound
  function playSound(key) {
    switch (key) {
      case "w":
        new Audio("sounds/tom-1.mp3").play();
        break;
      case "a":
        new Audio("sounds/tom-2.mp3").play();
        break;
      case "s":
        new Audio("sounds/tom-3.mp3").play();
        break;
      case "d":
        new Audio("sounds/tom-4.mp3").play();
        break;
      case "j":
        new Audio("sounds/crash.mp3").play();
        break;
      case "k":
        new Audio("sounds/kick-bass.mp3").play();
        break;
      case "l":
        new Audio("sounds/snare.mp3").play();
        break;
      default:
        console.log("Unrecognized key:", key);
    }
  }

  // Function to animate the button and change text color
  function animateButton(key) {
    var button = document.querySelector("." + key);
    if (button) {
      button.classList.add("clicked");
      button.style.color = "#ffffff"; // Change text color

      setTimeout(function () {
        button.classList.remove("clicked");
        button.style.color = ""; // Reset text color to original
      }, 100);
    }
  }

});
