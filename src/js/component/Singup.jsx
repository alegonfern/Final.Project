import React from 'react'
import { useState } from 'react'

const Singup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const url = "/singup";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email }),
        }; // Add closing parenthesis here

        fetch(url, putOptions)
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
        <div className="col-md-6 offset-md-3 border rounded">
            <div className=' card singup_form p-3'><h3>¡Regístrate, ven a jugar con nosotros!</h3><p>No lo lamentarás.</p></div>

            <form className="row g-3 m-2" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label for="input_first_name" className="form-label">Nombre</label>
                    <input type="text" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label for="input_last_name" className="form-label">Apellido</label>
                    <input type="text" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label for="input_email" className="form-label">Email</label>
                    <br />
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label for="input_confirm_email" className="form-label">Confirmar email</label>
                    <br />
                    <input type="email" id="confirm_email" value={email} />
                </div>
                <div className="col-md-6">
                    <label for="input_password" className="form-label">Contraseña</label>
                    <br />
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label for="input_confirm_password" className="form-label">Confirmar contraseña</label>
                    <br />
                    <input type="password" className="form-control" id="confirm_password" value={password} />
                </div>


                <label for="select_birth_day" className="form-label">Fecha de nacimiento</label>
                <div className="col-2">
                    <select className="form-select" aria-label="Select day">
                        <option selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </div>
                <div className="col-2">
                    <select className="form-select" aria-label="Select month">
                        <option selected>Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                </div>
                <div className="col-2">
                    <select className="form-select" aria-label="Select year">
                        <option selected>2023</option>
                        <option value="2">2022</option>
                        <option value="3">2021</option>
                        <option value="4">2020</option>
                        <option value="5">2019</option>
                        <option value="6">2018</option>
                        <option value="7">2017</option>
                        <option value="8">2016</option>
                        <option value="9">2015</option>
                        <option value="10">2014</option>
                        <option value="11">2013</option>
                        <option value="12">2012</option>
                    </select>
                </div>

                <div >
                    <label for="select_birth_day" className="form-label">Sexo</label>
                    <div className="col-12">
                        <div className="form-check form-check-inline">
                            <input className="select_gender_radio" type="radio" name="gender_radio" id="male_radio" value="Male" />
                            <label className="form-check-label" for="male_radio">Hombre</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="select_gender_radio" type="radio" name="gender_radio" id="female_radio" value="Female" />
                            <label className="form-check-label" for="female_radio">Mujer</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="select_gender_radio" type="radio" name="gender_radio" id="non_binary" value="Non binary" checked />
                            <label className="form-check-label" for="non_binary">No binario</label>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary d-grid gap-2 col-2 mx-auto">¡M4tchiemos!</button>
                </div>
            </form>
        </div>
    )
}

export default Singup
