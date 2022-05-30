import './App.css';
import Character from './components/character/Character';
import Data from './Data.js';

function App() {
  console.log(Data.results);
  return (
    <div className="App">
      <h1>Welcome to Datalovers with React</h1>
      <section className='container-character'>
      {Data.results.map(character=>
        <Character characters = {character} />
        )}
      </section>

    </div>
  );
}

export default App;
