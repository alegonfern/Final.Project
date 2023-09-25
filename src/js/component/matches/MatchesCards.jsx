import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../store/UserContext'; // Importa tu contexto aquí
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

const GroupCards = () => {
    const [matches, setMatches] = useState([]);
    const { userId } = useContext(UserContext); // Obtén el userId del contexto

    useEffect(() => {
        // Realiza una solicitud GET para obtener los matches del usuario actual
        fetch(`http://127.0.0.1:5000/matches/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setMatches(data.matches);
            })
            .catch((error) => {
                console.error("Error al obtener los matches:", error);
            });
    }, [userId]);

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {matches.map((match) => (
                        <div key={match.user_id} className="col mb-5 rounded">
                            <div className="card h-100">
                                <img
                                    className="card-img-top"
                                    src={match.url_avatar}
                                    alt="..."
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">
                                            {match.first_name} {match.last_name}
                                        </h5>
                                        <span className="text-muted">
                                            {match.gender}
                                        </span>
                                        <div>
                                            <FontAwesomeIcon icon={faBirthdayCake} />{' '}
                                            {new Date(match.birth_date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">
                                            Enviar mensaje
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupCards;
