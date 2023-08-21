import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacto = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="container mt-4">
      <h2>Contactos</h2>
      {userData.map((contact, index) => (
      <div>
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://picsum.photos/id/237/300/300" 
                alt={`${contact.fullName} Avatar`}
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">{contact.fullName}</h5>
                <p className="card-text">Email: {contact.email}</p>
                <p className="card-text">Dirección: {contact.address}</p>
                <p className="card-text">Teléfono: {contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
      </div>
    );
  };

export default Contacto;
