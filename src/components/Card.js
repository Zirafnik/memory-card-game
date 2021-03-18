import React from 'react';

function Card(props) {
    return(
        <div name={props.name} onClick={props.checkAnswer} className="card">
            <img src={`/images/${props.name}.png`} name={props.name}/>
            <p name={props.name}>{props.name}</p>
        </div>
    );
}

export default Card;