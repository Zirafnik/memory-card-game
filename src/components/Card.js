import React from 'react';
import pokemon from '../images/charizard.png';

function Card(props) {
    return(
        <div className="card">
            <img src={pokemon}/>
            <p>Charizard</p>
        </div>
    );
}

export default Card;