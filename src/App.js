import logo from './logo.svg';
import './App.css';

const box1_name = 'box1: variable test';

function App() {
  return (
    <div>
      <header>
        <h1>React JSX Study</h1>
        <hr />
      </header>
      <section>
        {box1_name}
      </section>
    </div>

  );
}

export default App;
