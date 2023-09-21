import React from 'react';

const EdadGenero = ({
  agePreference,
  handleAgeChange,
  handleMaxAgeChange,
  handleMinAgeInputChange,
  genderPreference,
  handleGenderChange,
}) => {
  return (
    <div className="age-gender-selector py-2">
      <h3>¿Con usuarios de qué edad te gustaría jugar?</h3>
      <div className="age-inputs">
        <div className="age-min">
          <label>Edad Mínima</label>
          <input
            type="number"
            value={agePreference.min}
            onChange={handleMinAgeInputChange}
            min="0"
            max="99"
          />
        </div>
        <div className="age-max">
          <label>Edad Máxima</label>
          <input
            type="number"
            value={agePreference.max}
            onChange={handleMaxAgeChange}
            min="0"
            max="99"
          />
        </div>
      </div>
      <h3>¿Tienes alguna preferencia de género?</h3>
      <div className="gender-selector">
        <select value={genderPreference} onChange={handleGenderChange}>
          <option value="De todo">De todo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
  );
};

export default EdadGenero;
