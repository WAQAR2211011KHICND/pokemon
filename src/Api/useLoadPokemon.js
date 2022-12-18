import {   useEffect, useState } from 'react';

 const useLoadPokemon = ({setPokemons}) => {
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then((data)=>data.json())
        .then((data)=> {
            setPokemons(data);
        })   
    },[]);
}

 const LoadMorePokemon = async ({pokemons}) => {  
  return fetch(pokemons.next).then((data)=>data.json())
}

 const usePokemon = ({pokemon}) => {
    const [pokeObject, setPokeObject] = useState({});
    useEffect(()=>{
        fetch(pokemon.url)
        .then(data=> data.json())
        .then((data)=>setPokeObject(data))
    },[])
    return pokeObject;
}
 
export {usePokemon, LoadMorePokemon, useLoadPokemon};