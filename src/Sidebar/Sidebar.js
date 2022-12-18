import { memo, useContext, useState } from 'react';
import noteContext from '../Api/Context/noteContext';
import {  LoadMorePokemon, useLoadPokemon } from '../Api/useLoadPokemon';
import Poke from './Poke';
import styles from './Sidebar.module.css'


function Sidebar(){

    const {Pokemons, IndiviPokemon} = useContext(noteContext);
    const [loading, setLoading] = useState(false);

    useLoadPokemon({setPokemons: Pokemons.setPokemons});

    const loadMore = () =>{
        setLoading(true);
        LoadMorePokemon({pokemons: Pokemons.pokemons})
            .then(data=>{
                Pokemons.setPokemons(
                    poke => {
                        return {...data, results: [...poke.results, ...data.results]}
                    }
                )
                setLoading(false);
            })
    }

    return (
        
    <div className={styles.sideBar}  data-testid='Sidebar'>
        {
            Pokemons?.pokemons?.results?.map(
                (pokemon)=>{
                    return( 
                        <Poke
                        pokemon={{name: pokemon.name,url:pokemon.url}}
                        setIndiviPokemon={IndiviPokemon.setIndiviPokemon} 
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




