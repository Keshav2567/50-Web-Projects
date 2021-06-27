const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
	load++
	if (load > 99) {
		clearTimeout(int);
	}
	loadingText.innerHTML = `${load}%`;
	loadingText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
	
	bg.style.filter = `blur(${scale(load, 100, 0, 0, 30)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	 return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}