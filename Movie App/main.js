const apiKey = '3fd2be6f0c70a2a598f084ddfb75487c';
let API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w500`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="`;

const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
	let res = await fetch(url);
	let data = await res.json();

	console.log(data);
	showMovies(data.results);
}

function showMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		let movieElement = document.createElement('div');
		movieElement.classList.add('movie');
		movieElement.innerHTML = `
			<img src="${IMG_PATH + poster_path}" alt="${title}" />
			<div class="movie-info">
				<div class="movie-title">
					${title}
				</div>
				<span class="${getClassByRating(vote_average)}">${vote_average}</span>
			</div>
			<div class="overview">
				<h3>Overview</h3>
				<p>
					${overview}
				</p>
			</div>
		`;

		main.appendChild(movieElement);
	});
}

function getClassByRating(vote) {
	if (vote >= 8) {
		return "green";
	} else if (vote >= 5) {
		return "orange";
	} else {
		return "red";
	}
}

search.addEventListener('change', () => {
	let searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm);
		search.value = '';
	} else {
		location.reload();
	}
});