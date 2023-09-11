import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4 rounded shadow text-center">
            {strain ? (
              <div>
                <h2 className="text-3xl font-bold">{strain.name} Details</h2>
                <p className="mt-3">Description: {strain.description}</p>
                <Link to="/strains" className="btn btn-primary mt-3">
                  Back to Strains List
                </Link>
              </div>
            ) : (
              <p className="mt-3">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrainDetail;
