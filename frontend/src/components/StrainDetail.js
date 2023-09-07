import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StrainDetail = () => {
  const { id } = useParams();
  const [strain, setStrain] = useState(null);

  useEffect(() => {
    const placeholderStrain = {
      id: id,
      name: 'Strain',
      description: 'Lorem Ipsum',
    };

    setTimeout(() => {
      setStrain(placeholderStrain);
    }, 1000);
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
