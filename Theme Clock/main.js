const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

toggle.addEventListener('click', (e) => {
	html.classList.toggle('dark');
	if (html.classList.contains('dark')) {
		toggle.innerHTML = 'Light Mode';
	} else {
		toggle.innerHTML = 'Dark Mode';
	}
})

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(setTime, 1000);

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	
	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
	
	timeEl.innerHTML = `${hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock}:${minutes < 10 ? `0${minutes}`:minutes} ${ampm}`;
	
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

function scale(num, in_min, in_max, out_min, out_max) {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}