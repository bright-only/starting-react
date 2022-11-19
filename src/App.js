import './App.css';

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
          <tr>
            <td>Bulbasaur</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
