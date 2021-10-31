import './App.css';
import Expenses from './components/expense-components/Expenses';
import NewExpenseForm from './components/new-expense-components/NewExpenseForm';

function App() {
  const expenses = [
    { id: 1, expense: 'Phone Bill', price: 50, date: new Date('2021', '02', '10') },
    { id: 2, expense: 'Car Insurance', price: 150, date: new Date('2021', '02', '11') },
    { id: 3, expense: 'Haircut', price: 25, date: new Date('2021', '02', '12') },
  ];

  return (
    <div className="App">
      <header className="app__header">
      <h1>Hiyō</h1>
      </header>
      <main className="main">
        <NewExpenseForm />
        <Expenses expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
