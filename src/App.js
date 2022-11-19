import React from 'react';
import './App.css';
import pokemon from './pokemon.json';

function App() {
  return (
    <div
      style={{
        margin:"auto",
        width:1000,
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
            <tr key={pokemon.id}>
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(", ")}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
export default App;
