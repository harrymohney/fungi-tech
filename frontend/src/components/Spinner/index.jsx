import React from 'react';

export default function Spinner() {
  return (
    <>
      <h1>
        Loading...
        <span>
          <img
            className="spinner"
            src={"https://freesvg.org/img/1544764567.png"}
            alt="Loading Spinner"
          />
        </span>
      </h1>
    </>
  );
}
