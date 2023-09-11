import React from 'react';
import { Routes, Route } from 'react-router-dom';
import People from '../../pages/People';
import Show from '../../pages/Show';
import Edit from '../../pages/Edit';
import _404 from '../../pages/Error';

export default function Main(props) {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people/:id" element={<Show />} />
        <Route path="/people/:id/edit" element={<Edit />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/*" element={<_404 />} />
      </Routes>
    </main>
  );
}

