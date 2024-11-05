import './App.css';
import Termekek from './components/Termekek.js';
import Kosar from './components/Kosar.js';
import { KattContext } from './contexts/KosarContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fakestore webáruház</h1>
      </header>
      <main className='row'>
        <aside className='col-lg-3'>
          <h3>Kosár</h3>
          <Kosar/>
        </aside>
        <article className='col-lg-9'>
          <h3>Termékek</h3>
          <Termekek/>
        </article>
      </main>
    </div>
  );
}

export default App;
