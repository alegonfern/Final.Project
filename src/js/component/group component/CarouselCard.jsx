import React from 'react'
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const CarouselCard = ({ AvatarUsuario, NombreUsuario, InfoPerfil}) => {

    const urlShooter = "http://127.0.0.1:5000/shooter";
    const urlMoba = "http://127.0.0.1:5000/moba";
    const urlMmorpg = "http://127.0.0.1:5000/mmorpg";
    const urlSurvival = "http://127.0.0.1:5000/survival";
    const urlRoguelike = "http://127.0.0.1:5000/roguelike";
    const urlTerror = "http://127.0.0.1:5000/terror";

    const handleClick = async (e) => {
        e.preventDefault();

        const getOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ group }),
        };

        fetch(url, getOptions)
            .then(response => {
                if (response.ok) {
                    // Creación de usuario exitosa, redirige a creación de perfil
                    window.location.href = '/profile';
                } else {
                    // Creación fallida por algún motivo
                    console.error('Revisa los datos ingresados');
                }
            })
            .catch((error) => {
                console.error('Error al enviar la solicitud', error);
            });
    };

    return (
        <div className="card">
            <img style={{ height: "420px" }} src={AvatarUsuario} className="img-fluid rounded-circle" alt="Avatar del usuario" />
            <div className="card-body bg-dark d-flex justify-content-center">
                <h5 className="card-title">{NombreUsuario}</h5>
                <p className="card-text">{InfoPerfil}</p>
                <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineClose /> </button>
                <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineCheck /> </button>
            </div>
        </div>

    )
}

export default CarouselCard
