// retrieve the JSON data
fetch('movies-data.json')
  .then(response => response.json())
  .then(data => {
    // select the ul element that will contain the movie items
    const movieList = document.querySelector('#featured-movies ul');

    // loop through the movies array in the JSON data
    data.movies.forEach(movie => {
      // create a new li element for each movie
      const movieItem = document.createElement('li');

      // create a new h3 element for the movie title
      const title = document.createElement('h3');
      title.textContent = movie.title;

      // create a new img element for the movie poster
      const poster = document.createElement('img');
      poster.src = movie.poster;
      poster.alt = 'Movie Poster';

      // create a new p element for the movie summary
      const summary = document.createElement('p');
      summary.textContent = movie.summary;

      // create a new a element for the "more information" link
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = 'More information';

      // append the title, poster, summary, and link to the movie item
      movieItem.appendChild(title);
      movieItem.appendChild(poster);
      movieItem.appendChild(summary);
      movieItem.appendChild(link);

      // append the movie item to the movie list
      movieList.appendChild(movieItem);
    });
  });
