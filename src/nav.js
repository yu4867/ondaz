export function setupMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}
