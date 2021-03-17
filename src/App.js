import './styles/reset.css';
import './styles/App.css';
import Header from './components/Header';
import ImgContainer from './components/ImgContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <ImgContainer />      
      
      <Footer />
    </div>
  );
}

export default App;