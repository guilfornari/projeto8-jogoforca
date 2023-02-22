export default function Letra({ chosenLetters, buttonFunction, letter, otherEnabler }) {
    return (
        <button onClick={() => buttonFunction(letter)}
            disabled={(chosenLetters.length > 0 && !otherEnabler.includes(letter)) ? false : true}
            className={(chosenLetters.length > 0 && !otherEnabler.includes(letter)) ? "enabled-button" : undefined}>
            {letter}
        </button>
    );
}