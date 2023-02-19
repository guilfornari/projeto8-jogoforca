export default function Letra(props) {
    return (
        <button onClick={() => alert(props.letter)}
            disabled={true}
            className="enabled-button">
            {props.letter}
        </button>
    );
}