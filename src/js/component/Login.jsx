import React, { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import '../../styles/Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna as faSolidDna } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

    //Estados para reoceger UserName y Password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = "http://127.0.0.1:5000/login";

        const postOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }

        fetch(url, postOptions)
            .then(response => {
                if (response.ok) {
                    // Autenticación exitosa, redirige a la página de inicio
                    window.location.href = '/home';
                } else {
                    // Autenticación fallida, muestra un mensaje de error
                    console.error('Credenciales incorrectas');
                }
            })
            .catch((error) => {
                console.error('Error al enviar la solicitud', error);
            });
    };


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 mx-auto border rounded">
                    <h1 className="text-center">Iniciar sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Usuario:</label>
                            <br />
                            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <br />
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-dark">Iniciar sesión&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faSolidDna} rotation={90} style={{ color: "#05ff09" }} />
                        </button>
                    </form>
                    <div className="mt-3">
                        <a href="#">Olvidé mi contraseña</a>
                    </div>
                    <div className="mt-3 mb-3">
                        <a href="#">Crear nuevo usuario</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;