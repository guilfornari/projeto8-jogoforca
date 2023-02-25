import "./css/reset.css";
import "./css/styles.css";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";
import palavras from "../palavras";
import React from "react";

function App() {
  const [wordLetters, setWordLetters] = React.useState([]);
  const [chosenLetters, setChosenLetters] = React.useState([]);
  const [errorCounter, setErrorCounter] = React.useState(0);
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  function chooseWord() {
    startGame();
    const chosenWord = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(chosenWord);
    const letterList = Array.from(chosenWord);
    for (let i = 0; i < letterList.length; i++) {
      chosenLetters.push("_");
    }
    setChosenLetters([...chosenLetters]);
    setWordLetters([...letterList]);

  }

  function startGame() {
    chosenLetters.length = 0;
    wordLetters.length = 0;
    setChosenLetters([]);
    setErrorCounter(0);
    setGuessedLetters([]);
    setWordLetters([]);
  }

  function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      setGuessedLetters([...guessedLetters]);
    }
    if (wordLetters.includes(letter)) {
      for (let i = 0; i < wordLetters.length; i++) {
        if (letter === wordLetters[i]) {
          chosenLetters[i] = letter;
        }
      }
      setChosenLetters([...chosenLetters]);
    } else {
      setErrorCounter(errorCounter + 1);
      const deadByHanging = 6;
      if (errorCounter + 1 === deadByHanging) {
        setChosenLetters([...wordLetters]);
      }

    }
  }

  return (
    <div className="game-screen">
      <Jogo buttonFunction={chooseWord}
        chosenLetters={chosenLetters}
        errorCounter={errorCounter}
        wordLetters={wordLetters} />
      <Letras buttonFunction={guessLetter}
        chosenLetters={chosenLetters}
        guessedLetters={guessedLetters}
        errorCounter={errorCounter} />
    </div>
  );
}

export default App;
