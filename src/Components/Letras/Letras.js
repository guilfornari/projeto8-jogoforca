import Letra from "./Letra";
import "./letras.css";


export default function Letras({ buttonEnabler }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <ul>
            {alfabeto.map((letter) => <Letra key={letter} letter={letter} buttonEnabler={buttonEnabler} />)}
        </ul>
    );
}