import './App.css';
import List from './components/List';

const type1 = [
  {
    name: 'Anna',
    year: 10,
    class: 'A',
  },
  {
    name: 'Mark',
    year: 10,
    class: 'M',
  },
];

const type2 = [
  {
    title: 'Javascript Info',
    category: 'book',
    rating: 10,
  },
  {
    title: 'Fantasy',
    category: 'movie',
    rating: 5,
  },
];

const type3 = [
  {
    winner: 'Amy',
    rank: 1,
  },
  {
    winner: 'Bob',
    rank: 2,
  },
  {
    winner: 'Jack',
    rank: 3,
  },
];

function App() {
  return (
    <div className="App">
      <List data={type1} />
      <List data={type2} />
      <List data={type3} />
    </div>
  );
}

export default App;
