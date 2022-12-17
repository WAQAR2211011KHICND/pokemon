import styles from './App.module.css';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Center from './Center/Center';


function App() {

  const [pokemons, setPokemons] = useState([]);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Header/>
      </header>
      <div className={styles.sideWithCenter}> 
      <div className={styles.sideBar}>
        <Sidebar pokemons={pokemons} setPokemons={setPokemons}/>
      </div>
        <div className={styles.centerDiv}>
          <Center/>
        </div>
      </div>
    </div>
  );
}

export default App;
