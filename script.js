// Optional: glowing logo animation effect
const logo = document.querySelector('.logo-glow');
setInterval(() => {
  logo.style.filter = 'drop-shadow(0 0 10px #f0d57c)';
  setTimeout(() => logo.style.filter = 'drop-shadow(0 0 5px #e4c88f)', 500);
}, 1500);
