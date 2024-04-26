import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <h1>Listado de Películas</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie)}>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="selected-movie">
          <h2>{selectedMovie.title}</h2>
          <p>Año: {selectedMovie.year}</p>
          <p>Director: {selectedMovie.director}</p>
          <p>Duración: {selectedMovie.duration} minutos</p>
          <p>Género: {selectedMovie.genre.join(', ')}</p>
          <p>Calificación: {selectedMovie.rate}</p>
          <img src={selectedMovie.poster} alt={selectedMovie.title} />
        </div>
      )}
    </div>
  );
}

export default App;
