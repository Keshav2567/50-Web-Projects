const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search')

searchBtn.addEventListener('click', () => {
	search.classList.toggle('show-search');
	search.focus();
});