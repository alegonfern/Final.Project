import React from 'react'

const Adn = () => {
    return (
        <>
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-bold">Arma tu ADN Gamer y descubre tu Compatibilidad</h1>
                            <p className="fs-4 pt-2">¿Qué es el ADN Gamer?</p>
                            <p className='fs-4'>El ADN Gamer se basa en un sistema de puntos y es la forma en la que el resto de la comunidad sabe
                                quién eres.</p>
                        </div>
                    </div>
                </div>
            </header>
            {/* Page Content*/}
            <section className="pt-1">

                <div className="container px-lg-5">
                    <div className="m-4 m-lg-5 text-center">
                        <h3>Nuestra puntuación de ADN se basa en:</h3>
                    </div>
                    {/* Page Features*/}
                    <div className="row gx-lg-5">
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#48CB86' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Géneros de Juegos</h2>
                                    <p className="mb-0">
                                        Cuantos más géneros compartas con otro jugador, más puntos sumas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#cb8648' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Juegos Favoritos</h2>
                                    <p className="mb-0">
                                        A más juegos en común, mayor puntuación.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#cb488d' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Música favorita</h2>
                                    <p className="mb-0">
                                        Similitud en géneros musicales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#488dcb' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Artistas Musicales Favoritos</h2>
                                    <p className="mb-0">
                                        Coincidencia en artistas favoritos significa más puntos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#48CB86' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Películas</h2>
                                    <p className="mb-0">
                                        Si les gustan los mismos géneros de películas, mucho mejor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#cb8648' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Películas Favoritas</h2>
                                    <p className="mb-0">
                                        ¿Les gustan las mismas películas? ¡Más puntos!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#cb488d' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Plataformas de Juego</h2>
                                    <p className="mb-0">
                                        Si juegan en la misma... ¡Adivinaste suman puntos!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#488dcb' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Rango de Edad</h2>
                                    <p className="mb-0">
                                        Si están dentro del rando de edad que el otro está buscando, mayor puntuación.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100 rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ 'background': '#48CB86' }}>
                                    {/*  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="bi bi-collection" />
                                        </div> */}
                                    <h2 className="fs-4 fw-bold">Identidad de género</h2>
                                    <p className="mb-0">
                                        ¿Con quién te gustría conectar?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default Adn
