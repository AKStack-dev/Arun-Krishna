function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
}

// Load saved mode on page load
window.addEventListener("DOMContentLoaded", () => {
  const dark = localStorage.getItem("darkMode") === "true";
  setDarkMode(dark);
});

// Toggle button
toggleBtn.addEventListener("click", () => {
  const darkEnabled = body.classList.contains("dark");
  setDarkMode(!darkEnabled);
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Arun Krishna";
  const target = document.getElementById("typed-name");
  let index = 0;
  let typing = true;

  function typeLoop() {
    if (typing) {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(typeLoop, 150);
      } else {
        typing = false;
        setTimeout(typeLoop, 3000); // wait 3s before deleting
      }
    } else {
      if (index > 0) {
        target.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeLoop, 100);
      } else {
        typing = true;
        setTimeout(typeLoop, 500); // short pause before retyping
      }
    }
  }

  typeLoop();
});
