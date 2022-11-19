import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import pokemon from './pokemon.json';

const PokemonRow=({pokemon})=>(
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
);

PokemonRow.propTypes={
  Pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english:PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

function App() {
  return (
    <div
      style={{
        margin:"auto",
        width:800,
        paddingTop:"1rem"
      }}
    >
      <h1 className="Title">POKEMON SEARCH</h1>
      <table width="100%">
        <thead>
          <tr>
           <th>NAME</th>
           <th>TYPE</th>
          </tr>
        </thead>
        <tbody>
          {pokemon
          .slice(0, 20)
            .map(pokemon=>(
            <PokemonRow pokemon={pokemon} key={pokemon.id}/>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
export default App;
