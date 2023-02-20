export default function Letra({ letter, buttonEnabler }) {
    return (
        <button onClick={() => alert(letter)}
            disabled={(buttonEnabler.length > 0) ? false : true}
            className="enabled-button">
            {letter}
        </button>
    );
}