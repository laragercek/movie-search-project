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
    container.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        // Check if the movie has a poster
        if (movie.poster_path) {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            movieElement.innerHTML = `<img src="${posterUrl}" alt="${movie.title} Poster">`;

            movieElement.addEventListener('click', function() {
                displayMovieSynopsis(movie);
            });

            container.appendChild(movieElement);
        }
    });
}
    
    function displayMovieSynopsis(movie) {
        document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const modalContent = `
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
        `;
        document.querySelector('.movie-synopsis').innerHTML = modalContent;
        document.getElementById('movie-details-modal').style.display = 'flex';
    }

    function closeModal(event) {
        // Only close if user clicks modal background or the close button
        if (event.target === this || event.target.id === 'close-modal') {
            document.getElementById('movie-details-modal').style.display = 'none';
        }
    }
    
    // Attach the closeModal function to the modal and close button
    document.getElementById('movie-details-modal').addEventListener('click', closeModal);
    document.getElementById('close-modal').addEventListener('click', closeModal);
    
 
    

    
 