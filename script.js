const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDdiZTg5YmIwYjhhMzEwYmJjZGU0YzM5MzI5ZDdiYSIsInN1YiI6IjY1NWZiYTA0NzA2ZTU2MDBjNGI5YzQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqlqQtSY79qVcVs4OD7Uib1trcNRp-SYr8FNkWGRr9w'
    }
  };
    
    document.getElementById('search-button').addEventListener('click', function() {
        var searchTerm = document.getElementById('search-input').value;
        if (searchTerm) {
            searchMovies(searchTerm);
        }
    });
    
    function searchMovies(searchTerm) {
        fetch('https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(searchTerm), options)
            .then(response => response.json())
            .then(data => displayMovies(data.results))
            .catch(err => console.error(err));
    }

   function displayMovies(movies) {
    const container = document.getElementById('movies-container');
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'path_to_default_poster_image';

        movieElement.innerHTML = `<img src="${posterUrl}" alt="${movie.title} Poster">`;

        movieElement.addEventListener('click', function() {
            displayMovieSynopsis(movie);
        });

        container.appendChild(movieElement);
    });
}
    
    function displayMovieSynopsis(movie) {
        const modalContent = `
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
        `;
        document.getElementById('movie-details-modal').innerHTML = modalContent;
        document.getElementById('movie-details-modal').style.display = 'block';
    }
    
    
 