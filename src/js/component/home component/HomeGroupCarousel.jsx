import React, { useState, useEffect } from 'react';
import CarouselCard from './HomeCarouselCard';

const HomeGroupCarousel = () => {
    const [imageGroups, setImageGroups] = useState([]);

    // Definir un arreglo con las imágenes y nombres personalizados
    const customImages = [
        {
            url: 'https://img.redbull.com/images/c_fill,w_1200,h_600,g_auto,f_auto,q_auto/redbullcom/2022/8/1/ksfga6rlx2ugfhjd9vnk/league-of-legends',
            name: 'League of Legends',
        },
        {
            url: 'https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d9db111a265e8c/d4-open-graph_001.jpg',
            name: 'Diablo IV',
        },
        {
            url: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/06/02/5fa91dbc37517.png',
            name: 'Valorant',
        },
        {
            url: 'https://prod.assets.earlygamecdn.com/images/warzone-2-release-date.jpg?mtime=1643176468',
            name: 'Call of Duty Warzone',
        },
        {
            url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/world-warcraft.jpg?tf=3840x',
            name: 'World of Warcraft',
        },
        {
            url: 'https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/31/642756e65c75c.png',
            name: 'Minecraft',
        },
    ];

    useEffect(() => {
        // Divide las imágenes en grupos de 3 por cada slide
        const groups = [];
        for (let i = 0; i < customImages.length; i += 3) {
            groups.push(customImages.slice(i, i + 3));
        }
        setImageGroups(groups);
    }, []);

    return (
        <div className='box my-4'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {imageGroups.map((group, groupIndex) => (
                        <div className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`} key={groupIndex}>
                            <div className='carousel-card d-flex justify-content-between'>
                                {group.map((image, imageIndex) => (
                                    <CarouselCard
                                        key={imageIndex}
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
