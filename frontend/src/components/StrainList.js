import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStrains } from '../utilities/strain-api';

const StrainList = () => {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    const fetchStrains = async () => {
      const data = await getStrains();
      setStrains(data);
    };

    fetchStrains();
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
