let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;

	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
});

prev.addEventListener('click',
	() => {
		currentActive--;

		if (currentActive < 1) {
			currentActive = 1;
		}

		update();
	});

function update() {
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	if (currentActive === circles.length) {
		next.disabled = true;
	} else if (currentActive === 1) {
		prev.disabled = true;
	} else {
		next.disabled = false;
		prev.disabled = false;
	}

	progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';
}