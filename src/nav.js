const mobileButton = document.getElementById('mobile-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton.addEventListener('click', () => {
  mobileButton.classList.toggle('bg-white/40');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
});