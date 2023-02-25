export default function Letra({ chosenLetters, buttonFunction, letter, guessedLetters, errorCounter }) {
    const deadByHanging = 6;
    return (
        <button data-test="letter" onClick={() => buttonFunction(letter)}
            disabled={(chosenLetters.length > 0 &&
                !guessedLetters.includes(letter) &&
                chosenLetters.includes("_") && (errorCounter !== deadByHanging)) ? false : true}
            className={(chosenLetters.length > 0 &&
                !guessedLetters.includes(letter) &&
                chosenLetters.includes("_") && (errorCounter !== deadByHanging)) ? "enabled-button" : undefined}>
            {letter}
        </button>
    );
}