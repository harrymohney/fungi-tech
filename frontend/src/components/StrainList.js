import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StrainList() {
  const [strains, setStrains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  console.log('entering useEffect')
  const fetchStrains = async () => {
    console.log('entering fetchStrains')
    try {
      console.log('attempting to fetch strains')
      const response = await fetch('http://localhost:4000/strains');
      console.log('response is', response);
      if(response.ok) {
        try {
          console.log('trying to parse response');
          console.log(response);
          const data = await response.json();
          setStrains(data);
          setIsLoading(false);
          console.log(data);
        } catch (error) {
          console.error("Invalid JSON in response", error);
        }
      } else {
          console.error('Server Response not OK!');
      }
    } catch (error) {
      console.error('Failed to fetch strains', error);
    }
  }
  fetchStrains();
}, []);


  return (
    <div className="container mt-0">
      <h2 className="text-center text-success">Strains List</h2>
      <div className="row">
        {isLoading ? (
          <p>Loading...</p>
        ) : strains.length ? (
          strains.map((strain) => (
          <div key={strain._id} className="col-md-4 mb-3">
            <div className="bg-info p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2 text-center">{strain.name}</h3>
              <img src={strain.image} alt={strain.name} className="mb-2 img-fluid mx-auto d-block" />
              <Link to={`/strains/${strain._id}`} className="btn btn-primary d-block mx-auto">
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





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const StrainList = () => {
//   const [strains, setStrains] = useState([]);

//   useEffect(() => {
//     const placeholderStrains = [
//       { id: 1, name: 'Lion`s Mane', imageUrl: 'https://i.imgur.com/72S8LKM.jpeg/150' },
//       { id: 2, name: 'Reishi', imageUrl: 'https://i.imgur.com/22RO4V3.jpeg/150' },
//       { id: 5, name: 'Enoki', imageUrl: 'https://i.imgur.com/J67lcvi.jpeg/150' },
//       { id: 4, name: 'Shiitake', imageUrl: 'https://i.imgur.com/8YjPR56.jpeg/150' },
//       { id: 3, name: 'Oyster', imageUrl: 'https://i.imgur.com/1EslUS7.jpeg/150' },
//     ];

//     setTimeout(() => {
//       setStrains(placeholderStrains);
//     }, 1000);
//   }, []);

//   return (
//     <>
//     <div className="container mt-0">
//       <h2 className="text-center text-success">Strains List</h2>
//       <div className="row">
//         {strains.map((strain) => (
//           <div key={strain.id} className="col-md-4 mb-3">
//             <div className="bg-info p-4 rounded shadow">
//               <h3 className="text-lg font-semibold mb-2 text-center">{strain.name}</h3>
//               <img src={strain.imageUrl} alt={strain.name} className="mb-2 img-fluid mx-auto d-block" />
//               <Link to={`/strains/${strain.id}`} className="btn btn-primary d-block mx-auto">
//                 Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         <div className="col-md-6 mt-4 text-center">
//           <Link to="/strains/add" className="btn btn-primary">
//             Add Additional Strains
//           </Link>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default StrainList;
