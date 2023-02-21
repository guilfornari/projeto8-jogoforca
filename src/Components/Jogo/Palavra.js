export default function Palavra({ char, index }) {

    return (
        <span key={index}>{char}</span>
    );
}