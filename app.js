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
    const {title, poster_path, overview} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = ` 
    <h3>${title}</h3>
    <img src="${IMG_URL + poster_path}" alt="${title}">
    <p>${overview}</p>
    <a href="#">More information</a>
    `

    main.appendChild(movieEl);
  })

}
