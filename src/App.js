import './App.css';
import Rules from './components/Rules';
import Game from './components/Game';

function App() {
  return (
    <div>
      <h2 className='title'> MasterMind </h2>
      <Rules />
      <Game />      
    </div>
  );
}

export default App;
