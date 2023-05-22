import { useState } from 'react';

export default function ToggleButton({ text, color, text2, color2 }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    console.log('Value of setter BEFORE clicked');
    setIsClicked(!isClicked);
    console.log('Value of setter AFTER clicked');
  }

  const backColor = isClicked ? color : color2;
  return (
    <button onClick={handleClick} style={{ backgroundColor: backColor }}>
      {isClicked ? text : text2}
    </button>
  );
}
