import Drawer from './Drawer';
import './App.css';

function App() {
  const menu = [
    {
      id: 0,
      title: 'MENU',
    },
    {
      id: 1,
      title: 'About',
    },
    {
      id: 2,
      title: 'Get started',
    },
    {
      id: 3,
      title: 'Sign in',
    },
  ];
  return (
    <div>
      <Drawer menu={menu} />
    </div>
  );
}

export default App;
