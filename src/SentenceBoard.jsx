import React from 'react';
import { useState } from 'react';
import SentenceCard from './SentenceCard.jsx';
import { useDrop } from 'react-dnd';

function SentenceBoard() {
  const [sentenceCards, setSentenceCards] = useState([]);

  const collection = (monitor) => {
    console.log(monitor);
    return {
      isOver: !!monitor.isOver()
    }
  };

  const [collectedProps, drop] = useDrop(() => ({
    accept: "InputCard",
    drop: (item) => {
      console.log("Dropping item: ", item);
      addSentenceToBoard(item);
    },
    collect: collection
  }));

  const addSentenceToBoard = (sentenceCard) => {
    console.log("addSentenceToBoard called: ", sentenceCard);
    setSentenceCards([...sentenceCards, sentenceCard]);
  };

  if (sentenceCards) {
    console.log("Sentence cards getting rendered: ", sentenceCards);
    return (
      <section id="board" className="board" ref={drop}>
        {
          sentenceCards
        }
      </section>
    )
  } else {
    console.log("Nothing here yet to render!");
    return (
      <section id="board" className="board" ref={drop}>
        <p>Nothing here yet!</p>
      </section>
    )
  }
}

export default SentenceBoard;
