import React, { useState, useEffect } from 'react';
import GroupNewsCard from './GroupNewsCard';

const GroupNewsCarousel = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiKey = 'ffdcba9b98msh1bb62aa2526dd83p19c70cjsn222b3b374c5a';

        // Realiza la solicitud HTTP a la API "Diablo 4 - Smartable"
        fetch('https://diablo4-smartable.p.rapidapi.com/news/page/1/', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'diablo4-smartable.p.rapidapi.com',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al cargar noticias');
            }
            return response.json();
        })
        .then((data) => {
            // Verifica que 'data.value' sea un arreglo antes de establecerlo como el estado 'news'
            if (Array.isArray(data.value)) {
                setNews(data.value); // Actualiza el estado 'news' con los datos de las noticias.
            } else {
                console.error('La respuesta de la API no es un arreglo:', data);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);
    return (
        <>
            <div className='box my-4'>
            <div id="newsCarousel" className="carousel slide">
                <div className="carousel-inner">
                    {news.map((article, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className='carousel-card d-flex justify-content-between'>
                                <GroupNewsCard
                                    AvatarGrupo={article.images[0].url} // URL de la imagen
                                    NombreGrupo={article.title} // Título de la noticia
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev btn btn-dark" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev" style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn btn-dark" type="button" data-bs-target="#newsCarousel" data-bs-slide="next" style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', height: "40px", width: "40px" }}>
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
            {/* <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://sm.ign.com/t/ign_es/screenshot/default/wallpapersden_rasy.1280.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://sm.ign.com/t/ign_es/screenshot/default/wallpapersden_rasy.1280.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://sm.ign.com/t/ign_es/screenshot/default/wallpapersden_rasy.1280.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}

        </>
    )
}

export default GroupNewsCarousel
