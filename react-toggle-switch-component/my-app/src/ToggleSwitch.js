import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch(className) {
  const [toggle, setToggle] = useState(false);

  let text = toggle ? 'ON' : 'OFF';
  let toggleButton = toggle ? 'is-on' : '';

  return (
    <div className={`toggle-switch ${toggleButton}`}>
      <div className="slider" onClick={() => setToggle(!toggle)}>
        <div className="switch" />
      </div>
      <span>{text}</span>
    </div>
  );
}
