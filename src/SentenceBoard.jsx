import React from 'react';
import { useState } from 'react';
import SentenceCard from './SentenceCard.jsx';
import { useDrop } from 'react-dnd';

function SentenceBoard() {
  const [sentenceCards, setSentenceCards] = useState([]);

  const collection = (monitor) => {
    return {
      isOver: !!monitor.isOver()
    }
  };

  const [collectedProps, drop] = useDrop(() => ({
    accept: "InputCard",
    drop: (item) => {
      addSentenceToBoard(item);
    },
    collect: collection
  }));

  const addSentenceToBoard = (sentenceCard) => {
    this.setState({
      sentenceCards: [...sentenceCards, sentenceCard]
    })
  };

  if (sentenceCards) {
    console.log("Sentence cards getting rendered: ", sentenceCards);
    return (
      <section id="board" className="board">
        {
          sentenceCards
        }
      </section>
    )
  } else {
    console.log("Nothing here yet to render!");
    return (
      <section id="board" className="board">
        <p>Nothing here yet!</p>
      </section>
    )
  }
}

export default SentenceBoard;
