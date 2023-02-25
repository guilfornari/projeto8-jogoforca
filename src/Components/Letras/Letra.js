export default function Letra({ chosenLetters, buttonFunction, letter, guessedLetters, errorCounter }) {
    const deadByHanging = 6;
    function toggleDisable(chosenLetters, guessedLetters, errorCounter) {
        if (chosenLetters.length > 0 &&
            !guessedLetters.includes(letter) &&
            chosenLetters.includes("_") &&
            errorCounter !== deadByHanging) {
            return true;
        } else { return false };
    }
    return (
        <button data-test="letter" onClick={() => buttonFunction(letter)}
            disabled={(toggleDisable) ? false : true}
            className={(toggleDisable) ? "enabled-button" : undefined}>
            {letter}
        </button>
    );
}