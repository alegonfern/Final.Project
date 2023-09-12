import React, { useState } from 'react';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const url = "http://127.0.0.1:5000/signup";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email }),
        };

        fetch(url, postOptions)
            .then(response => {
                if (response.ok) {
                    window.location.href = '/profile';
                } else {
                    console.error('Revisa los datos ingresados');
                }
            })
            .catch((error) => {
                console.error('Error al enviar la solicitud', error);
            });
    };

    return (
        <div className="container">
            <div className="form-container col-12 col-md-8 col-lg-6 border rounded">
                <div className=' card singup_form p-3'><h3>¡Regístrate, ven a jugar con nosotros!</h3><p>No lo lamentarás.</p></div>

                <form className="row g-3 m-2" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label for="first_name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label for="last_name" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label for="confirm_email" className="form-label">Confirmar email</label>
                        <input type="email" className="form-control" id="confirm_email" value={email} />
                    </div>
                    <div className="col-md-6">
                        <label for="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <label for="confirm_password" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="confirm_password" value={password} />
                    </div>
                    <div className='col-md-6 offset-md-3'>
                      <label for='birth_date' class='form-label'>Fecha de nacimiento</label>
                      <input type='date' class='form-control' id='birth_date' required />
                    </div>

                    <label for="" class='form-label'>Sexo</label>
                    <div class='col-12'>
                      <div class='form-check form-check-inline'>
                          <input class='select_gender_radio' type='radio' name='gender_radio' id='male_radio' value='Male' />
                          <label class='form-check-label' for='male_radio'>Hombre</label>
                      </div>
                      <div class='form-check form-check-inline'>
                          <input class='select_gender_radio' type='radio' name='gender_radio' id='female_radio' value='Female' />
                          <label class='form-check-label' for='female_radio'>Mujer</label>
                      </div>
                      <div class='form-check form-check-inline'>
                          <input class='select_gender_radio' type='radio' name='gender_radio' id='non_binary' value='Non binary' checked />
                          <label class='form-check-label' for='non_binary'>No binario</label>
                      </div>
                    </div>
                    <div class='col-md-6 offset-md-3'>
                      <button type='submit' class='btn btn-dark d-grid gap-2 mx-auto'>¡M4tchiemos!</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
