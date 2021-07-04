const toggle = document.querySelectorAll('.faq-toggle');

toggle.forEach((element) => {
	element.addEventListener('click', () => {
		element.parentNode.classList.toggle('active');
	})
})

function removeActives() {
	toggle.forEach(element => element.classList.remove('active'));
}