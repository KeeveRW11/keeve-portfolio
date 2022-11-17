import React, {useEffect } from 'react';
import { capitalizeFirstLetter} from "..//../utils/helpers"
// import { Link } from 'react-router-dom';



function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;

      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);  

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
                    <li className={`${contactSelected && 'navActive'}`}>
                        <a className="nav-link active" aria-current="page" href="about" onClick={() => handleClick()}>About Me</a>
                    </li>
                    {categories.map((category) => (
                  <li
                    className={`mx-1 nav-link ${
                      currentCategory.name === category.name && !contactSelected && `navActive`
                        }`} 
                        key={category.name}>
                        <span
                            onClick={() => {
                              setCurrentCategory(category);
                              setContactSelected(false);
                              }}
                              >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                  </li>
                ))}
                  {/* <li>
                    <a className="nav-link" href="portfolio" onClick={() => handleClick()}>Portfolio</a>
                  </li>
                  <li>
                    <a className="nav-link" href="contact" onClick={() => handleClick()}>Contact</a>
                  </li>
                  <li>
                    <a className="nav-link" href="resume" onClick={() => handleClick()}>Resume</a>
                  </li>   */}
                </div>

            </div>
        </div>
    </nav>
  );
}

export default Nav;