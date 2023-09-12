import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStrain } from '../../utilities/strains-service';

import Spinner from '../../components/Spinner';
import EditStrainForm from './EditStrainForm';

export default function Edit(props) {
  const [strain, setStrain] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  async function handleRequest() {
    try {
      const strainData = await getStrain(id);
      if (strainData._id) {
        setStrain(strainData);
        setIsLoading(false);
      } else {
        throw Error('Something went wrong!');
      }
    } catch (error) {
      navigate(`/strains/${id}`);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <EditStrainForm initialData={strain} />;
}