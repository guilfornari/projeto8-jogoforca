import './css/reset.css';
import './css/styles.css';
import Jogo from './Jogo/Jogo';
import Letras from './Letras/Letras';
import palavras from '../palavras';

function App() {
  return (
    <>
      <Jogo />
      <Letras />
    </>
  );
}

export default App;
