import React from 'react';
import { Link } from 'react-router-dom';

import './MainNav.css';

const brandImage =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

export default function MainNav(props) {
  return (
    <nav className="MainNav">
      <Link to="/">
        <img src={brandImage} alt="Brand Logo" />
      </Link>
      <div>People App!</div>
    </nav>
  );
}
