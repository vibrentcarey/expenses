import Card from "../wrapper-components/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

const ExpenseItem = ({ date, expense, price }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <article className="expense-item__title">
        <h2 className="expense-item__title--text">{expense}</h2>
      </article>
      <article className="expense-item__price">
        <p className="expense-item__price--text">${price}</p>
      </article>
    </Card>
  )
}

export default ExpenseItem