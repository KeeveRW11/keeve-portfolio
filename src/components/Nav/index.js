import React from 'react';

function Nav() {

  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="about">Keeve</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="about">About Me</a>
                        <a class="nav-link" href="about">Portfolio</a>
                        <a class="nav-link" href="about">Contact</a>
                        <a class="nav-link" href="about">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Nav;