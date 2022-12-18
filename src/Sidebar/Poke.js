import { usePokemon } from "../Api/useLoadPokemon";
import styles from './Sidebar.module.css' 
const Poke = ({pokemon, setIndiviPokemon}) =>{

    const pokeObject= usePokemon({pokemon});
        
    const openPoke=()=>{
        setIndiviPokemon(pokeObject)
    }

    return (
        <div className={styles.Poke} onClick={openPoke} role='button' data-testid={`cardBtn${pokeObject?.id}`} >
            <h2>{`#0${pokeObject?.id}`}</h2>
            <h1>{pokeObject?.name}</h1>
            <img src={pokeObject?.sprites?.other?.dream_world?.front_default} 
                 className={styles.image} alt={`${pokeObject?.name}`}
            />
            <h3>Type: {pokeObject?.types?.slice(0)[0]?.type?.name}</h3>
        </div>
    );
}

export default Poke;