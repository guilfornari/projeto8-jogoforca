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
    let chosenWord = palavras[Math.floor(Math.random() * palavras.length)];
    let letterList = Array.from(chosenWord);
    console.log(letterList);
    for (let i = 0; i < letterList.length; i++) {
      chosenLetters.push("_");
    }
    setChosenLetters([...chosenLetters]);
    setWordLetters([...letterList]);
  }

  function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      console.log([...guessedLetters])
      setGuessedLetters([...guessedLetters])
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
    }
  }

  return (
    <div className="game-screen">
      <Jogo buttonFunction={chooseWord}
        word={chosenLetters}
        buttonEnabler={chosenLetters}
        errorCounter={errorCounter} />
      <Letras buttonFunction={guessLetter} buttonEnabler={chosenLetters} otherEnabler={guessedLetters} />
    </div>
  );
}

export default App;
