import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const today = new Date()
  return (
    <div className="App">
      <header className="header">
      </header>
      <ExpenseItem price={100} expense="Phone Bill" date={today.getDate()} />
    </div>
  );
}

export default App;
