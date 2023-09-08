import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';

const GroupCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const newImages = [];
            for (let i = 0; i < 10; i++) {
                newImages.push(`https://picsum.photos/200/300?random=${Math.random()}`);
            }
            setImages(newImages);
        }
        fetchImages();
    }, []);

    return (
        <div className='box my-4' style={{ width: '100%' }}>
            <div id="carouselExample" className="carousel slide" style={{ position: 'relative', width: '100%', transform: 'scaleY(0.65)' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='carousel-card d-flex justify-content-between'>
                            {images.slice(0, 5).map((image, index) => (
                                <CarouselCard
                                    key={index}
                                    AvatarUsuario={image}
                                    NombreUsuario={"Nombre Usuario"}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='carousel-card d-flex justify-content-between'>
                            {images.slice(5).map((image, index) => (
                                <CarouselCard
                                    key={index}
                                    AvatarUsuario={image}
                                    NombreUsuario={"Nombre Usuario"}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev btn btn-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn btn-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    );
}

export default GroupCarousel;
