import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDna } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "../../store/UserContext";

const MatchPreview = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const { isLoggedIn } = useContext(UserContext);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            const token = localStorage.getItem('jwtToken');
            console.log('Token JWT:', token);

            if (token) {
                fetch('http://127.0.0.1:5000/Matchpreview', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error al cargar datos privados.');
                    }
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error al cargar datos privados:', error);
                    setIsLoading(false);
                });
            } else {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }, [isLoggedIn]);

    const handleLike = () => {
        setLiked(true);
        setTimeout(() => setLiked(false), 1000);
    };

    const handleDislike = () => { 
        setDisliked(true);
        setTimeout(() => setDisliked(false), 1000);
    };

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (!data) {
        return <p>Error al cargar datos privados.</p>;
    }

    return (
        <div className="container container-match">
            <div className="card profile-card">
                <img
                    src="https://picsum.photos/150"
                    className="card-img-top profile-image"
                    alt="Profile"
                />
                <div className="card-body">
                    <h5 className="card-title profile-name">{data.name}</h5>
                    <p className="card-text profile-info">
                        {data.age} años - {data.location}
                    </p>
                    <table className="table table-dark table-sm game-stats">
                        <thead>
                            <tr>
                                <th scope="col">Género</th>
                                <th scope="col">Juego</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.gameStats && Array.isArray(data.gameStats) && data.gameStats.map((stat) => (
                                <tr key={stat.game}>
                                    <td>{stat.genre}</td>
                                    <td>{stat.game}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-around">
                    <button className={`btn btn-danger ${disliked ? 'disliked' : ''}`} onClick={handleDislike}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <button className={`btn btn-success ${liked ? 'liked' : ''}`} onClick={handleLike}>
                        <FontAwesomeIcon icon={faDna} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MatchPreview;
