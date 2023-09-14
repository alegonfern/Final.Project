import React from 'react';

const Carousel = () => {

  const urlShooter = "http://127.0.0.1:5000/shooter";
  const urlMoba = "http://127.0.0.1:5000/moba";
  const urlMmorpg = "http://127.0.0.1:5000/mmorpg";
  const urlSurvival = "http://127.0.0.1:5000/survival";
  const urlRoguelike = "http://127.0.0.1:5000/roguelike";
  const urlTerror  = "http://127.0.0.1:5000/terror";

  const handleClick = async (e) => {
    e.preventDefault();

    const getOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ group}),
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
                <img style={{ height: "420px" }} src="https://bitwares.net/wp-content/uploads/2021/08/Shooters-Gratuitos-Competitivos-Bitwares-735x400.jpg?crop=1" className="card-img-top" alt="Imagen de referencia grupo" />
                <div className="card-body d-grid bg-dark">
                  <button type="button" onClick={handleClick} className="btn btn-dark">¡Shooter!</button>
                </div>
              </div>
              <div className="card">
                <img style={{ height: "420px" }} src="https://areajugones.sport.es/wp-content/uploads/2020/06/Top-Moba.jpg.webp" className="card-img-top" alt="Imagen de referencia" />
                <div className="card-body d-grid bg-dark">
                  <button type="button" onClick={handleClick} className="btn btn-dark mx-2">¡MOBA!</button>
                </div>
              </div>
              <div className="card">
                <img style={{ height: "420px" }} src="https://c4.wallpaperflare.com/wallpaper/606/502/422/video-game-collage-blizzard-entertainment-diablo-wallpaper-preview.jpg" className="card-img-top" alt="Imagen de referencia" />
                <div className="card-body d-grid bg-dark">
                  <button type="button" onClick={handleClick} className="btn btn-dark mx-2">¡MMORPG!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='carousel-card d-flex justify-content-between'>
              <div className="card">
                <img style={{ height: "420px" }} src="https://i0.wp.com/www.solojugadores.com/wp-content/uploads/2023/02/Mejores-juegos-de-supervivencia-online-para-PC-y-consolas.webp?resize=678%2C381&ssl=1" className="card-img-top" alt="Imagen de referencia" />
                <div className="card-body d-grid bg-dark">
                  <button type="button" onClick={handleClick} className="btn btn-dark mx-2">¡Survival!</button>
                </div>
              </div>
              <div className="card">
                <img style={{ height: "420px" }} src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/04/mejores-roguelike-2688419.jpg?tf=1200x" className="card-img-top" alt="Imagen de referencia" />
                <div className="card-body d-grid bg-dark">
                  <button type="button" onClick={handleClick} className="btn btn-dark mx-2">¡Roguelike!</button>
                </div>
              </div>
              <div className="card">
                <img style={{ height: "420px" }} src="https://www.industriaanimacion.com/wp-content/uploads/2020/10/20_videojuegos_de_terror_que_no_puedes_perderte.jpg" className="card-img-top" alt="Imagen de referencia" />
                <div className="card-body d-grid bg-dark">
                  <button type="button" onClick={handleClick} className="btn btn-dark mx-2">¡Terror!</button>
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

export default Carousel;