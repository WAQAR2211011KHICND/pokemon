import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Center from './Center/Center';


function App() {

  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='side-center'> 
      <div className='sideBar'>
        <Sidebar pokemons={pokemons} setPokemons={setPokemons}/>
      </div>
        <div className='centerDiv'>
          <Center/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
