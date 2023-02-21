export default function Letra({ buttonEnabler, buttonFunction, letter }) {
    return (
        <button onClick={() => buttonFunction(letter)}
            disabled={(buttonEnabler.length > 0) ? false : true}
            className={(buttonEnabler.length > 0) ? "enabled-button" : undefined}>
            {letter}
        </button>
    );
}