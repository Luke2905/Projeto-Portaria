import logo from './logo.svg';
import './App.css';
import Conteudo from './views/conteudo'
import MenuNav from './components/navBar';

function App() {
  return (
    <div className="layout">
      <MenuNav />
    <header>
      <h1>Bem-vindo ao Layout Dinâmico</h1>
    </header>
    <main>
      <Conteudo />
    </main>
    <footer>
      <p>© 2025 - Todos os Direitos Reservados</p>
    </footer>
  </div>

  );
}

export default App;
