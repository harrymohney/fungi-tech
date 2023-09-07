import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStrainById } from '../utilities/strain-api';

const StrainDetail = () => {
  const { id } = useParams();
  const [strain, setStrain] = useState(null);

  useEffect(() => {
    const fetchStrain = async () => {
      const data = await getStrainById(id);
      setStrain(data);
    };

    fetchStrain();
  }, [id]);

  return (
    <div>
      {strain ? (
        <div>
          <h2>{strain.name} Details</h2>
          <p>Description: {strain.description}</p>
          {/* add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StrainDetail;
