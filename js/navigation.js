const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
const body = document.body;

if (!toggle || !links) {
	throw new Error('Class ".menu-toggle" or ".nav-links" missing from HTML');
}

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

// setup ARIA
toggle.setAttribute('aria-expanded', 'false');
toggle.setAttribute('aria-controls', 'primary-navigation');
links.setAttribute('id', 'primary-navigation');

toggle.addEventListener('click', () => {
	const isOpen = links.classList.contains('open');

	if (isOpen) {
		closeMenu();
	} else {
		openMenu();
	}
});

// close menu on escapes
document.addEventListener('keydown', (input) => {
	if (input.key === 'Escape') {
		closeMenu();
	}
})

// close menu when tapping outside
document.addEventListener('click', (input) => {
	if (!links.classList.contains('open')) { return; }

	const isWithinMenu = links.contains(input.target) || toggle.contains(input.target);
	if (!isWithinMenu) {
		closeMenu();
	}
})

// Ensure menu closes when resizing to desktop
const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', (changeEvent) => {
	if (changeEvent.matches) {
		closeMenu();
	}
});

