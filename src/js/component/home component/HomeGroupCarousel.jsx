import React, { useState, useEffect } from 'react';
import CarouselCard from './HomeCarouselCard';

const HomeGroupCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const newImages = [];
            for (let i = 0; i < 18; i++) {
                const randomImage = `https://picsum.photos/500/700?random=${Math.random()}`;
                newImages.push({url: randomImage, name: randomImage.split('=')[1]});
            }
            setImages(newImages);
        }
        fetchImages();
    }, []);

    return (
        <div className='box my-4'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {Array.from({length: 6}, (_, i) => i * 3).map((start, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className='carousel-card d-flex justify-content-between'>
                                {images.slice(start, start + 3).map((image, index) => (
                                    <CarouselCard
                                        key={index}
                                        AvatarGrupo={image.url}
                                        NombreGrupo={image.name}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev btn btn-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn btn-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    );
}

export default HomeGroupCarousel;
