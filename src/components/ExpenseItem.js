import "./ExpenseItem.css"

const ExpenseItem = ({ date, expense, price }) => {
  return (
    <section className="expense-item">
      <h3 className="expense-item__date">{date}</h3>
      <h2 className="expense-item__title">{expense}</h2>
      <article className="expense-item__price">
        <p className="expense-item__price--text">${price}</p>
      </article>
    </section>
  )
}

export default ExpenseItem