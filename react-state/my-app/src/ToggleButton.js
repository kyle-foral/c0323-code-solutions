import { useState } from 'react';

export default function ToggleButton({ text, color, text2, color2 }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log('Value of setter BEFORE clicked');
    setIsClicked(!isClicked);
    console.log('Value of setter AFTER clicked');
  }

  if (isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color2 }}>
        {text2}
      </button>
    );
  }
}
