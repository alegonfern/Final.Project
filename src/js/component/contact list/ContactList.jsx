import React from 'react';

const ContactList = ({ contactos }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <ul className="list-group">
            {contactos.map((contacto, index) => (
              <li key={index} className="list-group-item d-flex align-items-center">
                <img
                  src={`https://picsum.photos/seed/${contacto.nombre}${contacto.apellido}/50`}
                  alt={contacto.nombre}
                  width="50"
                  height="50"
                  className="rounded-circle me-3"
                />
                <button className="btn btn-dark" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>
                  {contacto.nombre} {contacto.apellido}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
