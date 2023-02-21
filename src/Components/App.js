import "./css/reset.css";
import "./css/styles.css";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";
import palavras from "../palavras";
import React from "react";

function App() {
  const [wordLetters, setWordLetters] = React.useState([]);
  const [chosenLetters, setChosenLetters] = React.useState([])


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
    let list = [...chosenLetters]
    console.log(list);
    if (wordLetters.includes(letter)) {
      for (let i = 0; i < wordLetters.length; i++) {
        if (letter === wordLetters[i]) {
          list[i] = letter;
        }
      }
      console.log(list);
      setChosenLetters([...list]);
    }
  }

  return (
    <div className="game-screen">
      <Jogo buttonFunction={chooseWord}
        word={chosenLetters}
        buttonEnabler={chosenLetters} />
      <Letras buttonFunction={guessLetter} buttonEnabler={chosenLetters} />
    </div>
  );
}

export default App;
