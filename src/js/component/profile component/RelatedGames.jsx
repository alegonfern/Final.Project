import React from 'react';

const RelatedGames = ({ genres }) => {

    const gamesByGenre = {
        'Acción': ['Call of Duty', 'Battlefield', 'Doom'],
        'Aventura': ['The Legend of Zelda', 'Uncharted', 'Tomb Raider'],
        'Estrategia': ['Civilization', 'Starcraft', 'Age of Empires'],
    };


    const relatedGames = genres.flatMap(genre => gamesByGenre[genre]);

    return (
        <div className="mt-5">
            <h2>Juegos relacionados</h2>
            <ul>
                {relatedGames.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
        </div>
    );
}

export default RelatedGames;
