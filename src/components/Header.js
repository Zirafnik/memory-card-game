import React from 'react';
import Score from './Score';

function Header(props) {
    return (
        <header className="header">
            <h1>Pokemon Memory Cards</h1>

            <Score score={props.score} bestScore={props.bestScore} />
        </header>
    );
}

export default Header;