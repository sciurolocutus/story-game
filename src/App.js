import React from 'react';
import SentenceBoard from './SentenceBoard.jsx';
import SentenceCard from './SentenceBoard.jsx';
import InputCard from './InputCard.jsx';
import './App.css';
import useBoardState from './useBoardState.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  const {
    submitSentence,
    sentenceList,
    setSentenceList,
    seconds,
    minutes
  } = useBoardState(5);

  console.log("Sentence cards from app: ", sentenceList);

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <header className="App-header">
        <p>Story Time</p>
      </header>

      <SentenceBoard
        sentenceCards={[<SentenceCard ordinal="1" content="hi there" />]} />
      <section className="inputArea">
        <InputCard />
      </section>
    </div>
    </DndProvider>
  );
}

export default App;
