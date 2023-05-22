import { useState } from 'react';
import './CustomButton.css';

export default function CustomButton({ text, className }) {
  let [number, setNumber] = useState(0);

  function handleClick() {
    setNumber((number += 1));
  }

  if (number < 3) {
    className = 'buttonOne';
  } else if (number < 6) {
    className = 'buttonTwo';
  } else if (number < 9) {
    className = 'buttonThree';
  } else if (number < 12) {
    className = 'buttonFour';
  } else if (number < 15) {
    className = 'buttonFive';
  } else if (number < 18) {
    className = 'buttonSix';
  }

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
