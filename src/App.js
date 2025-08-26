import logo from './logo.svg';
import './App.css';

const box1_name = 'box1: variable test';

function animal_names(v){
  let res = '';
  for(let i = 0; i < v.length; i += 1){
    res += v[i];
    res += ' ';
  }
  return res;
}
const box1_animals = ['cat', 'dog', 'lion', 'bird'];

function PrintText(props){
  return <h3>text = {props.text}</h3>
}

function App() {
  return (
    <div>
      <header>
        <h1>React JSX Study</h1>
        <hr />
      </header>
      <section>
        {box1_name} <br />
        animal names: {animal_names(box1_animals)}
      </section>
      <section>
        <PrintText text="hello world" />
      </section>
    </div>

  );
}

export default App;
