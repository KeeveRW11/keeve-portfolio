import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Project(props) {
  const currentCategory = {
    name: 'portfolio', description: 'Portfolio of six projects'

  };
  
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      {/* <div>
            {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal}/>)}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (<img src={require(`../../assets/small/${category}/${i}.jpg`)} alt={image.name}
                className="img-thumbnail mx-1" onClick={() => toggleModal(image, i)} key={image.name} /> ))}
            </div>
      </div> */}
    </section>
  );
}
export default Project;

