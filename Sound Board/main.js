let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
	let btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerText = sound;

	btn.addEventListener('click', () => {
		stopSound();
		document.getElementById(sound).play();
	});
	
	document.getElementById('buttons').appendChild(btn);
});

function stopSound() {
	sounds.forEach(sound => {
		const audio = document.getElementById(sound);
		audio.pause();
		audio.currentTime = 0;
	});
}