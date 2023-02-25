export default function Palavra({ char, index, errorCounter, chosenLetters }) {

    return (
        <span data-test="wordgit " key={index}
            className={`${(!chosenLetters.includes("_")) ? "victory" : null}
        ${(errorCounter === 6) ? "defeat" : null}`}>
            {char}
        </span>
    );
}