import forca0 from "../assets/forca0.png";
import "./jogo.css";
import Palavra from "./Palavra";


export default function Jogo({ buttonFunction, word, buttonEnabler, containsLetter, letter }) {

    return (
        <div className="game-gallows">
            <figure>
                <img src={forca0} alt={forca0} />
            </figure>
            <div>
                <div className="game-button">
                    <button className={(buttonEnabler.length > 0) ? "game-started-button" : undefined}
                        onClick={buttonFunction}
                        disabled={(buttonEnabler.length === 0) ? false : true}>Escolher Palavra</button>
                </div>
                <div className="chosen-word">
                    {word.map((char, index) => (<Palavra key={index} char={char} containsLetter={containsLetter} letter={letter} />))
                    }
                </div>
            </div>
        </div>
    );
}