export default function Letra({ chosenLetters, buttonFunction, letter, guessedLetters, errorCounter }) {
    return (
        <button data-test="letter" onClick={() => buttonFunction(letter)}
            disabled={(chosenLetters.length > 0 &&
                !guessedLetters.includes(letter) &&
                chosenLetters.includes("_") && !(errorCounter === 6)) ? false : true}
            className={(chosenLetters.length > 0 &&
                !guessedLetters.includes(letter) &&
                chosenLetters.includes("_") && !(errorCounter === 6)) ? "enabled-button" : undefined}>
            {letter}
        </button>
    );
}