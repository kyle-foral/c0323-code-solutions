import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

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
          rel="noopener noreferrer">
          <div>
            <CustomButton text="i" color="purple" />
            <CustomButton text="know" color="white" />
            <CustomButton text="react" color="pink" />
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
