const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

let isMenuOpen = false;

hamburger.addEventListener('click', () => {
	if (isMenuOpen) {
		navLinks.style.display = "none";
		isMenuOpen = false;
	} else {
		navLinks.style.display = "block";
		isMenuOpen = true;
	}
});

