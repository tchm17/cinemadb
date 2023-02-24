//TMDB

const API_KEY = 'api_key=bde1a546ffc8631ea003ee05a65ddc70';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/trending/movie/day?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const MOVIE_URL = 'https://www.themoviedb.org/movie/';

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
    const {title, poster_path, vote_average, id} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = ` 
    <a href="${MOVIE_URL + id}"><img src="${IMG_URL + poster_path}" alt="${title}"></a>
    <div class="flex-container">
    <p class='vote'>${vote_average.toFixed(1) * 10}%</p>
    <h5>${title}</h5> 
    </div>
    `
    main.appendChild(movieEl);
  })

}

/*const vote = document.querySelector('.vote');
    const style = getComputedStyle(vote);
    const color = style.color;
    console.log(color);
    
    function getColor (color) {
    
      if (vote_average >= 8) {
        document.getElementByClass('vote').style.color = "green";
      }
      else if (vote_average >= 5) {
        document.getElementByClass('vote').style.color = "orange";
      }
      else {
        document.getElementByClass('vote').style.color = "red";
      }
    }*/