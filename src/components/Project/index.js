import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Project(props) {
  const currentCategory = {
    name: 'portfolio', description: 'Portfolio of six projects'

  };
  
  return (
    <section>
      {/* <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p> */}
    </section>
  );
}
export default Project;

