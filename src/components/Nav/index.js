import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const  categories = [
        { name: 'frontend', description: 'A compilation of front end focused projects' },
        { name: 'backend', description: 'A compilation of back end focused projects' },
    ];

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
                    <li>
                        <a className="nav-link active" aria-current="page" href="about" onClick={() => handleClick()}>About Me</a>
                    </li>
                    <li>
                        <a className="nav-link" href="about">Portfolio</a>
                    </li>
                        {
                            categories.map((category) => (
                            <li className="mx-1" key={category.name} >
                                <span onClick={() => { handleClick(); }}>
                                {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                            ))
                        }
                    <li>
                        <a className="nav-link" href="contact" onClick={() => handleClick()}>Contact</a>
                    </li>
                    <li>
                        <a className="nav-link" href="resume" onClick={() => handleClick()}>Resume</a>
                    </li>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;