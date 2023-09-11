import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StrainList = () => {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    const placeholderStrains = [
      { id: 1, name: 'Lion`s Mane', imageUrl: 'https://i.imgur.com/72S8LKM.jpeg/150' },
      { id: 2, name: 'Reishi', imageUrl: 'https://i.imgur.com/22RO4V3.jpeg/150' },
      { id: 5, name: 'Enoki', imageUrl: 'https://i.imgur.com/J67lcvi.jpeg/150' },
      { id: 4, name: 'Shiitake', imageUrl: 'https://i.imgur.com/8YjPR56.jpeg/150' },
      { id: 3, name: 'Oyster', imageUrl: 'https://i.imgur.com/1EslUS7.jpeg/150' },
    ];

    setTimeout(() => {
      setStrains(placeholderStrains);
    }, 1000);
  }, []);

  return (
    <div className="container mt-0">
      <h2 className="text-center text-success">Strains List</h2>
      <div className="row">
        {strains.map((strain) => (
          <div key={strain.id} className="col-md-4 mb-3">
            <div className="bg-info p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2 text-center">{strain.name}</h3>
              <img src={strain.imageUrl} alt={strain.name} className="mb-2 img-fluid mx-auto d-block" />
              <Link to={`/strains/${strain.id}`} className="btn btn-primary d-block mx-auto">
                Details
              </Link>
            </div>
          </div>
        ))}
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
};

export default StrainList;
