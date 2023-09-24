import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import EmojiPicker from 'react-emoji-picker';

const ProfileInfo = () => {
    const [lugarDeNacimiento, setLugarDeNacimiento] = useState('Lugar de Nacimiento');
    const [editando, setEditando] = useState(false);


    const handleLugarDeNacimientoChange = (event) => {
        setLugarDeNacimiento(event.target.value);
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
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Nombre</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Nombre Usuario</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">example@example.com</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Teléfono</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(097) 234-5678</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Movil</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">(098) 765-4321</p>
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
                                                    Métricas
                                                </span>{" "}
                                                Metricas Interes
                                            </p>
                                            <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                                Web Design
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
                                                Website Markup
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
                                                One Page
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
                                                Mobile Template
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
                                                Backend API
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
                                                    assigment
                                                </span>{" "}
                                                Project Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                                Web Design
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
                                                Website Markup
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
                                                One Page
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
                                                Mobile Template
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
                                                Backend API
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
