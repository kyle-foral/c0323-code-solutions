import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Drawer.css';

export default function Drawer({ menu }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="container">
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={open ? 'menu-shade' : 'menu-shade is-drawn'}></div>
      <div className={open ? 'menu-drawer' : 'menu-drawer is-open'}>
        <h3 className="menu-heading"> Top Picks </h3>
        <DrawerList menu={menu} />
      </div>
    </div>
  );
}

function DrawerList({ menu }) {
  const list = menu.map((menu) => (
    <li key={menu.id} className="menu-items">
      {menu.title}
    </li>
  ));
  return <div>{list}</div>;
}
