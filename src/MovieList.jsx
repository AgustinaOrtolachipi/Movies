import React from 'react';

function MovieList() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch('/movies.json')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
