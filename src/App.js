import { useState } from 'react';
import './App.css';
import Expenses from './components/expense-components/Expenses';
import NewExpenseForm from './components/new-expense-components/NewExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([])

  const formDataHandler = (userExpensesData) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, userExpensesData]
    })
  }

  return (
    <div className="App">
      <header className="app__header">
        <h1>Hiyō</h1>
      </header>
      <main className="main">
        <NewExpenseForm onFormSubmit={formDataHandler} />
        <Expenses expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
