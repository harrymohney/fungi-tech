import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addStrain } from '../utilities/strain-api';

const StrainForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStrain(formData);
      history.push('/strains');
    } catch (error) {
      console.error('Error adding strain:', error);
    }
  };

  return (
    <div>
      <h2>Add New Strain</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default StrainForm;
