import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StrainList = () => {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    const placeholderStrains = [
      { id: 1, name: 'Lion`s Mane' },
      { id: 2, name: 'Reishi' },
      { id: 3, name: 'Oyster' },
      { id: 4, name: 'Shitake' },
      { id: 5, name: 'Enoki' },
    ];

    setTimeout(() => {
      setStrains(placeholderStrains);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Strains List</h2>
      <ul>
        {strains.map((strain) => (
          <li key={strain.id}>
            <Link to={`/strains/${strain.id}`}>{strain.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrainList;

