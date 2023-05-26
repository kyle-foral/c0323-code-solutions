import { useEffect, useState } from 'react';
import './Carousel.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export default function Carousel({ pictures }) {
  const [displayed, setDisplayed] = useState(0);

  function handleNext() {
    const nextPicture = setDisplayed((displayed + 1) % pictures.length);
    return nextPicture;
  }

  function handlePrevious() {
    const previousPicture = setDisplayed(
      (displayed - 1 + pictures.length) % pictures.length
    );
    return previousPicture;
  }

  function handleSelect(index) {
    return setDisplayed(index);
  }

  useEffect(() => {
    const interval = setInterval(
      () => setDisplayed((displayed + 1) % pictures.length),
      3000
    );
    return () => clearInterval(interval);
  }, [displayed, pictures.length]);

  return (
    <div className="container">
      <PrevButton onCustomClick={handlePrevious} />
      <img src={pictures[displayed].picture} alt="shown" classname="image" />
      <Indicators
        count={pictures.length}
        active={displayed}
        onSelect={handleSelect}
      />
      <NextButton onCustomClick={handleNext} />
    </div>
  );
}

function CustomButton({ onCustomClick, color = 'lightblue' }) {
  return <button style={{ backgroundColor: color }} onClick={onCustomClick} />;
}

function PrevButton({ onCustomClick }) {
  return (
    <div className="prev">
      <FaAngleLeft onClick={onCustomClick} />
    </div>
  );
}

function NextButton({ onCustomClick }) {
  return (
    <div className="next">
      <FaAngleRight onClick={onCustomClick} />
    </div>
  );
}

function Indicators({ count, onSelect, active }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={''}
        onCustomClick={() => onSelect(i)}
        color={active === i ? 'black' : 'lightblue'}
      />
    );
  }
  return <div className="bottomRow">{buttons}</div>;
}
