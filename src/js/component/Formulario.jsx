import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../store/UserContext";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const { userData, setUserData, updateUserContact, addNewUserContact } = useContext(UserContext);
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const [newContactId, setNewContactId] = useState(1);
  const { id } = useParams(); // Obtengo el ID del contacto de los parámetros de la URL

  const handleFull_nameChange = (e) => {
    setFull_name(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    if (id) {
      const contactToEdit = userData.find((contact) => contact.id === parseInt(id));
      if (contactToEdit) {
        setFull_name(contactToEdit.full_name);
        setEmail(contactToEdit.email);
        setAddress(contactToEdit.address);
        setPhone(contactToEdit.phone);
      }
    }
  }, [userData, id]);


  const handleSubmit = (e) => {

    e.preventDefault();

    if (id) {
      // Editar contacto existente
      const updatedContact = {
        agenda_slug: "juana",
        full_name,
        email,
        address,
        phone,
      };

      const puturl = "https://playground.4geeks.com/apis/fake/contact/" + parseInt(id);
      const putoptions = {
        method: "PUT",
        body: JSON.stringify(updatedContact),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(puturl, putoptions)
        .then(response => {
          if (response.ok) {
            console.log("PUT: Contacto actualizado exitosamente");
            // Actualizar el estado del contexto con los nuevos datos
            updateUserContact(updatedContact);
            navigate("/");
          } else {
            console.log(`Error en la solicitud PUT ${response.status}`);
            throw new Error("Error en la solicitud PUT");
          }
        })
        .catch(error => {
          console.error("Error en la solicitud PUT:", error);
        });
    } else {
      let newContactPost = { full_name, agenda_slug: "juana", email, address, phone };
      let newContact = { id: userData.length + 1, full_name, agenda_slug: "juana", email, address, phone };

      const postOptions = {
        method: "POST",
        body: JSON.stringify(newContactPost), // Datos del nuevo contacto en formato JSON
        headers: {
          "Content-Type": "application/json"
        }
      };
      const url = "https://playground.4geeks.com/apis/fake/contact/";

      fetch(url, postOptions)
        .then(response => {
          if (response.ok) {
            console.log("POST: Contacto agregado exitosamente");
            return response.json();
          } else {
            console.log(`Error en la solicitud POST ${response.status}`);
            throw new Error("Error en la solicitud POST");
          }
        })
        .then(data => {

          console.log(data); // mostrar la respuesta del servidor
          // Actualizar los datos en el contexto
          addNewUserContact(newContact);
          navigate("/"); // Redirigir a la página de contactos
        })
        .catch(error => {
          console.error("Error en la solicitud POST:", error);
        });


    };

    // Limpiar el formulario y redirigir después de guardar/crear
    setFull_name("");
    setEmail("");
    setAddress("");
    setPhone("");
  };


  return (
    <div className="container mt-4">
      <h2 className="text-center">Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" value={full_name} onChange={handleFull_nameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" value={address} onChange={handleAddressChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          SAVE
        </button>
      </form>

      <Link to={`/`} className="btn btn-link custom-link">
        or get back to contact
      </Link>

    </div>
  );
};

export default Formulario;


