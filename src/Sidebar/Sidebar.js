import { useEffect } from 'react';
import Poke from './Poke';
import './Sidebar.css'

function Sidebar({pokemons, setPokemons}){

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=10")
        .then((data)=>data.json())
        .then((data)=> {
            setPokemons(data.results);
        })   

    },[]);

    return (
        pokemons.map((pokemon)=>{
            return <Poke name={pokemon.name} url={pokemon.url} key={pokemon.name}/>
        })
       
    )
}

export default Sidebar;