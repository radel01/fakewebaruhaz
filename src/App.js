import './App.css';
import Termekek from './components/Termekek.js';
import Kosar from './components/Kosar.js';
import { KattContext } from './contexts/KosarContext';
import Public from './pages/Public';
import Urlap from './components/Urlap';
import Tablazat from './components/Tablazat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fakestore webáruház</h1>
      </header>
      <main>
        <Tablazat />
      </main>
    </div>
  );
}

export default App;
