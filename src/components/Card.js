import React from 'react';
import images from '../imageGetter';

function Card(props) {
    return(
        <div name={props.name} onClick={props.checkAnswer} className="card">
            <img src={images[`${props.name}.png`].default} name={props.name}/>
            <p name={props.name}>{props.name}</p>
        </div>
    );
}

export default Card;