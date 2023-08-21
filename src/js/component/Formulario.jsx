import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext,useState,useEffect} from "react";
import { UserContext } from "../store/UserContext";

const Formulario = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
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
    console.log(userData);
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newContact={ fullName, email, address,phone };
    setUserData([...userData,newContact]);
  };




  return (
    <div className="container mt-4">
      <h2 className="text-center">Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" value={fullName} onChange={handleFullNameChange} />
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
    </div>
  );
};

export default Formulario;


