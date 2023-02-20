export default function Palavra({ word }) {
    return (
        <div className="chosen-word">
            {word.map((letter, index) => <span key={index}>{(false) ? letter : "_"}</span>)}
        </div>
    );
}