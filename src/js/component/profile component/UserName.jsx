import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';

const UserName = () => {
    const { userName, setUserName } = useContext(UserContext);
    const [lastName, setLastName] = useState('Apellido'); // Estado para el apellido
    const [birthDate, setBirthDate] = useState('Fecha de Nacimiento'); // Estado para la fecha de nacimiento
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetch('/user/<int:user_id>/profile')
            .then(response => response.json())
            .then(data => {
                setUserName(data.nombre);
                setLastName(data.apellido);
                setBirthDate(data.fecha_de_nacimiento);
            });
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        setIsEditing(false);
    }

    const handleChangeName = (event) => {
        if (event.target.name === 'firstName') {
            setUserName(event.target.value);
            localStorage.setItem('userName', event.target.value); // Guarda el nombre en el almacenamiento local
        } else if (event.target.name === 'lastName') {
            setLastName(event.target.value);
            localStorage.setItem('lastName', event.target.value); // Guarda el apellido en el almacenamiento local
        } else if (event.target.name === 'birthDate') {
            setBirthDate(event.target.value);
            localStorage.setItem('birthDate', event.target.value); // Guarda la fecha de nacimiento en el almacenamiento local
        }
    }

    const handleInputClickFirstName = () => {
        setUserName('');
    }

    const handleInputClickLastName = () => {
        setLastName('');
    }

    const handleInputClickBirthDate = () => {
        setBirthDate('');
    }

    return (
        <div className='container-fluid mb-5 pb-5'>
            <h2 className="text-center" style={{ fontSize: '50px' }}>{`${userName} ${lastName}`}</h2>
            <h3 className="text-center" style={{ fontSize: '30px' }}>{`Fecha de Nacimiento: ${birthDate}`}</h3>
            <div className="d-flex justify-content-center">
                <button onClick={handleEdit} className="btn btn-dark">Editar</button>
            </div>

            <div className={`modal ${isEditing ? 'show d-block' : ''}`} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar nombre</h5>
                            <button type="button" className="btn-close" onClick={handleSave}></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="firstName" value={userName} onChange={handleChangeName} onClick={handleInputClickFirstName} placeholder="Nombre" className="form-control" />
                            <input type="text" name="lastName" value={lastName} onChange={handleChangeName} onClick={handleInputClickLastName} placeholder="Apellido" className="form-control mt-2" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleSave}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            {isEditing && <div className="modal-backdrop show"></div>}
        </div>
    );
}

export default UserName;
