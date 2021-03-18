import React, {useState, useEffect} from 'react';
import './styles/reset.css';
import './styles/App.css';
import Header from './components/Header';
import ImgContainer from './components/ImgContainer';
import Footer from './components/Footer';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] =useState(0);
  const [clickedPoke, setClickedPoke] = useState([]);

  function incrementScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetScore() {
    setCurrentScore(0);
  }

  function updateBestScore() {
    if(bestScore<currentScore) {
      setBestScore(currentScore);
    }
  }

  function checkAnswer(e) {
    if(clickedPoke.includes(e.target.getAttribute('name'))) {
      console.log('WRONG');
      console.log(e.target.getAttribute('name'));
      updateBestScore();
      resetScore();
      setClickedPoke([]);
      alert('GAME OVER');
    } else {
      console.log('CORRECT');
      console.log(e.target.getAttribute('name'));
      incrementScore();
      setClickedPoke([...clickedPoke, e.target.getAttribute('name')]);
    }
  }
  return (
    <div className="App">
      <Header score={currentScore} bestScore={bestScore} />

      <ImgContainer score={currentScore} bestScore={bestScore} checkAnswer={checkAnswer} />      
      
      <Footer />
    </div>
  );
}

export default App;