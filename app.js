//TMDB

const API_KEY = "api_key=bde1a546ffc8631ea003ee05a65ddc70";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/trending/movie/day?" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const MOVIE_URL = "https://www.themoviedb.org/movie/";

const main = document.getElementById("main");

// Function to determine the icon based on the score
function getIcon(score) {
  if (score < 40) {
    return "img/rotten.jpg"; // Replace with the actual path to the garbage bin icon
  } else if (score <= 70) {
    return "img/mix.jpg"; // Replace with the actual path to the apple with worm icon
  } else {
    return "img/fresh.png"; // Replace with the actual path to the fresh apple icon
  }
}

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie, index) => {
    const { title, poster_path, vote_average, id } = movie;
    const movieScore = (vote_average * 10).toFixed(0); //Convert to percentage
    const icon = getIcon(movieScore); //Get the appropriate icon
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = ` 
    <a href="${MOVIE_URL + id}"><img src="${
      IMG_URL + poster_path
    }" alt="${title}"></a>
    <div class="flex-container">
      <h5>${index + 1}. ${title}</h5> 
      <div class="vote-container">
        <img src="${icon}" alt="Icon" class="vote-icon">
    <p class='vote'>${movieScore}%</p>
  
    </div>
    `;
    main.appendChild(movieEl);
  });
}
