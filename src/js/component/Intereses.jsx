import React, { useState } from 'react';
import '../../styles/Intereses.css';

const Intereses = () => {
    const genres = ['Acción', 'Aventura', 'Estrategia', 'Deportes', 'Carreras', 'Simulación', 'RPG', 'Plataformas', 'Lucha', 'Shooter', 'Sandbox', 'Estrategia en tiempo real (RTS)', 'Multijugador en línea Battle Arena (MOBA)', 'Juegos de rol (RPG, ARPG y más)', 'Simulación y deportes', 'Rompecabezas y juegos de fiesta', 'Acción-aventura'];
    const gamesByGenre = {
        'Acción': ['Call of Duty', 'Battlefield', 'Doom'],
        'Aventura': ['The Legend of Zelda', 'Uncharted', 'Tomb Raider'],
        'Estrategia': ['Civilization', 'Starcraft', 'Age of Empires'],
        'Deportes': ['FIFA', 'NBA 2K', 'Madden NFL'],
        'Carreras': ['Mario Kart', 'Need for Speed', 'Forza Horizon'],
        'Simulación': ['The Sims', 'SimCity', 'RollerCoaster Tycoon'],
        'RPG': ['The Elder Scrolls V: Skyrim', 'The Witcher 3: Wild Hunt', 'Final Fantasy VII Remake'],
        'Plataformas': ['Super Mario Bros.', 'Sonic the Hedgehog', 'Donkey Kong Country'],
        'Lucha': ['Street Fighter V', 'Mortal Kombat 11', 'Super Smash Bros. Ultimate'],
        'Shooter': ['Call of Duty: Warzone', 'Overwatch', 'Counter-Strike: Global Offensive'],
        'Sandbox': ['Minecraft', 'Grand Theft Auto V', 'Red Dead Redemption 2'],
        'Estrategia en tiempo real (RTS)': ['Starcraft II', 'Age of Empires II', 'Warcraft III'],
        'Multijugador en línea Battle Arena (MOBA)': ['League of Legends', 'Dota 2', 'Smite'],
        'Juegos de rol (RPG, ARPG y más)': ['The Witcher 3: Wild Hunt', 'Skyrim', 'Dark Souls III'],
        'Simulación y deportes': ['FIFA 22', 'NBA 2K22', 'Football Manager 2022'],
        'Rompecabezas y juegos de fiesta': ['Tetris Effect: Connected', 'Overcooked! All You Can Eat', 'Mario Party Superstars'],
        'Acción-aventura': ['The Legend of Zelda: Breath of the Wild', 'God of War', 'Spider-Man: Miles Morales']
    };

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
    const userData = {
        user_id: 1,
        interest: selectedGenres,
        favorite_games: selectedGames
    };

    const handleGenreClick = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(g => g !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    }

    const handleGameClick = (game) => {
        if (selectedGames.includes(game)) {
            setSelectedGames(selectedGames.filter(g => g !== game));
        } else {
            setSelectedGames([...selectedGames, game]);
        }
    }

    const urlInt = "http://127.0.0.1:5000/guardar_intereses";

    const postIOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    const handleSaveInterests = async () => {
        try {
            const response = await fetch(urlInt, postIOptions);

            if (response.ok) {
                window.location.href = '/profile';
            } else {
                console.error('Revisa los intereses seleccionados');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de guardar intereses', error);
        }
    };


    return (
        <div className="mt-5 pt-5">
            <h2>Selecciona tu ADN gamer</h2>
            <p>Haz clic en los cromosomas que te representan. Haz clic de nuevo para eliminar los que no te gustan.</p>
            <div className='genres'>
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
            <h3>Videojuegos relacionados:</h3>
            <div className='genres'>
                {selectedGenres.flatMap(genre => gamesByGenre[genre]).map((game, index) => (
                    <div
                        key={index}
                        className={`genre ${selectedGames.includes(game) ? 'selected' : ''}`}
                        onClick={() => handleGameClick(game)}
                    >
                        {game}
                    </div>
                ))}
            </div>
            <div className="submit-button">
                <button onClick={handleSaveInterests}>Guardar Intereses</button>
            </div>
        </div>
    );
}

export default Intereses;