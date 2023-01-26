import { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [list, setList] = useState([]);

    const loadPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(resp => setList(resp.data.results))
            .catch(error => console.log(error))
    }

    return (
        <>
			<button className='btn btn-info' onClick={loadPokemons}>Fetch pokemon</button>
			<ul>
                { list?.map((poke, index)=> {return (<li key={index}>{poke.name}</li>)}) }
			</ul>
		</>
    )
}
export default Pokemon;