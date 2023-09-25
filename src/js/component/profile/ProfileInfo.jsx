import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';

const ProfileInfo = () => {
    const [lugarDeNacimiento, setLugarDeNacimiento] = useState('Lugar de Nacimiento');
    const [editando, setEditando] = useState(false);

    const [editandoNombre, setEditandoNombre] = useState(false);
    const [nombreUsuario, setNombreUsuario] = useState("Nombre Usuario");


    const [editandoEmail, setEditandoEmail] = useState(false);
    const [email, setEmail] = useState("example@example.com");

    const [editandoTelefono, setEditandoTelefono] = useState(false);
    const [telefono, setTelefono] = useState("(097) 234-5678");

    const [editandoMovil, setEditandoMovil] = useState(false);
    const [movil, setMovil] = useState("(098) 765-4321");

    const handleLugarDeNacimientoChange = (event) => {
        setLugarDeNacimiento(event.target.value);
    };

    // Función para manejar el inicio de la edición del Móvil
    const handleEditarMovilClick = () => {
        setEditandoMovil(true);
    };

    // Función para manejar el guardado del Móvil editado
    const handleGuardarMovilClick = () => {
        setEditandoMovil(false);
        // Aquí puedes guardar el nuevo valor del Móvil en tu backend
    };
    // Función para manejar el inicio de la edición del Teléfono
    const handleEditarTelefonoClick = () => {
        setEditandoTelefono(true);
    };

    // Función para manejar el guardado del Teléfono editado
    const handleGuardarTelefonoClick = () => {
        setEditandoTelefono(false);
        // Aquí puedes guardar el nuevo valor del Teléfono en tu backend
    };

    // Función para manejar el inicio de la edición del Nombre Usuario
    const handleEditarNombreClick = () => {
        setEditandoNombre(true);
    };

    // Función para manejar el guardado del Nombre Usuario editado
    const handleGuardarNombreClick = () => {
        setEditandoNombre(false);
        // Aquí puedes guardar el nuevo valor del Nombre Usuario en tu backend
    };

    // Función para manejar el inicio de la edición del correo electrónico
    const handleEditarEmailClick = () => {
        setEditandoEmail(true);
    };

    // Función para manejar el guardado del correo electrónico editado
    const handleGuardarEmailClick = () => {
        setEditandoEmail(false);
        // Aquí puedes guardar el nuevo valor del correo electrónico en tu backend
    };





    const handleEditarClick = () => {
        setEditando(true);
    };
    const handleGuardarClick = () => {
        // Aquí puedes enviar el nuevo valor de lugarDeNacimiento al servidor a través de una solicitud HTTP (por ejemplo, utilizando Axios).
        // También puedes agregar una función para manejar la lógica de guardar en el servidor.
        // Ejemplo de solicitud con Axios:
        // axios.post('/api/guardar-lugar-nacimiento', { lugarDeNacimiento })
        //   .then((response) => {
        //     // Manejar la respuesta del servidor si es necesario
        //   })
        //   .catch((error) => {
        //     // Manejar errores si es necesario
        //   });

        setEditando(false); // Desactivar el modo de edición después de guardar.
    };

    return (
        <>
            <section style={{ backgroundColor: "#eee", marginTop: "50px" }}>
                <div className="container py-5">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 150 }}
                                    />
                                    <h5 className="my-3">Nombre de Usuario</h5>
                                    <p className="text-muted mb-1">Estado del Usuario</p>
                                    {editando ? (
                                        <p className="text-muted mb-4">
                                            <input
                                                type="text"
                                                value={lugarDeNacimiento}
                                                onChange={handleLugarDeNacimientoChange}
                                            />
                                            <FontAwesomeIcon
                                                icon={faSave}
                                                onClick={handleGuardarClick}
                                                style={{ cursor: 'pointer', marginLeft: '10px', fontSize: "20px" }}
                                            />
                                        </p>
                                    )



                                        : (
                                            <p className="text-muted mb-4">
                                                {lugarDeNacimiento}
                                                <FontAwesomeIcon
                                                    icon={faPencilAlt}
                                                    onClick={handleEditarClick}
                                                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                                                />
                                            </p>
                                        )}

                                </div>



                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning" />
                                            <p className="mb-0">https://mdbootstrap.com</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-github fa-lg"
                                                style={{ color: "#333333" }}
                                            />
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-twitter fa-lg"
                                                style={{ color: "#55acee" }}
                                            />
                                            <p className="mb-0">@mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-instagram fa-lg"
                                                style={{ color: "#ac2bac" }}
                                            />
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-facebook-f fa-lg"
                                                style={{ color: "#3b5998" }}
                                            />
                                            <p className="mb-0">mdbootstrap</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">


                                    {/*
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Nombre</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Nombre Usuario</p>
                                        </div>
                                    </div>
                                    <hr />
                                        */}


                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Nombre</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {editandoNombre ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={nombreUsuario}
                                                        onChange={(e) => setNombreUsuario(e.target.value)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faSave}
                                                        onClick={handleGuardarNombreClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px", fontSize: "20px" }}
                                                    />
                                                </div>
                                            ) : (
                                                <div>
                                                    {nombreUsuario}
                                                    <FontAwesomeIcon
                                                        icon={faPencilAlt}
                                                        onClick={handleEditarNombreClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr />





                                    {  /*    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">example@example.com</p>
                                        </div>
                                    </div>
                                    <hr /> 
                                    */
                                    }




                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {editandoEmail ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faSave}
                                                        onClick={handleGuardarEmailClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px", fontSize: "20px" }}
                                                    />
                                                </div>
                                            ) : (
                                                <div>
                                                    {email}
                                                    <FontAwesomeIcon
                                                        icon={faPencilAlt}
                                                        onClick={handleEditarEmailClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr />








                                    {/*

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Teléfono</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(097) 234-5678</p>
                                        </div>
                                    </div>
                                    <hr />
*/
                                    }

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Teléfono</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {editandoTelefono ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={telefono}
                                                        onChange={(e) => setTelefono(e.target.value)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faSave}
                                                        onClick={handleGuardarTelefonoClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px", fontSize: "20px" }}
                                                    />
                                                </div>
                                            ) : (
                                                <div>
                                                    {telefono}
                                                    <FontAwesomeIcon
                                                        icon={faPencilAlt}
                                                        onClick={handleEditarTelefonoClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr />



                                    {/*
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Movil</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(098) 765-4321</p>
                                        </div>
                                    </div>
                                    <hr />

                                            */}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Movil</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {editandoMovil ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={movil}
                                                        onChange={(e) => setMovil(e.target.value)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faSave}
                                                        onClick={handleGuardarMovilClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px", fontSize: "20px" }}
                                                    />
                                                </div>
                                            ) : (
                                                <div>
                                                    {movil}
                                                    <FontAwesomeIcon
                                                        icon={faPencilAlt}
                                                        onClick={handleEditarMovilClick}
                                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr />






                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Dirección</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4">
                                                <span className="text-primary font-italic me-1">
                                                    Mis intereses
                                                </span>{" "}
                                                Respecto a los demas usuarios:
                                            </p>
                                            <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                                Categoría 1
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "80%" }}
                                                    aria-valuenow={80}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Categoría 2
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "72%" }}
                                                    aria-valuenow={72}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Categoría 3
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "89%" }}
                                                    aria-valuenow={89}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Categoría 4
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "55%" }}
                                                    aria-valuenow={55}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Categoría 5
                                            </p>
                                            <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "66%" }}
                                                    aria-valuenow={66}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4">
                                                <span className="text-primary font-italic me-1">
                                                    Música
                                                </span>{" "}
                                                Que escucha el resto:
                                            </p>
                                            <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                                Musica 1
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "80%" }}
                                                    aria-valuenow={80}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Musica 2
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "72%" }}
                                                    aria-valuenow={72}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Musica 3
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "89%" }}
                                                    aria-valuenow={89}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Musica 4
                                            </p>
                                            <div className="progress rounded" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "55%" }}
                                                    aria-valuenow={55}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                                Musica 5
                                            </p>
                                            <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "66%" }}
                                                    aria-valuenow={66}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProfileInfo
