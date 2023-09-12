import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StrainList() {
  const [strains, setStrains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStrains = async () => {
      try {
        const response = await fetch('https://fungi-tech-backend-458721741ac9.herokuapp.com/strains');
        if (response.ok) {
          const data = await response.json();
          setStrains(data);
          setIsLoading(false);
        } else {
          console.error('Server Response not OK!');
        }
      } catch (error) {
        console.error('Failed to fetch strains', error);
      }
    };
    fetchStrains();
  }, []);

  return (
    <div className="container mt-0 p-4">
      <h2 className="text-center text-white mb-4">Strains List</h2>
      <div className="row">
        {isLoading ? (
          <p>Loading...</p>
        ) : strains.length ? (
          strains.map((strain) => (
            <div key={strain._id} className="col-md-4 mb-3">
              <div className="bg-info p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2 text-center text-white">{strain.name}</h3>
                <img
                  src={strain.imageUrl}
                  alt={strain.name}
                  className="mb-2 img-fluid mx-auto d-block rounded"
                  style={{ maxWidth: '100%', borderRadius: '10px' }}
                />
                <Link to={`/strains/${strain._id}`} className="btn btn-primary d-block mx-auto mb-2">
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No strains available.</p>
        )}
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mt-4 text-center">
          <Link to="/strains/add" className="btn btn-primary">
            Add Additional Strains
          </Link>
        </div>
      </div>
    </div>
  );
}