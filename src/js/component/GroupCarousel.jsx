import React from 'react'
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";


const GroupCarousel = () => {

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
        <div className='box my-4'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='carousel-card d-flex justify-content-between'>
                            <div className="card">
                                <img style={{ height: "420px" }} src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" className="img-fluid rounded-circle" alt="Imagen de referencia grupo" />
                                <div className="card-body bg-dark d-flex justify-content-center">
                                    <h5 className="card-title">Nombre Usuario</h5>
                                    <p className="card-text">Info del perfil.</p>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineClose /> </button>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineCheck /> </button>
                                </div>
                            </div>
                            <div className="card">
                                <img style={{ height: "420px" }} src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" className="img-fluid rounded-circle" alt="Imagen de referencia" />
                                <div className="card-body bg-dark d-flex justify-content-center">
                                    <h5 className="card-title">Nombre Usuario</h5>
                                    <p className="card-text">Info del perfil.</p>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineClose /> </button>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineCheck /> </button>
                                </div>
                            </div>
                            <div className="card">
                                <img style={{ height: "420px" }} src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" className="img-fluid rounded-circle" alt="Imagen de referencia" />
                                <div className="card-body bg-dark d-flex justify-content-center">
                                    <h5 className="card-title">Nombre Usuario</h5>
                                    <p className="card-text">Info del perfil.</p>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineClose /> </button>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineCheck /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='carousel-card d-flex justify-content-between'>
                            <div className="card">
                                <img style={{ height: "420px" }} src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" className="img-fluid rounded-circle" alt="Imagen de referencia" />
                                <div className="card-body bg-dark d-flex justify-content-center">
                                    <h5 className="card-title">Nombre Usuario</h5>
                                    <p className="card-text">Info del perfil.</p>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineClose /> </button>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineCheck /> </button>
                                </div>
                            </div>
                            <div className="card">
                                <img style={{ height: "420px" }} src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" className="img-fluid rounded-circle" alt="Imagen de referencia" />
                                <div className="card-body bg-dark d-flex justify-content-center">
                                    <h5 className="card-title">Nombre Usuario</h5>
                                    <p className="card-text">Info del perfil.</p>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineClose /></button>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineCheck /> </button>
                                </div>
                            </div>
                            <div className="card">
                                <img style={{ height: "420px" }} src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" className="img-fluid rounded-circle" alt="Imagen de referencia" />
                                <div className="card-body bg-dark d-flex justify-content-center">
                                    <h5 className="card-title">Nombre Usuario</h5>
                                    <p className="card-text">Info del perfil.</p>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineClose /> </button>
                                    <button type="button" onClick={handleClick} className="btn btn-dark mx-2"><AiOutlineCheck /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default GroupCarousel
