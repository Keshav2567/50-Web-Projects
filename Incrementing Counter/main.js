const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
	counter.innerText = '0';

	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const counterText = +counter.innerText;

		const changedCounter = +target / 200;


		if (counterText < target) {
			counter.innerText = `${Math.ceil(counterText + changedCounter)}`;
			setTimeout(updateCounter, 1)
		} else {
			counter.innerText = target;
		}
	}
	updateCounter();
});