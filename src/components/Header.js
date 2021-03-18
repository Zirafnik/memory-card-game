import React from 'react';
import Score from './Score';

function Header(props) {
    return (
        <header className="header">
            <h1>Pokémon Memory Cards</h1>
            <p>Get points by clicking on images, but dont't click on the same one more than once!</p>
            <Score score={props.score} bestScore={props.bestScore} />
        </header>
    );
}

export default Header;