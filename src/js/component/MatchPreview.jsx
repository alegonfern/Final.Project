import React from 'react';

const MatchPreview = ({ name, interests, profilePicture, backgroundPicture }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={backgroundPicture} className="card-img-top" alt="Background" />
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <img
            src={profilePicture}
            alt="Profile"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
        <h5 className="card-title text-center mt-2">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Interests: {interests}</li>
      </ul>
      <div className="card-body d-flex justify-content-between">
        <button type="button" className="btn btn-danger">X</button>
        <button type="button" className="btn btn-success">♥️</button>
      </div>
    </div>
  );
};

export default MatchPreview;
