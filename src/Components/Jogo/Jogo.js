import forca0 from "../assets/forca0.png";
import "./jogo.css"

export default function Jogo() {
    return (
        <div className="game-gallows">
            <figure>
                <img src={forca0} />
            </figure>
            <div className="game-button">
                <button>Escolher Palavra</button>
            </div>
        </div>
    );
}