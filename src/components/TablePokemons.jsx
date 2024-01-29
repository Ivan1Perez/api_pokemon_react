import React from 'react'
import PokemonRow from './PokemonRow'

const titles = ['#', 'ID', 'FORM', 'NAME', 'HABILITY', 'HIDDEN HABILITY', 'WEIGHT', 'HEIGHT']

const TablePokemons = ({ pokemons }) => {
  /* const filteredCoins = coins.filter(
    (coin) => coin.name.toLoWerCase().includes(search.toLoWerCase())
  ) */

  console.log(pokemons);

  return (
    <table className='table table-dark mt-5 table-hover'>
      <thead>
        <tr>
          {
            titles.map(title => (
              <th>{title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          pokemons.map((pokemon, index) => (
            <PokemonRow pokemon={pokemon} key={pokemon.id} index={index + 1} />
          ))
        }
      </tbody>
    </table>
  )
}

export default TablePokemons