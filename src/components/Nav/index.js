import React from 'react';

function Nav() {

    const handleClick = () => {
        console.log("click handled")
    }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="about">Keeve</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="about" onClick={() => handleClick()}>About Me</a>
        
                    <a className="nav-link" href="portfolio" onClick={() => handleClick()}>Portfolio</a>
        
                    <a className="nav-link" href="contact" onClick={() => handleClick()}>Contact</a>
        
                    <a className="nav-link" href="resume" onClick={() => handleClick()}>Resume</a>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;