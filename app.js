//TMDB

const API_KEY = 'api_key=bde1a546ffc8631ea003ee05a65ddc70';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/trending/movie/day?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
      console.log(data.results);
      showMovies(data.results);
    })
}

function showMovies(data) {
  main.innerHTML = '';

  data.forEach(movie => {
    const {title, poster_path, overview, vote_average} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = ` 
    <img src="${IMG_URL + poster_path}" alt="${title}">
    <div class="flex-container">
    <h3>${title}</h3>
    <p>${overview}</p>
    <p class='vote'>${vote_average}/10</p>
    <a href="#"><button>Check it</button></a>
    </div>
    `

    main.appendChild(movieEl);
  })

}
