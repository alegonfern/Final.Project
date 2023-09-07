import React, { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import '../../styles/Google.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna as faSolidDna } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../img/google-icon.png'

const Login = () => {

    const { flogin, handleGoogleCallback } = useContext(UserContext);
    //Estados para reoceger UserName y Password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleGoogleSignIn = async () => {
        try {
            // Entrego el código de autorización de Google a handleGoogleCallback
            const code = 'AIzaSyDvHtJsPXyQX7k91Ppo4GSvms0gt0HlXJw';
            const success = await handleGoogleCallback(code);

            if (success) {
                navigate("/Home"); // Redirigo al usuario después de la autenticación exitosa
            } else {
                setError("Error al iniciar sesión con Google");
            }
        } catch (error) {
            setError("Error al iniciar sesión con Google");
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        flogin(username, password)
            .then((isAuthenticated) => {
                if (isAuthenticated) {
                    window.location.href = '/Home';
                }
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
                            <input className="form-control form-control-sm" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <br />
                            <input className="form-control form-control-sm" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-dark">Iniciar sesión&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faSolidDna} rotation={90} style={{ color: "#05ff09" }} />
                            </button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <a href="#">Olvidé mi contraseña</a>
                    </div>
                    <div className="mt-3 mb-3">
                        <a href="#">Crear nuevo usuario</a>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="google-login-button mx-auto" onClick={handleGoogleSignIn}> <img src={googleIcon} className="google-icon img-fluid"></img>Iniciar sesión con Google</button>
            </div>
        </div>
    );

}
export default Login;