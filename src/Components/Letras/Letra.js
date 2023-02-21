export default function Letra({ buttonEnabler, buttonFunction, letter, otherEnabler }) {
    return (
        <button onClick={() => buttonFunction(letter)}
            disabled={(buttonEnabler.length > 0 && !otherEnabler.includes(letter)) ? false : true}
            className={(buttonEnabler.length > 0 && !otherEnabler.includes(letter)) ? "enabled-button" : undefined}>
            {letter}
        </button>
    );
}