import { useEffect,  useState } from "react";
import styles from './Sidebar.module.css' 
const Poke = ({pokemon, setIndiviPokemon}) =>{

    const [pokeObject, setPokeObject] = useState({});

    useEffect(()=>{
        fetch(pokemon.url)
        .then(data=>data.json())
        .then((data)=>setPokeObject(data))
    },[])
    
        
    const openPoke=()=>{
        setIndiviPokemon(pokeObject)
    }

    return (
        <div className={styles.Poke} onClick={openPoke} role='button'>
            <h2>{`#0${pokeObject?.id}`}</h2>
            <h1>{pokeObject?.name}</h1>
            <img src={pokeObject?.sprites?.other?.dream_world?.front_default} 
                 className={styles.image} alt={`${pokeObject?.name}`}
            />
            <h3>Type: {pokeObject?.types?.slice(0)?.type?.name}</h3>
        </div>
    );
}

export default Poke;