import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import SentenceCard from "./SentenceCard";

function nowPlusTime(seconds) {
  const d = new Date();
  d.setSeconds(d.getSeconds() + seconds);
  return d;
}

function useBoardState(time) {

  const {
    seconds,
    minutes,
    pause,
    restart,
  } = useTimer({ expiryTimestamp: nowPlusTime(time), onExpire: () => console.warn('onExpire called') });

  useEffect(() => {
    pause();
  }, []);

  const [sentenceList, setSentenceList] = useState([]);

  function reset() {
    setSentenceList([]);
    setHaveIStartedEver(true);
    setBoardState(generateBoardState(populator));
    restart(nowPlusTime(time));
  }

  function submitSentence(sentence) {
    setSentenceList([...sentenceList, sentence]
      .sort((a, b) => b.ordinal - a.ordinal));
  }

  /*
  console.log("Sentence cards from useBoardState: ", sentenceList)
  setSentenceList([<SentenceCard ordinal="1" content="hi there" />]);
  console.log("after set: ", sentenceList)
  */

  return {
    submitSentence,
    sentenceList,
    setSentenceList,
    seconds,
    minutes
  };
};

export default useBoardState;