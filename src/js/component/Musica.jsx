import React from 'react';

const Musica = ({
  selectedMusicGenres,
  musicGenres,
  handleMusicGenreClick,
  artistsByGenre,
  selectedArtists,
  handleArtistClick,
}) => {
  return (
    <div className="div-musica py-2">
      <h3>¡Nada como jugar y escuchar tu música favorita!</h3>
      <div className="genres music-genres">
        {musicGenres.map((genre, index) => (
          <div
            key={index}
            className={`genre ${selectedMusicGenres.includes(genre) ? 'selected' : ''}`}
            onClick={() => handleMusicGenreClick(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
      {/* Sección de artistas relacionados con los géneros musicales seleccionados */}
      {selectedMusicGenres.map((genre) => (
        <div key={genre}>
          <h3>Artistas o banda favorita?</h3>
          <div className="genres music-genres">
            {artistsByGenre[genre]?.map((artist, index) => (
              <div
                key={index}
                className={`genre ${selectedArtists[genre]?.includes(artist) ? 'selected' : ''}`}
                onClick={() => handleArtistClick(genre, artist)}
              >
                {artist}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Musica;
