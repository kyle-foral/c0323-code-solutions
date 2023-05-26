import Carousel from './Carousel';
import './App.css';

function App() {
  const pictures = [
    { id: 0, picture: '/images/dk.png' },
    { id: 1, picture: '/images/mario.png' },
    { id: 2, picture: '/images/yoshi.png' },
    { id: 3, picture: '/images/kirby.png' },
    { id: 4, picture: '/images/pikachu.png' },
  ];

  return (
    <div>
      <Carousel pictures={pictures} />
    </div>
  );
}

export default App;
