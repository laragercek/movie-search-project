const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDdiZTg5YmIwYjhhMzEwYmJjZGU0YzM5MzI5ZDdiYSIsInN1YiI6IjY1NWZiYTA0NzA2ZTU2MDBjNGI5YzQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqlqQtSY79qVcVs4OD7Uib1trcNRp-SYr8FNkWGRr9w'
    }
  };
  
  fetch('https://api.themoviedb.org/3/configuration', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));