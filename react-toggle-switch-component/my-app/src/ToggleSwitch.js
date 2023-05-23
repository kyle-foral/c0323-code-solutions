import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch(className) {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  function handleLabelText() {
    if (toggle) {
      className = 'OFF';
    }
  }
  return (
    <input type="checkbox" className={handleLabelText} onClick={handleClick} />
  );
}
