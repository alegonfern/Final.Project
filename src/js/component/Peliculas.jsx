import React from 'react';

const Peliculas = ({
  selectedMoviesGenres,
  movieGenres,
  handleMovieGenreClick,
  moviesByGenre,
  selectedMovies,
  handleMovieClick,
}) => {
  return (
    <div className="div-movie py-2">
      <h3>Vamos al cine, ¿de qué tipo de películas te gustan?</h3>
      <div className="genres movie-genres">
        {movieGenres.map((genre, index) => (
          <div
            key={index}
            className={`genre ${selectedMoviesGenres.includes(genre) ? 'selected' : ''}`}
            onClick={() => handleMovieGenreClick(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
      {/* Sección de películas relacionadas con los géneros seleccionados */}
      {selectedMoviesGenres.map((genre) => (
        <div key={genre}>
          <h3>¿Alguna de estas?</h3>
          <div className="genres movie-genres">
            {moviesByGenre[genre]?.map((movie, index) => (
              <div
                key={index}
                className={`genre ${selectedMovies[genre]?.includes(movie) ? 'selected' : ''}`}
                onClick={() => handleMovieClick(genre, movie)}
              >
                {movie}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Peliculas;
