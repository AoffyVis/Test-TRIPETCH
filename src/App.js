import './App.css';
import Athlets from './components/Athlets/Athlets';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <div className='Athlets_container'>
        <Athlets />
      </div>
      <div className='Player_container'>
        <Player />
      </div>
    </div>
  );
}

export default App;
