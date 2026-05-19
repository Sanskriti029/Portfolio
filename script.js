
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  },
  {
    threshold: 0.15,
  },
);
reveals.forEach((el) => observer.observe(el));
// Typing effect
const words = ["Sanskriti", "Developer", "Learner", "Creator"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingText = document.getElementById("typingText");
function type() {
  currentWord = words[i];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, j--);
  } else {
    typingText.textContent = currentWord.substring(0, j++);
  }
  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, isDeleting ? 50 : 120);
}
type();
// Header hide on scroll
let lastScroll = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
    header.style.transform = "translateY(0)";
  
  lastScroll = currentScroll;
});

// Default dark mode
document.documentElement.classList.add("dark");

// Set correct icon on load
document.getElementById("moonIcon").classList.add("hidden");
document.getElementById("sunIcon").classList.remove("hidden");

// Dark mode toggle
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");

  document.getElementById("moonIcon").classList.toggle("hidden");
  document.getElementById("sunIcon").classList.toggle("hidden");
}

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
  document.getElementById("menuIcon").classList.toggle("hidden");
  document.getElementById("closeIcon").classList.toggle("hidden");
}
// Cursor glow
const glow = document.getElementById("cursorGlow");
if (glow) {
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}
// Auto-close mobile menu
const mobileLinks = document.querySelectorAll("#mobileMenu a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});
