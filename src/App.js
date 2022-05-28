import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ejercicio para trabajar con React</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
