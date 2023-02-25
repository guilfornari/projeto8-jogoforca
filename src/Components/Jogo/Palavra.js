export default function Palavra({ char, index, errorCounter, chosenLetters }) {
    const deadByHanging = 6;
    return (
        <span key={index}
            className={`${(!chosenLetters.includes("_")) ? "victory" : null}
        ${(errorCounter === deadByHanging) ? "defeat" : null}`}>
            {char}
        </span>
    );
}