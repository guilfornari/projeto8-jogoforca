import "./css/reset.css";
import "./css/styles.css";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";
import palavras from "../palavras";


function App() {
  return (
    <div className="game-screen">
      <Jogo />
      <Letras />
    </div>
  );
}

export default App;
