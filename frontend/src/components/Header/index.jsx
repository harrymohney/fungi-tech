import React from 'react';
import { MainNav } from '../Navigation';

const headerFallback = "https://i.imgur.com/TlPfYFn.jpeg";

export default function Header({ heroImage }) {
  return (
    <header style={{ height: "20rem", overflow: "hidden" }}>
      <MainNav />
      <img
        src={heroImage || headerFallback}
        style={{ width: "100%" }}
        alt="Header"
      />
    </header>
  );
}
