const joke = document.getElementById('joke');
const btn = document.getElementById('btn');

generateJoke();

btn.addEventListener('click', () => {
	generateJoke();
})

// Using Async/Await
async function generateJoke() {
	const config = {
		headers: {
			'Accept': 'application/json'
		},
	}
	const res = await fetch('https://icanhazdadjoke.com', config);

	const data = await res.json();

	joke.innerText = data.joke;
	
}

// Using Fetch API
/*
function generateJoke() {
	const config = {
		headers: {
			'Accept': 'application/json'
		},
	}
	
	fetch('https://icanhazdadjoke.com', config)
	.then((res) => res.json())
	.then((data) => {
		joke.innerText = data.joke;
	});
}*/