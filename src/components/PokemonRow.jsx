import React from 'react'

const PokemonRow = ({ pokemon, index }) => {

  //console.log(pokemon);

  const checkHiddenAbility = () => {
    let hiddenAbility = pokemon.abilities[1] ? pokemon.abilities[1].ability.name : null;

    if (hiddenAbility) {
      return (
        <p>{hiddenAbility}</p>
      )
    }

    return <p>None</p>;
  }

  return (
    <tr>
      <td>{index}</td>
      <td>{pokemon.id}</td>
      <td>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '75%' }} className='img-fluid me-4' />
      </td>
      <td>
        {pokemon.name}
      </td>
      <td>
        <p>{pokemon.abilities[0].ability.name}</p>
      </td>
      <td>
        {
          checkHiddenAbility()
        }
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

{/* <tr>
      <td>{index}</td>
      <td>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '3%' }} className='img-fluid me-4' />
        <span>{pokemon.name}</span>
        <span className='ms-3 text-uppercase text-secondary'>{pokemon.symbol}</span>
      </td>
      <td>{pokemon.current_price}</td>
      <td className={pokemon.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
        {pokemon.price_change_percentage_24h}
      </td>
      <td>{pokemon.total_volume}</td>
    </tr> */}

export default PokemonRow