import React from 'react';

const GenerosVideojuegos = ({
  selectedGenres,
  genres,
  handleGenreClick,
  gamesByGenre,
  selectedGames,
  handleGameClick,
}) => {
  return (
    <div className="div-videogames py-2">
      <h3>¿Qué géneros de videojuegos te gustan?</h3>
      <div className="genres">
        {genres.map((genre, index) => (
          <div
            key={index}
            className={`genre ${selectedGenres.includes(genre) ? 'selected' : ''}`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
      {/* Sección de juegos relacionados con los géneros seleccionados */}
      {selectedGenres.map((genre) => (
        <div key={genre}>
          <h3>Videojuegos de: {genre}</h3>
          <div className="genres">
            {gamesByGenre[genre]?.map((game, index) => (
              <div
                key={index}
                className={`genre ${selectedGames[genre]?.includes(game) ? 'selected' : ''}`}
                onClick={() => handleGameClick(genre, game)}
              >
                {game}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenerosVideojuegos;
