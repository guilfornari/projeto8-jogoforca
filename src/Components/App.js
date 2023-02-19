import "./css/reset.css";
import "./css/styles.css";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";
import palavras from "../palavras";
import React from "react";

function App() {
  const [chosenLetters, setChosenLetters] = React.useState([])

  function chooseWord() {
    let chosenWord = palavras[Math.floor(Math.random() * palavras.length)];
    setChosenLetters(Array.from(chosenWord));
  }


  return (
    <div className="game-screen">
      <Jogo buttonFunction={chooseWord} word={chosenLetters} />
      <Letras />
    </div>
  );
}

export default App;
