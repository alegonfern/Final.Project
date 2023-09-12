import React, { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import '../../styles/Google.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna as faSolidDna } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../img/google-icon.png'
import '../../styles/index.css';

const Login = () => {

    const { flogin, handleGoogleCallback } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const code = 'AIzaSyDvHtJsPXyQX7k91Ppo4GSvms0gt0HlXJw';
            const success = await handleGoogleCallback(code);

            if (success) {
                navigate("/Home");
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
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 border rounded py-3 ">
                    <h1 className="text-center my-3">Iniciar sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row justify-content-center">
                            <div className="col-4">
                                <label htmlFor="username" className="form-label">Usuario:</label>
                                <br />
                                <input className="form-control form-control-sm" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">
                            <div className="col-4">
                                <label htmlFor="password" className="form-label">Contraseña:</label>
                                <br />
                                <input className="form-control form-control-sm" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-dark">Iniciar sesión   
                                <FontAwesomeIcon icon={faSolidDna} rotation={90} style={{ color: "#05ff09" }} />
                            </button>
                        </div>
                    </form>
                    <div className="row justify-content-center mt-3">
                        <a href="#">Olvidé mi contraseña</a>
                    </div>
                    <div className="row justify-content-center mt-3 mb-3">
                        <a href="#">Crear nuevo usuario</a>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="google-login-button mx-auto my-3" onClick={handleGoogleSignIn}> 
                            <img src={googleIcon} className="google-icon img-fluid"></img>Iniciar sesión con Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
