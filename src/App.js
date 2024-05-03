import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Bug Fix 1 branch</p>
      </header>
      <div> Dashboard</div>
      <h1>Feature</h1>
      <p1>Monthly release</p1>
      <p1>Weekly release</p1>

      <h2>Important Addition Done in pipeline</h2>
      <h4>Filters</h4>
      <h5>From date </h5>
    </div>
  );
}

export default App;
