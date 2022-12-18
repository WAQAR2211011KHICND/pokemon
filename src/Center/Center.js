import { memo, useContext } from 'react';
import  noteContext  from '../Api/Context/noteContext';
import styles from './Center.module.css';

function Center(){
    const {IndiviPokemon} = useContext(noteContext);
    
    const pokeObject = {
        id: IndiviPokemon.indiviPokemon.id,
        image: IndiviPokemon.indiviPokemon.sprites.other.dream_world,
        type : IndiviPokemon.indiviPokemon.types.map(types=>types.type.name).join('/'),
        name: IndiviPokemon.indiviPokemon.name,
        abilities : IndiviPokemon.indiviPokemon.abilities.map(abilities=>abilities.ability.name).join('/'),
        weight : IndiviPokemon.indiviPokemon.weight,
        height : IndiviPokemon.indiviPokemon.height,

    }

    return (
        <div className={styles.centerDiv} data-testid='Center'>
            <div className={styles.MainImage}>
                <img src={pokeObject.image.front_default} alt={pokeObject.name}/>
            </div>
            <div className={styles.detail}>
                <h2 data-testid={`Center${pokeObject.id}`}>{`#0${pokeObject.id}`}</h2>
                <h1>{pokeObject.name}</h1>
                <h3>Height: {pokeObject.height}</h3>
                <h3>Weight: {pokeObject.weight}</h3>
                <h3>Type: {pokeObject.type}</h3>
                <h3>Abilities: {pokeObject.abilities}</h3>
            </div>
        </div>
    )
}

export default memo(Center);