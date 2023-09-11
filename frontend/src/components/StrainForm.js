import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as strainsService from '../utilities/strains-service';

const StrainForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    url: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await strainsService.createStrain(formData);
      if (response) {
        navigate('/strains');
      } else {
        console.error('Error adding strain:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding strain:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-success text-center">Add New Strain</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-success fw-bold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-success fw-bold">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label text-success fw-bold">
            Image URL:
          </label>
          <input
            type="url"
            name="imageUrl"
            id="imageUrl"
            className="form-control"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label text-success fw-bold">
            Strain URL:
          </label>
          <input
            type="url"
            name="url"
            id="url"
            className="form-control"
            value={formData.url}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default StrainForm;
