import logo from './logo.svg';
import './App.css';
import Conteudo from './views/conteudo'
import MenuNav from './components/navBar';
import Botao from './components/button'

function App() {
  return (
    <div className="layout">
      <MenuNav />
    <header>
      <h1>Projeto Portaria</h1>
      <div class="ActionButton">
      <input type="button"/>
      </div>
    </header>
    <main>
      <Conteudo />
    </main>
    <footer>
      <p>© 2025 - Todos os Direitos Reservados Amino</p>
    </footer>
  </div>

  );
}

export default App;
