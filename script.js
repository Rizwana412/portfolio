document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded successfully!");

  // Button click example (if you have buttons)
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
});
