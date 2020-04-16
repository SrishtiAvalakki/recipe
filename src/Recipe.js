import React from 'react';


const Recipe = ({title,calories,ingredients,image}) => {
    return(
        <div className="sectionRecipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className="img" src={image} alt= "" />

        </div>
    );
};

export default Recipe