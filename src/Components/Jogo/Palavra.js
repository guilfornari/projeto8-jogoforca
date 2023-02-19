export default function Palavra({ word }) {
    return (
        <div className="chosen-word">
            {word.map((letter, index) => <span key={index}>{letter}</span>)}
        </div>
    );
}