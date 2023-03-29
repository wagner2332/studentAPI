import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h3>CADASTRO DE ESTUDANTES</h3> 
      <form>
        <h4>NOME:</h4>
        <input type='text'></input>
        <br></br>
        <h4>ENDERECO:</h4>
        <input type='text'></input>
        <br></br>
      </form><br></br>
      <button className='cadastrar' type='submit'>cadastrar</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}

export default App;
