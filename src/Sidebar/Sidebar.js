import { useEffect } from 'react';
import Poke from './Poke';
import styles from './Sidebar.module.css'


function Sidebar({pokemons, setPokemons}){

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then((data)=>data.json())
        .then((data)=> {
            setPokemons(data.results);
        })   

    },[]);

    return (
        <>
        {
        pokemons.map(
            (pokemon)=>{
                return <Poke name={pokemon.name} url={pokemon.url} key={pokemon.name}/>
            })
        }
        <button className={styles.btn}><h3>Load</h3></button>
        </>
        
       
    )
}

export default Sidebar;