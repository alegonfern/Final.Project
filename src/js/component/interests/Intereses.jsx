import React, { useContext, useState, useEffect } from 'react';
import './Intereses.css';
import { UserContext } from '../../store/UserContext';

const Intereses = () => {
    // Definición de géneros de videojuegos y juegos relacionados
    const genres = ['Acción', 'Aventura', 'Estrategia', 'Deportes', 'Carreras', 'Simulación', 'RPG', 'Plataformas', 'Lucha',
        'Shooter', 'Sandbox', 'Estrategia en tiempo real (RTS)', 'Multijugador en línea Battle Arena (MOBA)', 'Juegos de rol (RPG, ARPG y más)',
        'Simulación y deportes', 'Rompecabezas y juegos de fiesta', 'Acción-aventura', 'Survival', 'Horror', 'Ciencia ficción', 'Fantasía', 'Misterio', 'Historia visual', 'Musical', 'Educativo', 'Casual'];


    const gamesByGenre = {
        'Acción': ['Call of Duty', 'Battlefield', 'Doom', 'Halo', 'Gears of War'],
        'Aventura': ['The Legend of Zelda', 'Uncharted', 'Tomb Raider', "Assassin's Creed", 'Horizon Zero Dawn'],
        'Estrategia': ['Civilization', 'Starcraft', 'Age of Empires', 'Total War: Three Kingdoms', 'Company of Heroes'],
        'Deportes': ['FIFA', 'NBA 2K', 'Madden NFL', 'WWE 2K', 'Rocket League'],
        'Carreras': ['Mario Kart', 'Need for Speed', 'Forza Horizon', 'Burnout Paradise', 'Gran Turismo'],
        'Simulación': ['The Sims', 'SimCity', 'RollerCoaster Tycoon', 'Cities: Skylines', 'Farming Simulator 22'],
        'RPG': ['The Elder Scrolls V: Skyrim', 'The Witcher 3: Wild Hunt', 'Final Fantasy VII Remake', 'Dragon Age: Origins', 'Persona 5'],
        'Plataformas': ['Super Mario Bros.', 'Sonic the Hedgehog', 'Donkey Kong Country', 'Celeste', 'Hollow Knight'],
        'Lucha': ['Street Fighter V', 'Mortal Kombat 11', 'Super Smash Bros. Ultimate', 'Tekken 7', 'Dragon Ball FighterZ'],
        'Shooter': ['Call of Duty: Warzone', 'Overwatch', 'Counter-Strike: Global Offensive', 'Rainbow Six Siege', 'Destiny 2'],
        'Sandbox': ['Minecraft', 'Grand Theft Auto V', 'Red Dead Redemption 2', "No Man's Sky", 'Terraria'],
        'Estrategia en tiempo real (RTS)': ['Starcraft II', 'Age of Empires II', 'Warcraft III', 'Command & Conquer: Red Alert 2', 'Stronghold Crusader'],
        'Multijugador en línea Battle Arena (MOBA)': ['League of Legends', 'Dota 2', 'Smite', 'Heroes of the Storm', 'Vainglory'],
        'Juegos de rol (RPG, ARPG y más)': ['The Witcher 3: Wild Hunt', 'Skyrim', 'Dark Souls III', 'Diablo III', 'Path of Exile'],
        'Simulación y deportes': ['FIFA 22', 'NBA 2K22', 'Football Manager 2022', 'Pro Evolution Soccer 2022', 'Rocket League'],
        'Rompecabezas y juegos de fiesta': ['Tetris Effect: Connected', 'Overcooked! All You Can Eat', 'Mario Party Superstars', 'Keep Talking and Nobody Explodes', 'Jackbox Party Pack'],
        'Acción-aventura': ['The Legend of Zelda: Breath of the Wild', 'God of War', 'Spider-Man: Miles Morales', "Assassin's Creed Valhalla", 'Red Dead Redemption 2'],
        'Survival': ['The Forest', 'ARK: Survival Evolved', 'Rust', 'Subnautica', 'The Long Dark'],
        'Horror': ['Resident Evil Village', 'Silent Hill 2', 'Amnesia: The Dark Descent', 'Outlast', 'Alien: Isolation'],
        'Ciencia ficción': ['Mass Effect', 'Deus Ex', 'Prey', 'System Shock 2', 'XCOM 2'],
        'Fantasía': ['Dragon Age: Inquisition', 'Divinity: Original Sin 2', 'Dark Souls', 'The Elder Scrolls IV: Oblivion', 'Kingdoms of Amalur: Reckoning'],
        'Misterio': ['L.A. Noire', 'Murdered: Soul Suspect', 'Her Story', 'The Vanishing of Ethan Carter', 'Return of Obra Dinn'],
        'Historia visual': ['Doki Doki Literature Club!', 'Phoenix Wright: Ace Attorney', 'Steins;Gate', 'The House in Fata Morgana', 'VA-11 Hall-A: Cyberpunk Bartender Action'],
        'Musical': ['Beat Saber', 'Guitar Hero', 'Dance Dance Revolution', 'Crypt of the NecroDancer', 'Thumper'],
        'Educativo': ['Minecraft: Education Edition', 'Kerbal Space Program', 'Carmen Sandiego', 'The Oregon Trail', 'Math Blaster'],
        'Casual': ['Candy Crush Saga', 'Angry Birds', 'Plants vs. Zombies', 'Fruit Ninja', 'Sudoku']
    };


    // Definición de géneros de películas y películas relacionadas
    const musicGenres = [
        'Rock', 'Pop', 'Hip-Hop', 'Electronic', 'Jazz', 'Blues', 'Country',
        'R&B', 'Reggae', 'Metal', 'Classical', 'Folk', 'Indie', 'Soul', 'Punk',
        'Funk', 'Disco', 'Techno', 'House', 'Salsa', 'Merengue', 'K-Pop', 'Reggaeton', 'Gospel', 'Trance', 'Dancehall'
    ];


    const artistsByGenre = {
        'Rock': ['The Beatles', 'Led Zeppelin', 'Queen', 'Pink Floyd', 'The Rolling Stones'],
        'Pop': ['Michael Jackson', 'Madonna', 'Taylor Swift', 'Elton John', 'Adele'],
        'Hip-Hop': ['Eminem', 'Jay-Z', 'Kendrick Lamar', 'Notorious B.I.G.', 'Tupac Shakur'],
        'Electronic': ['Daft Punk', 'Calvin Harris', 'The Chemical Brothers', 'David Guetta', 'Deadmau5'],
        'Jazz': ['Miles Davis', 'John Coltrane', 'Ella Fitzgerald', 'Louis Armstrong', 'Duke Ellington'],
        'Blues': ['B.B. King', 'Muddy Waters', 'Stevie Ray Vaughan', 'Eric Clapton', 'John Lee Hooker'],
        'Country': ['Johnny Cash', 'Dolly Parton', 'Garth Brooks', 'Willie Nelson', 'Kenny Rogers'],
        'R&B': ['Aretha Franklin', 'Stevie Wonder', 'Beyoncé', 'Whitney Houston', 'Marvin Gaye'],
        'Reggae': ['Bob Marley', 'Peter Tosh', 'Jimmy Cliff', 'Toots and the Maytals', 'Damian Marley'],
        'Metal': ['Metallica', 'Iron Maiden', 'Black Sabbath', 'Megadeth', 'Slayer'],
        'Classical': ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Pyotr Ilyich Tchaikovsky', 'Antonio Vivaldi'],
        'Folk': ['Bob Dylan', 'Simon & Garfunkel', 'Joni Mitchell', 'Neil Young', 'Woody Guthrie'],
        'Indie': ['Radiohead', 'Arctic Monkeys', 'Tame Impala', 'Vampire Weekend', 'Arcade Fire'],
        'Soul': ['Ray Charles', 'James Brown', 'Otis Redding', 'Aretha Franklin', 'Al Green'],
        'Punk': ['The Ramones', 'The Clash', 'Sex Pistols', 'Green Day', 'The Offspring'],
        'Funk': ['James Brown', 'Parliament-Funkadelic', 'Stevie Wonder', 'Prince', 'Sly and the Family Stone'],
        'Disco': ['Bee Gees', 'Donna Summer', 'Chic', 'Gloria Gaynor', 'Earth, Wind & Fire'],
        'Techno': ['Kraftwerk', 'Carl Cox', 'The Prodigy', 'Daft Punk', 'Fatboy Slim'],
        'House': ['Daft Punk', 'The Chemical Brothers', 'David Guetta', 'Calvin Harris', 'Avicii'],
        'Salsa': ['Celia Cruz', 'Marc Anthony', 'Héctor Lavoe', 'Rubén Blades', 'Willie Colón'],
        'Merengue': ['Juan Luis Guerra', 'Olga Tañón', 'Los Hermanos Rosario', 'Fernando Villalona', 'Eddy Herrera'],
        'K-Pop': ['BTS', 'BLACKPINK', 'EXO', 'TWICE', 'Red Velvet'],
        'Reggaeton': ['Daddy Yankee', 'Don Omar', 'Wisin & Yandel', 'Ozuna', 'Bad Bunny'],
        'Gospel': ['Mahalia Jackson', 'Kirk Franklin', 'Aretha Franklin', 'Tasha Cobbs Leonard', 'Fred Hammond'],
        'Trance': ['Armin van Buuren', 'Paul van Dyk', 'Above & Beyond', 'Tiesto', 'Ferry Corsten'],
        'Dancehall': ['Sean Paul', 'Shaggy', 'Beenie Man', 'Vybz Kartel', 'Popcaan']
    };

    const movieGenres = [
        'Acción', 'Aventura', 'Catástrofe', 'Ciencia Ficción', 'Comedia', 'Documentales',
        'Drama', 'Fantasía', 'Misterio', 'Romance', 'Terror', 'Suspense', 'Animación', 'Crimen', 'Western'
    ];


    const moviesByGenre = {
        'Acción': ['Mad Max: Fury Road', 'Die Hard', 'Gladiator', 'John Wick', 'The Dark Knight'],
        'Aventura': ['Indiana Jones and the Last Crusade', 'Pirates of the Caribbean', 'The Lord of the Rings: The Fellowship of the Ring', 'Jurassic Park', 'Avatar'],
        'Catástrofe': ['2012', 'The Day After Tomorrow', "Dante's Peak", 'San Andreas', 'Twister'],
        'Ciencia Ficción': ['Blade Runner', 'The Matrix', 'Inception', 'Interstellar', 'Alien'],
        'Comedia': ['Superbad', 'The Grand Budapest Hotel', 'Anchorman: The Legend of Ron Burgundy', 'The Hangover', 'Super Troopers'],
        'Documentales': ['March of the Penguins', 'Planet Earth', "Won't You Be My Neighbor?", 'Blackfish', 'The Act of Killing'],
        'Drama': ['The Shawshank Redemption', 'The Godfather', "Schindler's List", 'Forrest Gump', 'The Green Mile'],
        'Fantasía': ["Harry Potter and the Sorcerer's Stone", 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', "Pan's Labyrinth", 'The NeverEnding Story', 'Alice in Wonderland'],
        'Misterio': ['The Sixth Sense', 'Sherlock Holmes', 'The Girl with the Dragon Tattoo', 'Gone Girl', 'Prisoners'],
        'Romance': ['The Notebook', 'Titanic', 'Pretty Woman', 'Eternal Sunshine of the Spotless Mind', 'La La Land'],
        'Terror': ['The Shining', 'The Exorcist', 'Get Out', 'A Nightmare on Elm Street', 'Hereditary'],
        'Suspense': ['Seven', 'The Silence of the Lambs', 'Shutter Island', 'The Usual Suspects', 'Gone Baby Gone'],
        'Animación': ['Toy Story', 'Frozen', 'Finding Nemo', 'The Lion King', 'Zootopia'],
        'Crimen': ['Pulp Fiction', 'Goodfellas', 'Heat', 'The Departed', 'No Country for Old Men'],
        'Western': ['Django Unchained', 'The Good, the Bad and the Ugly', 'True Grit', 'Once Upon a Time in the West', 'Tombstone']
    };


    const platforms = ['Nintendo', 'PlayStation', 'Xbox', 'PC', 'Celular'];

    const { userId, userPreferences, updateUserPreferences } = useContext(UserContext);


    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedGames, setSelectedGames] = useState({});
    const [selectedMoviesGenres, setSelectedMoviesGenres] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState({});
    const [selectedMusicGenres, setSelectedMusicGenres] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState({});
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [agePreference, setAgePreference] = useState({ min: 16, max: 99 });
    const [genderPreference, setGenderPreference] = useState('De todo');

    useEffect(() => {
        updateUserPreferences({
            ...userPreferences,
            selectedGenres,
            selectedGames,
            selectedMoviesGenres,
            selectedMovies,
            selectedMusicGenres,
            selectedArtists,
            selectedPlatforms,
            agePreference,
            genderPreference,
        });
    }, [selectedGenres, selectedGames, selectedMoviesGenres, selectedMovies, selectedMusicGenres, selectedArtists, selectedPlatforms, agePreference, genderPreference]);



    // Nueva función para actualizar la edad mínima
    const handleAgeChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setAgePreference({ ...agePreference, min: value });
    };

    // Nueva función para actualizar la edad máxima
    const handleMaxAgeChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setAgePreference({ ...agePreference, max: value });
    };

    // Nueva función para actualizar la edad mínima desde la entrada de texto
    const handleMinAgeInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= 16 && value <= agePreference.max) {
            setAgePreference({ ...agePreference, min: value });
        }
    };

    // Nueva función para actualizar la edad máxima desde la entrada de texto
    const handleMaxAgeInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= agePreference.min && value <= 99) {
            setAgePreference({ ...agePreference, max: value });
        }
    };

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
        const saveInterestsUrl = "http://127.0.0.1:5000/generos";

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
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"></div>
            <div className='row'>
                <div className='col-8'>
                    <div className="pt-5">
                        <h2>¡Ven jugador, vamos a seleccionar tu genoma gamer!</h2>
                        <p>Haz clic en los géneros que te interesen y selecciona las preferencias que formarán parte de tu ADN.</p>

                        {/* Sección de géneros de videojuegos */}
                        <div className='div-videogames py-2'>
                            <h3>¿Qué géneros te gustan?</h3>
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
                        </div>
                    </div>


                    {/* Sección de juegos relacionados con los géneros seleccionados */}
                    {selectedGenres.map((genre) => (
                        <div key={genre}>
                            <h3>Videojuegos de: {genre}</h3>
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

                    {/* Sección de plataformas de juego */}
                    <div className='div-plataformas py-2'>
                        <h3>¿Cuál prefieres para jugar?</h3>
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
                    </div>

                    {/* Sección de géneros de películas */}
                    <div className='div-movie py-2'>
                        <h3>Vamos a la películas ¿de qué tipo te gustan?</h3>
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
                    </div>

                    {/* Sección de películas relacionadas con los géneros seleccionados */}
                    {selectedMoviesGenres.map((genre) => (
                        <div key={genre}>
                            <h3>¿Alguna de estas?</h3>
                            <h4>{genre}</h4>
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

                    {/* Sección de géneros musicales */}
                    <div className='div-musica py-2'>
                        <h3>¡Nada como jugar y escuchar tú música favorita!</h3>
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
                    </div>

                    {/* Sección de artistas relacionados con los géneros musicales seleccionados */}
                    {selectedMusicGenres.map((genre) => (
                        <div key={genre}>
                            <h3>Artistas o banda favorita?</h3>
                            <h4>{genre}</h4>
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

                    {/* Barra de selección de edad mínima */}
                    <div className='age-selector form-label py-2'>
                        <h3>¿Con usuarios de qué edades quieres comparar tu ADN?</h3>
                        <label>Edad mínima:</label>
                        <input
                            type="range"
                            className="form-range"
                            min="16"
                            max="98"
                            value={agePreference.min}
                            onChange={handleAgeChange}
                        />
                        <input
                            type="number"
                            min="16"
                            max={agePreference.max - 1}
                            value={agePreference.min}
                            onChange={handleMinAgeInputChange}
                        />
                        <span>{agePreference.min}</span>
                    </div>

                    {/* Barra de selección de edad máxima */}
                    <div className='age-selector form-label'>
                        <label>Edad máxima:</label>
                        <input
                            type="range"
                            className='form-range'
                            min={agePreference.min + 1}
                            max="99"
                            value={agePreference.max}
                            onChange={handleMaxAgeChange}
                        />
                        <input
                            type="number"
                            min={agePreference.min + 1}
                            max="99"
                            value={agePreference.max === 99 ? '' : agePreference.max}
                            onChange={handleMaxAgeInputChange}
                        />
                        <span>{agePreference.max === 99 ? '99+' : agePreference.max}</span>
                    </div>

                    {/* Selección de género */}
                    <div className="gender-selector py-2">
                        <h3>Género:</h3>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Masculino"
                                checked={genderPreference === 'Masculino'}
                                onChange={handleGenderChange}
                            />
                            Masculino
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Femenino"
                                checked={genderPreference === 'Femenino'}
                                onChange={handleGenderChange}
                            />
                            Femenino
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="No binario"
                                checked={genderPreference === 'No binario'}
                                onChange={handleGenderChange}
                            />
                            No binario
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="De todo"
                                checked={genderPreference === 'De todo'}
                                onChange={handleGenderChange}
                            />
                            De todo
                        </label>
                    </div>

                    {/* Botón para guardar intereses */}
                    <div className="submit-button">
                        <button className="btn btn-dark" onClick={handleSaveInterests}>
                            Guardar Intereses
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Intereses;
