import forca0 from "../assets/forca0.png";
import "./jogo.css";
import Palavra from "./Palavra";


export default function Jogo({ buttonFunction, word }) {

    return (
        <div className="game-gallows">
            <figure>
                <img src={forca0} alt={forca0} />
            </figure>
            <div>
                <div className="game-button">
                    <button onClick={buttonFunction}>Escolher Palavra</button>
                </div>
                <Palavra word={word} />
            </div>
        </div>
    );
}