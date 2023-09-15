import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RelatedGames = () => {
    const { userId } = useContext(UserContext);
    const [gameData, setGameData] = useState(null); // Inicializa como null

    const handleDeleteGame = (gameId) => {
        fetch(`http://127.0.0.1:5000/game/${userId}/${gameId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                setGameData(prevGameData => prevGameData.filter(game => game.id !== gameId));
            } else {
                console.error('Error al eliminar el juego');
            }
        })
        .catch(error => console.error('Error al eliminar el juego', error));
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/game/${userId}`)
            .then(response => response.json())
            .then(data => setGameData(data))
            .catch(error => console.error('Error al obtener los juegos del usuario', error));
    }, [userId]);

    return (
        <div className="mt-5">
            <h2>Juegos relacionados</h2>
            {gameData !== null ? ( // Comprobación de si gameData es null o no
                <ul>
                    {gameData.map((game, index) => (
                        <li key={index}>
                            {game.game}
                            <button
                                onClick={() => handleDeleteGame(game.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'black',
                                    fontSize: '80%',
                                    margin: '0 10px', // Ajusta el margen hacia la derecha
                                    padding: '0',
                                    cursor: 'pointer',
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay juegos disponibles.</p> // Mensaje si no hay juegos
            )}
        </div>
    );
}

export default RelatedGames;
