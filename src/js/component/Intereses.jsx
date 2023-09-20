import React, { useContext, useState, useEffect } from 'react';
import '../../styles/Intereses.css';
import { UserContext } from '../store/UserContext';

const Intereses = () => {
  // Definición de géneros de videojuegos y juegos relacionados
  const genres = [
    'Acción', 'Aventura', 'Estrategia', 'Deportes', 'Carreras', 'Simulación',
    'RPG', 'Plataformas', 'Lucha', 'Shooter', 'Sandbox', 'Estrategia en tiempo real (RTS)',
    'Multijugador en línea Battle Arena (MOBA)', 'Juegos de rol (RPG, ARPG y más)',
    'Simulación y deportes', 'Rompecabezas y juegos de fiesta', 'Acción-aventura'
  ];

  const gamesByGenre = {
    'Acción': ['Call of Duty', 'Battlefield', 'Doom'],
    'Aventura': ['The Legend of Zelda', 'Uncharted', 'Tomb Raider'],
    'Estrategia': ['Civilization', 'Starcraft', 'Age of Empires'],
    // Agrega más juegos para otros géneros aquí...
  };

  // Definición de géneros de películas y películas relacionadas
  const movieGenres = [
    'Acción', 'Aventura', 'Catástrofe', 'Ciencia Ficción', 'Comedia', 'Documentales',
    'Drama', 'Fantasía'
  ];

  const moviesByGenre = {
    'Acción': ['Mad Max: Fury Road', 'Die Hard', 'John Wick'],
    'Aventura': ['Indiana Jones and the Last Crusade', 'Pirates of the Caribbean', 'The Revenant'],
    // Agrega más películas para otros géneros aquí...
  };

  // Definición de géneros musicales y artistas relacionados
  const musicGenres = ['Rock', 'Pop', 'Hip-Hop', 'Electronic', 'Jazz', 'Blues', 'Country'];
  const artistsByGenre = {
    'Rock': ['The Beatles', 'Led Zeppelin', 'Pink Floyd'],
    'Pop': ['Michael Jackson', 'Madonna', 'Beyoncé'],
    // Agrega más artistas para otros géneros aquí...
  };

  const platforms = ['Nintendo', 'PlayStation', 'Xbox', 'PC', 'Celular'];

  const { userId } = useContext(UserContext);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedGames, setSelectedGames] = useState({});
  const [selectedMoviesGenres, setSelectedMoviesGenres] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState({});
  const [selectedMusicGenres, setSelectedMusicGenres] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState({});
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [agePreference, setAgePreference] = useState({ min: 16, max: 99 });
  const [genderPreference, setGenderPreference] = useState('');

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleGameClick = (genre, game) => {
    if (selectedGames[genre]?.includes(game)) {
      const updatedGames = { ...selectedGames };
      updatedGames[genre] = selectedGames[genre].filter((g) => g !== game);
      setSelectedGames(updatedGames);
    } else {
      setSelectedGames({ ...selectedGames, [genre]: [...(selectedGames[genre] || []), game] });
    }
  };

  const handleMovieGenreClick = (genre) => {
    if (selectedMoviesGenres.includes(genre)) {
      setSelectedMoviesGenres(selectedMoviesGenres.filter((g) => g !== genre));
    } else {
      setSelectedMoviesGenres([...selectedMoviesGenres, genre]);
    }
  };

  const handleMovieClick = (genre, movie) => {
    if (selectedMovies[genre]?.includes(movie)) {
      const updatedMovies = { ...selectedMovies };
      updatedMovies[genre] = selectedMovies[genre].filter((m) => m !== movie);
      setSelectedMovies(updatedMovies);
    } else {
      setSelectedMovies({ ...selectedMovies, [genre]: [...(selectedMovies[genre] || []), movie] });
    }
  };

  const handleMusicGenreClick = (genre) => {
    if (selectedMusicGenres.includes(genre)) {
      setSelectedMusicGenres(selectedMusicGenres.filter((g) => g !== genre));
    } else {
      setSelectedMusicGenres([...selectedMusicGenres, genre]);
    }
  };

  const handleArtistClick = (genre, artist) => {
    if (selectedArtists[genre]?.includes(artist)) {
      const updatedArtists = { ...selectedArtists };
      updatedArtists[genre] = selectedArtists[genre].filter((a) => a !== artist);
      setSelectedArtists(updatedArtists);
    } else {
      setSelectedArtists({ ...selectedArtists, [genre]: [...(selectedArtists[genre] || []), artist] });
    }
  };

  const handlePlatformClick = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleAgeChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setAgePreference({ ...agePreference, min: value });
  };

  const handleMaxAgeChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setAgePreference({ ...agePreference, max: value });
  };

  const handleGenderChange = (event) => {
    setGenderPreference(event.target.value);
  };

  const handleSaveInterests = async () => {
    // Crear un objeto con los datos de interés para enviar al backend
    const userData = {
      userId: userId, // Aquí debes establecer el ID de usuario adecuado
      selectedGenres: selectedGenres,
      selectedGames: selectedGames,
      selectedMoviesGenres: selectedMoviesGenres,
      selectedMovies: selectedMovies,
      selectedMusicGenres: selectedMusicGenres,
      selectedArtists: selectedArtists,
      selectedPlatforms: selectedPlatforms,
      agePreference: agePreference,
      genderPreference: genderPreference,
    };
  
    // URL del endpoint en tu backend para guardar los datos de interés
    const saveInterestsUrl = 'http://tu-backend.com/api/guardar-intereses';
  
    try {
      const response = await fetch(saveInterestsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        // Los datos se guardaron exitosamente
        alert('Datos guardados exitosamente');
      } else {
        // Hubo un error al guardar los datos
        alert('Error al guardar los datos. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud al servidor:', error);
      alert('Error al conectar con el servidor. Por favor, intenta nuevamente más tarde.');
    }
  };
  

  return (
    <div className="mt-5 pt-5">
      <h2>Selecciona tus intereses</h2>
      <p>Haz clic en los géneros que te interesen y selecciona tus preferencias.</p>

      {/* Sección de géneros de videojuegos */}
      <h3>Géneros de videojuegos</h3>
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
      <h3>Videojuegos relacionados:</h3>
      {selectedGenres.map((genre) => (
        <div key={genre}>
          <h4>{genre}</h4>
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

      {/* Sección de géneros de películas */}
      <h3>Géneros de películas</h3>
      <div className="genres">
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
      <h3>Películas relacionadas:</h3>
      {selectedMoviesGenres.map((genre) => (
        <div key={genre}>
          <h4>{genre}</h4>
          <div className="genres">
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

      {/* Sección de géneros musicales */}
      <h3>Géneros musicales</h3>
      <div className="genres">
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
      <h3>Artistas relacionados:</h3>
      {selectedMusicGenres.map((genre) => (
        <div key={genre}>
          <h4>{genre}</h4>
          <div className="genres">
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

      {/* Sección de plataformas de juego */}
      <h3>Plataformas de juego</h3>
      <div className="genres">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className={`genre ${selectedPlatforms.includes(platform) ? 'selected' : ''}`}
            onClick={() => handlePlatformClick(platform)}
          >
            {platform}
          </div>
        ))}
      </div>

      {/* Sección de preferencias de edad y género */}
      <h3>Preferencias de edad y género</h3>
      <div className="age-gender">
        <div className="age">
          <label>Rango de edad: {agePreference.min} - {agePreference.max}+</label>
          <input
            type="range"
            min="16"
            max="99"
            value={agePreference.min}
            onChange={handleAgeChange}
          />
          <input
            type="range"
            min="16"
            max="99"
            value={agePreference.max}
            onChange={handleMaxAgeChange}
          />
        </div>
        <div className="gender">
          <label>Género preferido:</label>
          <select value={genderPreference} onChange={handleGenderChange}>
            <option value="">Selecciona</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="No binario">No binario</option>
          </select>
        </div>
      </div>

      {/* Botón para guardar intereses */}
      <div className="submit-button">
        <button onClick={handleSaveInterests}>Guardar Intereses</button>
      </div>
    </div>
  );
};

export default Intereses;
