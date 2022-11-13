import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



function Project() {
    const  categories = [
        { name: 'frontend', description: 'A compilation of front end focused projects' },
        { name: 'backend', description: 'A compilation of back end focused projects' },
    ];


    return (
        <div>
            {
                categories.map((category) => (
                <li className="mx-1" key={category.name} >
                    <span onClick={() => { handleClick(); }}>
                    {capitalizeFirstLetter(category.name)}
                    </span>
                </li>
                ))
            } 
          
        </div>    
    )
}   

export default Project