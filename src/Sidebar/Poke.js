
const Poke = ({name, url}) =>{

    
    return (
        <div className="Poke">
            {/* <p>{id}</p> */}
            <p>Name: {name}</p>
            {/* <img src={imageUrl} alt={`${name} image`}/>
            <p>Type: {type}</p> */}
            <p>{url}</p>
        </div>
    );
}

export default Poke;