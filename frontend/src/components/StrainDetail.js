import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const StrainDetail = () => {
  const { id } = useParams();
  const [strain, setStrain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fungi-tech-backend-458721741ac9.herokuapp.com/strains/${id}`);
      const data = await response.json();
      setStrain(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-navy text-white">
            <div className="card-body">
              {strain ? (
                <div>
                  <h2 className="text-3xl font-bold text-center">{strain.name} Details</h2>
                  <p className="mt-3 text-center">Description: {strain.description}</p>
                  <img src={strain.imageUrl} alt={strain.name} className="img-fluid mx-auto d-block mt-3 rounded" />
                  <Link to="/strains" className="btn btn-primary d-block mx-auto mt-3">
                    Back to Strains List
                  </Link>
                </div>
              ) : (
                <p className="mt-3 text-center">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrainDetail;