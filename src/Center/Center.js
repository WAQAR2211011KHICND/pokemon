import { memo } from 'react';
import styles from './Center.module.css';

function Center({indiviPokemon,setIndiviPokemon}){

    const pokeObject = {
        id: indiviPokemon.id,
        image: indiviPokemon.sprites.other.dream_world,
        type : indiviPokemon.types.map(types=>types.type.name).join('/'),
        name: indiviPokemon.name,
        abilities : indiviPokemon.abilities.map(abilities=>abilities.ability.name).join('/'),
        weight : indiviPokemon.weight,
        height : indiviPokemon.height,

    }

    return (
        <div className={styles.centerDiv}>
            <div className={styles.MainImage}>
                <img src={pokeObject.image.front_default} alt={pokeObject.name}/>
            </div>
            <div className={styles.detail}>
                <h2>{`#0${pokeObject.id}`}</h2>
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