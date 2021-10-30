import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

const ExpenseItem = ({ date, expense, price }) => {
  return (
    <section className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__title">{expense}</h2>
      <article className="expense-item__price">
        <p className="expense-item__price--text">${price}</p>
      </article>
    </section>
  )
}

export default ExpenseItem