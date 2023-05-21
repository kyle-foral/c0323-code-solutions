import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div>
      <ToggleButton text="Hello" color="Pink" text2="Bye" color2="Orange" />
      <ToggleButton text="Ship" color="Yellow" text2="Plane" color2="White" />
      <ToggleButton text="Land" color="Green" text2="Sea" color2="Blue" />
    </div>
  );
}

export default App;
