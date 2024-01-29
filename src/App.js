import { useEffect, useState } from 'react';
import axios from 'axios';
import TablePokemons from './components/TablePokemons';


function App() {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    const allPokemons = res.data.results;

    const pokemonDataPromises = allPokemons.map((pokemon) => {
      const pokemonData = getPokemondata(pokemon);
      return pokemonData;
    });

    const allPokemonData = await Promise.all(pokemonDataPromises);
    setPokemons(allPokemonData);
  }

  const getPokemondata = async (pokemon) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const pokemonData = res.data;
    return pokemonData;
  }

  return (
    <>
      <div className="">
        <h1 className='text-center'>POKEAPI</h1>
      </div>
      <div>
        <TablePokemons pokemons={pokemons} />
      </div>
    </>
  );
}

export default App;
