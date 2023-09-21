import React, { useContext, useState } from 'react';
import GenerosVideojuegos from './GenerosVideojuegos';
import Peliculas from './Peliculas';
import Musica from './Musica';
import EdadGenero from './EdadGenero';
import { UserContext } from './UserContext'; // Asegúrate de importar tu contexto de usuario aquí


const Intereses = () => {
    const { userPreferences, updateUserPreferences } = useContext(UserContext);

    // Estados locales para gestionar las selecciones del usuario
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedGames, setSelectedGames] = useState({});
    const [selectedMoviesGenres, setSelectedMoviesGenres] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState({});
    const [selectedMusicGenres, setSelectedMusicGenres] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState({});
    const [agePreference, setAgePreference] = useState({ min: 0, max: 99 });
    const [genderPreference, setGenderPreference] = useState('De todo');

    // Funciones para gestionar las selecciones del usuario
    const handleGenreClick = (genre) => {
        const updatedGenres = [...selectedGenres];
        if (updatedGenres.includes(genre)) {
            const index = updatedGenres.indexOf(genre);
            if (index !== -1) {
                updatedGenres.splice(index, 1);
            }
        } else {
            updatedGenres.push(genre);
        }
        setSelectedGenres(updatedGenres);
    };

    const handleGameClick = (genre, game) => {
        const updatedGames = { ...selectedGames };
        if (!updatedGames[genre]) {
            updatedGames[genre] = [];
        }

        if (updatedGames[genre].includes(game)) {
            const index = updatedGames[genre].indexOf(game);
            if (index !== -1) {
                updatedGames[genre].splice(index, 1);
            }
        } else {
            updatedGames[genre].push(game);
        }

        setSelectedGames(updatedGames);
    };

    const handleMovieGenreClick = (genre) => {
        const updatedGenres = [...selectedMoviesGenres];
        if (updatedGenres.includes(genre)) {
            const index = updatedGenres.indexOf(genre);
            if (index !== -1) {
                updatedGenres.splice(index, 1);
            }
        } else {
            updatedGenres.push(genre);
        }
        setSelectedMoviesGenres(updatedGenres);
    };

    const handleMovieClick = (genre, movie) => {
        const updatedMovies = { ...selectedMovies };
        if (!updatedMovies[genre]) {
            updatedMovies[genre] = [];
        }

        if (updatedMovies[genre].includes(movie)) {
            const index = updatedMovies[genre].indexOf(movie);
            if (index !== -1) {
                updatedMovies[genre].splice(index, 1);
            }
        } else {
            updatedMovies[genre].push(movie);
        }

        setSelectedMovies(updatedMovies);
    };

    const handleMusicGenreClick = (genre) => {
        const updatedGenres = [...selectedMusicGenres];
        if (updatedGenres.includes(genre)) {
            const index = updatedGenres.indexOf(genre);
            if (index !== -1) {
                updatedGenres.splice(index, 1);
            }
        } else {
            updatedGenres.push(genre);
        }
        setSelectedMusicGenres(updatedGenres);
    };

    const handleArtistClick = (genre, artist) => {
        const updatedArtists = { ...selectedArtists };
        if (!updatedArtists[genre]) {
            updatedArtists[genre] = [];
        }

        if (updatedArtists[genre].includes(artist)) {
            const index = updatedArtists[genre].indexOf(artist);
            if (index !== -1) {
                updatedArtists[genre].splice(index, 1);
            }
        } else {
            updatedArtists[genre].push(artist);
        }

        setSelectedArtists(updatedArtists);
    };

    const handleAgeChange = (e) => {
        const age = parseInt(e.target.value);
        setAgePreference({ ...agePreference, min: age });
    };

    const handleMaxAgeChange = (e) => {
        const age = parseInt(e.target.value);
        setAgePreference({ ...agePreference, max: age });
    };

    const handleMinAgeInputChange = (e) => {
        const age = parseInt(e.target.value);
        if (!isNaN(age)) {
            setAgePreference({ ...agePreference, min: age });
        }
    };

    const handleGenderChange = (e) => {
        const gender = e.target.value;
        setGenderPreference(gender);
    };



    // Función para guardar las preferencias del usuario
    const savePreferences = async () => {
        const updatedUserPreferences = {
            selectedGenres,
            selectedGames,
            selectedMoviesGenres,
            selectedMovies,
            selectedMusicGenres,
            selectedArtists,
            agePreference,
            genderPreference,
        };

        // Llama a la función del contexto para actualizar las preferencias del usuario
        updateUserPreferences(updatedUserPreferences);

        // Crear un objeto con los datos de interés para enviar al backend
        const userData = {
            userId: 'user123', // Debes establecer el ID de usuario adecuado
            selectedGenres,
            selectedGames,
            selectedMoviesGenres,
            selectedMovies,
            selectedMusicGenres,
            selectedArtists,
            agePreference,
            genderPreference,
        };

        // URL del endpoint en tu backend para guardar los datos de interés
        const saveInterestsUrl = "http://127.0.0.1:5000/generos"; // Reemplaza con la URL de tu API

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
        <div className="interests-container">
            <h1>Configura tus intereses</h1>
            <GenerosVideojuegos
                selectedGenres={selectedGenres}
                genres={userPreferences.videoGameGenres}
                handleGenreClick={handleGenreClick}
                gamesByGenre={userPreferences.gamesByGenre}
                selectedGames={selectedGames}
                handleGameClick={handleGameClick}
            />
            <Peliculas
                selectedMoviesGenres={selectedMoviesGenres}
                movieGenres={userPreferences.movieGenres}
                handleMovieGenreClick={handleMovieGenreClick}
                moviesByGenre={userPreferences.moviesByGenre}
                selectedMovies={selectedMovies}
                handleMovieClick={handleMovieClick}
            />
            <Musica
                selectedMusicGenres={selectedMusicGenres}
                musicGenres={userPreferences.musicGenres}
                handleMusicGenreClick={handleMusicGenreClick}
                artistsByGenre={userPreferences.artistsByGenre}
                selectedArtists={selectedArtists}
                handleArtistClick={handleArtistClick}
            />
            <EdadGenero
                agePreference={agePreference}
                handleAgeChange={handleAgeChange}
                handleMaxAgeChange={handleMaxAgeChange}
                handleMinAgeInputChange={handleMinAgeInputChange}
                genderPreference={genderPreference}
                handleGenderChange={handleGenderChange}
            />
            <button onClick={savePreferences}>Guardar Preferencias</button>
        </div>
    );
};

export default Intereses;
