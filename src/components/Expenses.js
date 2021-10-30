import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

const Expenses = ({ expenses }) => {
  const expenseItems = expenses.map(({ id, expense, date, price }) => {
    return <ExpenseItem key={id} price={price} expense={expense} date={date} />
  });

  return (
    <article className="expenses">
      {expenseItems}
    </article>
  )
}

export default Expenses