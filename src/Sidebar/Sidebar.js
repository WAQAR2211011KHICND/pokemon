import { memo, useEffect, useState } from 'react';
import Poke from './Poke';
import styles from './Sidebar.module.css'


function Sidebar({pokemons, setPokemons , setIndiviPokemon}){

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
        .then((data)=>data.json())
        .then((data)=> {
            setPokemons(data);
        })   
    },[]);

    const loadMore = () =>{
        setLoading(true);
        fetch(pokemons.next)
        .then((data)=>data.json())
        .then((data)=>{
            setPokemons(poke=>{ 
                return {...data, results: [...poke.results, ...data.results]}
            } )
            setLoading(false);
        })
    }

    return (
        
    <div className={styles.sideBar}>
        {
            pokemons?.results?.map(
                (pokemon)=>{
                    return( 
                        <Poke
                        pokemon={{name: pokemon.name,url:pokemon.url}}
                        setIndiviPokemon={setIndiviPokemon} 
                        key={pokemon.name}
                        
                        />)
               })
        }
        <button className={styles.btn} onClick={loadMore}>
            { loading ?<p>Loading...</p>:<p>Load More</p>  }   
        </button>

    </div>  
    )

}

export default memo(Sidebar);




