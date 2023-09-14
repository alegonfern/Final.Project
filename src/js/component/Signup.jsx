import React, { useState } from 'react';

const Signup = () => {
    const [userData, setUserData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birth_date: '',
        gender: 'Non binary',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = "http://127.0.0.1:5000/signup"; // URL del servidor Flask

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(userData),
        };

        try {
            const response = await fetch(url, postOptions);

            if (response.ok) {
                // Usuario creado con éxito, redirigo a la página de perfil.
                window.location.href = '/profile';
            } else {
                console.error('Revisa los datos ingresados');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <div className="form-container col-12 col-md-8 col-lg-6 border rounded">
                <div className=' card singup_form p-3'><h3>¡Regístrate, ven a jugar con nosotros!</h3><p>No lo lamentarás.</p></div>

                <form className="row g-3 m-2" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
                        <input type="text" className="form-control" id="username" name="username" value={userData.username} onChange={handleInputChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="first_name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" value={userData.first_name} onChange={handleInputChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="last_name" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="last_name" name="last_name" value={userData.last_name} onChange={handleInputChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleInputChange} required />
                    </div>
                    <div className='col-md-6 offset-md-3'>
                        <label htmlFor='birth_date' className='form-label'>Fecha de nacimiento</label>
                        <input type='date' className='form-control' id='birth_date' name='birth_date' value={userData.birth_date} onChange={handleInputChange} required />
                    </div>

                    <label htmlFor="" className='form-label'>Sexo</label>
                    <div className='col-12'>
                        <div className='form-check form-check-inline'>
                            <input
                                className='select_gender_radio'
                                type='radio'
                                name='gender'
                                id='male_radio'
                                value='Male'
                                checked={userData.gender === 'Male'}
                                onChange={handleInputChange}
                            />
                            <label className='form-check-label' htmlFor='male_radio'>Hombre</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='select_gender_radio'
                                type='radio'
                                name='gender'
                                id='female_radio'
                                value='Female'
                                checked={userData.gender === 'Female'}
                                onChange={handleInputChange}
                            />
                            <label className='form-check-label' htmlFor='female_radio'>Mujer</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='select_gender_radio'
                                type='radio'
                                name='gender'
                                id='non_binary'
                                value='Non binary'
                                checked={userData.gender === 'Non binary'}
                                onChange={handleInputChange}
                            />
                            <label className='form-check-label' htmlFor='non_binary'>No binario</label>
                        </div>
                    </div>
                    <div className='col-md-6 offset-md-3'>
                        <button type='submit' className='btn btn-dark d-grid gap-2 mx-auto'>¡M4tchiemos!</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
