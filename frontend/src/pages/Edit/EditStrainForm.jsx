import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStrain } from '../../utilities/strains-service';

export default function EditStrainForm({ initialData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const defaultState = initialData
    ? { ...initialData }
    : { name: '', imageUrl: '', description: '' };

  const [formData, setFormData] = useState(defaultState);

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, imageUrl, description } = formData;
    const updatedData = { name, imageUrl, description };

    try {
      const updateResponse = await updateStrain(id, updatedData);
      console.log(updateResponse);
      navigate(`/strains/${id}`);
    } catch (err) {
      console.error('Edit form error:', err);
      navigate('/');
    }
  }

  function handleChange(e) {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
  }

  return (
    <div className="container mt-5">
      <h2 className="text-white text-center">Edit Strain:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white fw-bold">
            Strain Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Add a name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label text-white fw-bold">
            Strain Image:
          </label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Add an image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-white fw-bold">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Add a strain description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Edit Strain
          </button>
        </div>
      </form>
    </div>
  );
}