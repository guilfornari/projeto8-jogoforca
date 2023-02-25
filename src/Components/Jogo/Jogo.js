import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import "./jogo.css";
import Palavra from "./Palavra";


export default function Jogo({ buttonFunction, chosenLetters, letter, errorCounter, wordLetters }) {
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    const deadByHanging = 6;
    return (
        <div className="game-gallows">
            <figure>
                <img data-test="game-image" src={images[errorCounter]} alt={images[errorCounter]} />
            </figure>
            <div>
                <div className="game-button">
                    <button data-test="choose-word" className={(chosenLetters.length === 0 || errorCounter === deadByHanging || !chosenLetters.includes("_")) ? undefined : "game-started-button"}
                        onClick={buttonFunction}
                        disabled={(chosenLetters.length === 0 || errorCounter === deadByHanging || !chosenLetters.includes("_")) ? false : true}>Escolher Palavra</button>
                </div>
                <div data-test="word" className="chosen-word">
                    {chosenLetters.map((char, index) => (<Palavra
                        key={index}
                        char={char}
                        letter={letter}
                        errorCounter={errorCounter}
                        wordLetters={wordLetters}
                        chosenLetters={chosenLetters} />))
                    }
                </div>
            </div>
        </div>
    );
}