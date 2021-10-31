import Card from "../wrapper-components/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

const Expenses = ({ expenses }) => {
  const expenseItems = expenses.map(({ id, expense, date, price }) => {
    return <ExpenseItem key={id} price={price} expense={expense} date={date} />
  });

  return (
    <Card className="expenses">
      TODO: Make This Month Live Update ***
      <h1 className="expenses__title">October Expenses</h1>
      <hr className="expenses__line" />
      {expenseItems}
      <section className="expenses__footer">
      TODO: Calculate Total Expenses
        <p className="expenses__total">Total Money Spent This Month: <span class="big-bold">$</span></p>
      </section>
    </Card>
  )
}

export default Expenses