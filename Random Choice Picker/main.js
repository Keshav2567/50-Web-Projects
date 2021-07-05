const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);
		randomSelect();
	}
});

function createTags(input) {
	// Creates an array for the value in the textarea separated by a comma
	const tagEl = input.split(',')
		.filter(tag => tag.trim() !== '')
		.map(tag => tag.trim());

	tagsEl.innerHTML = '';

	// Adding every element of thw array as a span in the DOM
	tagEl.forEach(tag => {
		const span = document.createElement('span');
		span.classList.add('tag')
		span.innerText = tag;
		tagsEl.appendChild(span);
	});
}

function randomSelect() {
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		if (randomTag !== undefined) {
			highlightTag(randomTag);

			setTimeout(() => {
				unHighlightTag(randomTag);
			}, 100);
		}
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		}, 100)
	}, times * 100)
}


function pickRandomTag() {
	const tags = document.querySelectorAll('.tag')
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unHighlightTag(tag) {
	tag.classList.remove('highlight');
}