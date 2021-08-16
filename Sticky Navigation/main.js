const nav = document.querySelector('.nav');

addEventListener('scroll', () => {
	if(scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active')
	} else {
		nav.classList.remove('active');
	}
});