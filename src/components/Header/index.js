import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

function Header() {
  return (
    <header>
        <Link to={process.env.PUBLIC_URL + '/'} style={{ textDecoration: 'none' }}>
        <h1>Keeve</h1>
      </Link>
        <Nav />
    </header>
  );
}

export default Header;