import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const UserInterests = ({ interests }) => {
    const { userId } = useContext(UserContext);
    const [generosData, setGenerosData] = useState([]);

    const handleDeleteGenero = (generoId) => {
        fetch(`http://127.0.0.1:5000/genero/${userId}/${generoId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                setGenerosData(prevGenerosData => prevGenerosData.filter(genero => genero.id !== generoId));
            } else {
                console.error('Error al eliminar el género');
            }
        })
        .catch(error => console.error('Error al eliminar el género', error));
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/genero/${userId}`)
            .then(response => response.json())
            .then(data => setGenerosData(data))
            .catch(error => console.error('Error al obtener los géneros del usuario', error));
    }, [userId]);

    return (
        <div className="mt-5">
            <h2>Géneros de videojuegos favoritos</h2>
            <ul>
                {generosData.map((genero, index) => (
                    <li key={index}>
                        {genero.genero}
                        <button
                            onClick={() => handleDeleteGenero(genero.id)}
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
        </div>
    );
}

export default UserInterests;
