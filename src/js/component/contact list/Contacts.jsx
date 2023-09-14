import React from 'react';
import ChatWindow from './ChatWindow ';
import ContactList from './ContactList';

const Contacts = () => {
  const contactos = [
    { nombre: 'Alexis', apellido: 'González' },
    { nombre: 'Carolina', apellido: 'Arraez' },
    { nombre: 'Claudio', apellido: 'Quinteros' },
    { nombre: 'Dianela', apellido: 'Barboza' },
    { nombre: 'Esperanza', apellido: 'Cambara' },
    { nombre: 'Génesis', apellido: 'Longart' },
    { nombre: 'Jennifer', apellido: 'Toledo' },
    { nombre: 'Jermaín', apellido: 'Chacón' },
    { nombre: 'Jorge', apellido: 'Oteiza' },
    { nombre: 'Juancarlos', apellido: 'Muller' },
    { nombre: 'Luis', apellido: 'Rodriguez' },
    { nombre: 'Marbelis', apellido: 'Lugo' },
    { nombre: 'Ricardo', apellido: 'Nuñez' },
    { nombre: 'Ryan', apellido: 'Daniels' },
    { nombre: 'Sebastián', apellido: 'Navarro' }
  ];

  return (
    <div className="container-fluid match-view" style={{ marginTop: '50px' }}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <ContactList contactos={contactos} />
        </div>
        <div className="col-lg-6 col-md-12">
          <ChatWindow />
        </div>
      </div>
    </div>
  );  
};
export default Contacts;
