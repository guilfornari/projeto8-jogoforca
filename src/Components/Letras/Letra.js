export default function Letra({ letter }) {
    return (
        <button onClick={() => alert(letter)}
            disabled={true}
            className="enabled-button">
            {letter}
        </button>
    );
}