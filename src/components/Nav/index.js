import React from 'react';
import { Link } from 'react-router-dom';



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="about">Keeve</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <Link to='/about-me'>About Me</Link>
                    </li>
                    <li>
                      <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                      <Link to='/contact-me'>Contact Me</Link>
                    </li>
                    <li>
                      <Link to='/resume'>Resume</Link>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;