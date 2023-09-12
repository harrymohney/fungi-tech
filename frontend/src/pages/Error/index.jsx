import React from 'react';

export default function Error({ error }) {
  return (
    <div className="container mt-5">
      <h2>404 - Page Not Found</h2>
      <p>{error ? error.message : null}</p>
    </div>
  );
}