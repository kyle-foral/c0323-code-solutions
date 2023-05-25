import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ topics }) {
  const [current, setCurrent] = useState(null);

  const lists = [];
  for (let i = 0; i < topics.length; i++) {
    lists.push(
      <Panel
        key={topics[i].id}
        title={topics[i].title}
        isActive={current === i}
        onShow={handleClick}
        content={topics[i].content}
      />
    );
    function handleClick() {
      if (current === topics[i].id) {
        setCurrent(null);
      } else {
        setCurrent(topics[i].id);
      }
    }
  }
  return <div>{lists}</div>;
}

function Panel({ title, content, isActive, onShow }) {
  return (
    <section className="panel">
      <button onClick={onShow} className="title">
        {' '}
        {title}{' '}
      </button>
      {isActive && <p className="text">{content}</p>}
    </section>
  );
}
