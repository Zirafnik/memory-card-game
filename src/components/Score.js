function Score(props) {

    return(
        <div className='score'>
            <p>Score: {props.score}</p>
            <p>High Score: {props.bestScore}</p>
        </div>
    );
}

export default Score;