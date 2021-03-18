import React, {useState} from 'react';
import Card from './Card';

function ImgContainer(props) {
    const pokeNames= ['charmander', 'bulbasaur', 'squirtle', 'beedrill', 'pidgey', 'abra', 'ekans', 'elekid', 'geodude', 'mewtwo', 'pikachu', 'pinsir', 'togepi'];
    const pokeCards= pokeNames.map((pokemon) => 
        <Card checkAnswer={props.checkAnswer} key={pokemon} name={pokemon}/>
    );

    return (
        <div className="img-container">
            {pokeCards}
        </div>
    );
}

export default ImgContainer;