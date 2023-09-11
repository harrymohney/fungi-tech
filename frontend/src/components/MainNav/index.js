import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Strains from '../../pages/Strains';
import Show from '../../pages/Show';
import Edit from '../../pages/Edit';
import _404 from '../../pages/Error';

export default function Main(props) {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Strains />} />
        <Route path="/strains/:id" element={<Show />} />
        <Route path="/strains/:id/edit" element={<Edit />} />
        <Route path="/StrainList" element={<h1>StrainList</h1>} />
        <Route path="/*" element={<_404 />} />
      </Routes>
    </main>
  );
}

