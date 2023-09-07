import React from 'react';
import CarouselCard from './CarouselCard';

const GroupCarousel = () => {
    return (
        <div className='box my-4'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='carousel-card d-flex justify-content-between'>
                            <CarouselCard
                                AvatarUsuario={"https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg"}
                                NombreUsuario={"Nombre Usuario"}
                                InfoPerfil={"Info del perfil"} />
                            <CarouselCard
                                AvatarUsuario={"https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg"}
                                NombreUsuario={"Nombre Usuario"}
                                InfoPerfil={"Info del perfil"} />
                            <CarouselCard
                                AvatarUsuario={"https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg"}
                                NombreUsuario={"Nombre Usuario"}
                                InfoPerfil={"Info del perfil"} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='carousel-card d-flex justify-content-between'>
                            <CarouselCard
                                AvatarUsuario={"https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg"}
                                NombreUsuario={"Nombre Usuario"}
                                InfoPerfil={"Info del perfil"} />
                            <CarouselCard
                                AvatarUsuario={"https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg"}
                                NombreUsuario={"Nombre Usuario"}
                                InfoPerfil={"Info del perfil"} />
                            <CarouselCard
                                AvatarUsuario={"https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg"}
                                NombreUsuario={"Nombre Usuario"}
                                InfoPerfil={"Info del perfil"} />
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

export default GroupCarousel;