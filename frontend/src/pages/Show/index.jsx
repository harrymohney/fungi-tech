// frontend/src/pages/Show/index.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getStrain, deleteStrain } from '../../utilities/strains-service';

import Spinner from '../../components/Spinner';

export default function Show(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [strain, setStrain] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  async function handleRequest() {
    const strainResponse = await getStrain(id);

    if (strainResponse?._id) {
      setStrain(strainResponse);
      setIsLoading(false);
    } else {
      navigate('/');
    }
  }

  async function handleDelete() {
    try {
      const deleteResponse = await deleteStrain(id);

      if (deleteResponse._id) {
        navigate('/strains');
      } else {
        throw Error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container mt-5">
      <div className="Strain">
        <p>Strain App Profile: {strain._id}</p>

        <h3>{strain.name}</h3>
        <img src={strain.image} alt={`${strain.name} profile pic`} />
        <p>{strain.description}</p>
        <div>
          <button className="btn btn-danger" onClick={handleDelete}>
            Remove Strain
          </button>
          <Link className="btn btn-primary" to={`/strains/${strain._id}/edit`}>
            Edit Strain
          </Link>
        </div>
      </div>
    </div>
  );
}

