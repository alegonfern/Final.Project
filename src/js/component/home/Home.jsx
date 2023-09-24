import React from 'react'
import HomeCard from './HomeCard'
import HomeFooter from './HomeFooter'

import universoImg from '../../../img/generos de juegos/Universo.jpg';
import accionImg from '../../../img/generos de juegos/Acción.jpg';
import aventuraImg from '../../../img/generos de juegos/Aventura.jpg';
import estrategiaImg from '../../../img/generos de juegos/Estrategia.jpg';
import deportesImg from '../../../img/generos de juegos/Deportes.jpg';
import carrerasImg from '../../../img/generos de juegos/Carreras.jpg';
import simulacionImg from '../../../img/generos de juegos/Simulación.jpg';
import rpgImg from '../../../img/generos de juegos/RPG.jpg';
import plataformasImg from '../../../img/generos de juegos/Plataformas.jpg';
import luchaImg from '../../../img/generos de juegos/Lucha.jpg';
import shooterImg from '../../../img/generos de juegos/Shooter.jpg';
import sandboxImg from '../../../img/generos de juegos/Sandbox.jpg';
import estrategiaEnTiempoRealImg from '../../../img/generos de juegos/Estrategia en tiempo real.jpg';
import mobaImg from '../../../img/generos de juegos/Multijugador en línea Battle Arena (MOBA).jpg';
import juegosDeRolImg from '../../../img/generos de juegos/Juegos de rol (RPG, ARPG y más).jpg';
import simulacionYDeportesImg from '../../../img/generos de juegos/Simulación y deportes.jpg';
import rompecabezasYJuegosDeFiestaImg from '../../../img/generos de juegos/Rompecabezas y juegos de fiesta.jpg';
import accionAventuraImg from '../../../img/generos de juegos/Acción-aventura.jpg';
import survivalImg from '../../../img/generos de juegos/Survival.jpg';
import horrorImg from '../../../img/generos de juegos/Horror.jpg';
import cienciaFiccionImg from '../../../img/generos de juegos/Ciencia ficción.jpg';
import fantasiaImg from '../../../img/generos de juegos/Fantasía.jpg';
import misterioImg from '../../../img/generos de juegos/Misterio.jpg';
import historiaVisualImg from '../../../img/generos de juegos/Historia visual.jpg';
import musicalImg from '../../../img/generos de juegos/Musical.jpg';
import educativoImg from '../../../img/generos de juegos/Educativo.jpg';
import casualImg from '../../../img/generos de juegos/Casual.jpg';

const Home = () => {

    const groupImages = {
        Universo: universoImg,
        Acción: accionImg,
        Aventura: aventuraImg,
        Estrategia: estrategiaImg,
        Deportes: deportesImg,
        Carreras: carrerasImg,
        Simulación: simulacionImg,
        RPG: rpgImg,
        Plataformas: plataformasImg,
        Lucha: luchaImg,
        Shooter: shooterImg,
        Sandbox: sandboxImg,
        'Estrategia en tiempo real': estrategiaEnTiempoRealImg,
        'Multijugador en línea Battle Arena (MOBA)': mobaImg,
        'Juegos de rol (RPG, ARPG y más)': juegosDeRolImg,
        'Simulación y deportes': simulacionYDeportesImg,
        'Rompecabezas y juegos de fiesta': rompecabezasYJuegosDeFiestaImg,
        'Acción-aventura': accionAventuraImg,
        Survival: survivalImg,
        Horror: horrorImg,
        'Ciencia ficción': cienciaFiccionImg,
        Fantasía: fantasiaImg,
        Misterio: misterioImg,
        'Historia visual': historiaVisualImg,
        Musical: musicalImg,
        Educativo: educativoImg,
        Casual: casualImg,
    };

    const groupsData = [
        { groupName: 'Universo', groupImagen: groupImages.Universo },
        { groupName: 'Acción', groupImagen: groupImages.Acción },
        { groupName: 'Aventura', groupImagen: groupImages.Aventura },
        { groupName: 'Estrategia', groupImagen: groupImages.Estrategia },
        { groupName: 'Deportes', groupImagen: groupImages.Deportes },
        { groupName: 'Carreras', groupImagen: groupImages.Carreras },
        { groupName: 'Simulación', groupImagen: groupImages.Simulación },
        { groupName: 'RPG', groupImagen: groupImages.RPG },
        { groupName: 'Plataformas', groupImagen: groupImages.Plataformas },
        { groupName: 'Lucha', groupImagen: groupImages.Lucha },
        { groupName: 'Shooter', groupImagen: groupImages.Shooter },
        { groupName: 'Sandbox', groupImagen: groupImages.Sandbox },
        { groupName: 'Estrategia en tiempo real', groupImagen: groupImages['Estrategia en tiempo real'] },
        { groupName: 'Multijugador en línea Battle Arena (MOBA)', groupImagen: groupImages['Multijugador en línea Battle Arena (MOBA)'] },
        { groupName: 'Juegos de rol (RPG, ARPG y más)', groupImagen: groupImages['Juegos de rol (RPG, ARPG y más)'] },
        { groupName: 'Simulación y deportes', groupImagen: groupImages['Simulación y deportes'] },
        { groupName: 'Rompecabezas y juegos de fiesta', groupImagen: groupImages['Rompecabezas y juegos de fiesta'] },
        { groupName: 'Acción-aventura', groupImagen: groupImages['Acción-aventura'] },
        { groupName: 'Survival', groupImagen: groupImages.Survival },
        { groupName: 'Horror', groupImagen: groupImages.Horror },
        { groupName: 'Ciencia ficción', groupImagen: groupImages['Ciencia ficción'] },
        { groupName: 'Fantasía', groupImagen: groupImages.Fantasía },
        { groupName: 'Misterio', groupImagen: groupImages.Misterio },
        { groupName: 'Historia visual', groupImagen: groupImages['Historia visual'] },
        { groupName: 'Musical', groupImagen: groupImages.Musical },
        { groupName: 'Educativo', groupImagen: groupImages.Educativo },
        { groupName: 'Casual', groupImagen: groupImages.Casual },
    ];

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {groupsData.map((group, index) => (
                            <HomeCard
                                key={index}
                                groupImagen={group.groupImagen}
                                groupName={group.groupName}
                            />
                        ))}
                    </div>

                    <div className="row justify-content-center">
                        <HomeFooter />
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home
