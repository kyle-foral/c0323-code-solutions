import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text, color) {
    alert(`Clicked ${color} ${text}`);
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CustomButton text="The" color="Pink" onCustomClick={handleCustomClick} />
      <CustomButton
        text="Gold"
        color="Purple"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Boat"
        color="Yellow"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
