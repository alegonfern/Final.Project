import React from 'react'

const GroupNewsCard = ({ AvatarGrupo, NombreGrupo /*, InfoPerfil */ }) => {


  /*   const handleClick = async (e) => {
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
    }; */

    return (
        <div className="card" style={{ border: '1px solid black', width: '80%', margin: '0.5%' }}>
            <div className="text-center">
                <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src={AvatarGrupo} className="img-fluid" alt="Avatar del usuario" />
            </div>
            <div className="card-body  d-flex justify-content-center flex-column align-items-center" >
                <div>
                    <button type="button" /* onClick={handleClick} */ className="btn btn-dark mx-2">
                        <h5 className="text-center text-light">{NombreGrupo}</h5>
                    </button>
                    {/*  <p className="card-text text-center">{InfoPerfil}</p> */}
                </div>
            </div>
        </div>
    )
}

export default GroupNewsCard
