import { useState } from 'react';
import './App.css';
import Chart from './components/chart-components/Chart';
import Expenses from './components/expense-components/Expenses';
import NewExpenseForm from './components/new-expense-components/NewExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([])

  const formDataHandler = (userExpensesData) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, userExpensesData]
    })
  }

  const today = new Date()

  const yearlyExpenses = expenses.filter(expense => {
    return expense.date.getFullYear() === today.getFullYear()
  })

  console.log(yearlyExpenses)

  return (
    <div className="App">
      <header className="app__header">
        <h1>Hiyō</h1>
      </header>
      <main className="main">
        <NewExpenseForm onFormSubmit={formDataHandler} />
        <Chart expenses={yearlyExpenses} />
        <Expenses expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
