import React, {useState, useEffect} from 'react';
import Card from './Card';

function ImgContainer(props) {
    let pokeNames= ['charmander', 'bulbasaur', 'squirtle', 'beedrill', 'pidgey', 'abra', 'ekans', 'elekid', 'geodude', 'mewtwo', 'pikachu', 'pinsir', 'togepi'];
    const [pokeCards, setPokeCards] = useState(pokeNames);

    useEffect(() => {
        let newOrder= [...pokeCards];
        shuffleArray(newOrder);
        setPokeCards(newOrder);
    }, [props.score, props.bestScore]);

    /* From StackOverflow */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const listCards= pokeCards.map((pokemon) => 
        <Card checkAnswer={props.checkAnswer} key={pokemon} name={pokemon}/>
    );

    return (
        <div className="img-container">
            {listCards}
        </div>
    );
}

export default ImgContainer;