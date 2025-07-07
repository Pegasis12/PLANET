function mobileButton(){
  const mobileButton = document.getElementById('mobile-button');
  const mobileMenu = document.getElementById('nav');
  
  mobileButton.addEventListener('click', () => {
    mobileButton.classList.toggle('bg-white/40');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
  
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });
}
mobileButton();

function navAtivo(){
  const links = document.querySelectorAll("nav li a");

  function ativarLink(link) {
    const url = location.href;
    const href = link.href;
  
    if (url.includes(href)) {
      const span = link.closest("li").querySelector("span");
      if (span) {
        span.classList.remove("hidden");
        span.classList.add("block");
      }
    }
  }
  links.forEach(ativarLink);
}
navAtivo();