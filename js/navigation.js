(function () {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  const body = document.body;

  if (!toggle || !links) return;

  // Set up ARIA
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'primary-navigation');
  links.setAttribute('id', 'primary-navigation');

  function closeMenu() {
    links.classList.remove('open');
    body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    links.classList.add('open');
    body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close if clicking outside the dropdown (mobile)
  document.addEventListener('click', (e) => {
    if (!links.classList.contains('open')) return;
    const withinMenu = links.contains(e.target) || toggle.contains(e.target);
    if (!withinMenu) closeMenu();
  });

  // When resizing to desktop, ensure menu state is clean
  const mq = window.matchMedia('(min-width: 768px)');
  mq.addEventListener('change', (evt) => {
    if (evt.matches) {
      // desktop: nav is always visible via CSS; remove mobile-only classes
      closeMenu();
    }
  });
})();
