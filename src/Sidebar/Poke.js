import { useEffect, useMemo, useState } from "react";
import styles from './Sidebar.module.css' 
const Poke = ({name, url}) =>{

    const [pokeObject, setPokeObject] = useState({})
    useEffect(()=>{
        fetch(url)
        .then(data=>data.json())
        .then((data)=>{
           const pokeObject = {
            id: data.id,
            image: data.sprites.other.dream_world.front_default,
            type : data.types[0].type.name,
            url : url,
            name: name
           }
           setPokeObject(pokeObject)
        })
    }, [])

        
    const openPoke=()=>{

    }

    return (
        <div className={styles.Poke} >
            <a href={pokeObject.url}>

            <h2>{`#0${pokeObject.id}`}</h2>
            <h1>{pokeObject.name}</h1>
            <img src={pokeObject.image} className={styles.image} alt={`${pokeObject.name} image`}/>
            <h3>Type: {pokeObject.type}</h3>
            {/* <p>{pokeObject.url}</p> */}
            </a>
        </div>
    );
}

export default Poke;