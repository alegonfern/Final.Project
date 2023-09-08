import React, { useState } from 'react';
import ContactList from './ContactList';
import ChatWindow from './ChatWindow ';

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
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '50%', height: '100%' }}>
        <ContactList contactos={contactos} />
      </div>
      <div style={{ width: '50%', height: '100%' }}>
        <ChatWindow />
      </div>
    </div>
  );  
};
export default Contacts;