import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 1, expense: 'Phone Bill', price: 50, date: new Date('2021', '02', '10') },
    { id: 2, expense: 'Car Insurance', price: 150, date: new Date('2021', '02', '11') },
    { id: 3, expense: 'Haircut', price: 25, date: new Date('2021', '02', '12') },
  ];

  return (
    <div className="App">
      <header className="header">
      </header>
      <main className="main">
        <Expenses expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
