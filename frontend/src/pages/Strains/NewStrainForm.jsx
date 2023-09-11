import { useState } from 'react';
import { createStrain } from '../../utilities/strains-service';

const initState = {
  name: '',
  imageURL: '',
  description: '',
};

export default function NewStrainForm({ updateStrains }) {
  const [newForm, setNewForm] = useState(initState);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(newForm);

    await createStrain(newForm);
    updateStrains();
    setNewForm(initState);
  }

  function handleChange(e) {
    const updatedData = { ...newForm, [e.target.name]: e.target.value };
    setNewForm(updatedData);
  }

  return (
    <section className="NewStrainForm-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Strain Name*
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Add a name"
            value={newForm.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="image">
          Strain Image
          <input
            type="text"
            name="image"
            id="image"
            value={newForm.image}
            onChange={handleChange}
            placeholder="Add an image URL"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            value={newForm.description}
            onChange={handleChange}
            placeholder="Add a strain description"
          />
        </label>
        <input type="submit" value="Create Strain" />
      </form>
    </section>
  );
}
