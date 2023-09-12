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
    <div className="container mt-0 pt-4 text-center">
      <div className="Strain">
        <p className="text-white font-weight-bold">Strain ID: {strain._id}</p>

        <h3 className="text-white font-weight-bold">{strain.name} Details</h3>

        <img
          src={strain.imageUrl}
          alt={`${strain.name} profile pic`}
          className="img-fluid rounded"
          style={{ maxWidth: '100%' }}
        />

        <p className="text-white mt-3 font-weight-bold">{strain.description}</p>

        <div className="text-center pb-3">
          <button className="btn btn-danger mx-2 py-2" onClick={handleDelete}>
            Remove Strain
          </button>
          <Link className="btn btn-primary mx-2 py-2" to={`/strains/${strain._id}/edit`}>
            Edit Strain
          </Link>
        </div>
      </div>
    </div>
  );
}