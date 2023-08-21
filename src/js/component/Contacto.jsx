import React, { useContext, useEffect } from 'react';
import { UserContext } from '../store/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Contacto = () => {
  const { userData, setUserData  } = useContext(UserContext);
  


  return (
    <div className="container mt-4">
      <h2>Contactos</h2>
      <div className='mt-2 mb-2 d-md-flex justify-content-md-end'>
          <Link to="/NewContact" className="btn btn-success">Add new contact</Link>
          </div>
      {userData.map((contact) => (
      <div key={contact.id}>
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://picsum.photos/id/237/300/300" 
                alt={`${contact.full_name} Avatar`}
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">{contact.full_name}</h5>
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
