import Letra from "./Letra";
import "./letras.css";


export default function Letras({ chosenLetters, buttonFunction, guessedLetters, errorCounter }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <ul>
            {alfabeto.map((character) => <Letra
                key={character}
                letter={character}
                chosenLetters={chosenLetters}
                buttonFunction={buttonFunction}
                guessedLetters={guessedLetters}
                errorCounter={errorCounter} />)}
        </ul>
    );
}