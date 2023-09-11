import { Link } from 'react-router-dom';

export default function StrainList({ strains }) {
  return (
    <section className="strain-list">
      {strains.map((strain, idx) => (
        <Link to={`/strains/${strain._id}`} key={strain._id}>
          <div className="strain-card">
            <h3>{strain.name}</h3>
            <img
              className="strain-image"
              src={strain.image}
              alt={strain.name}
            />
            <p>{strain.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
