import "./ExpenseDate.css"

const ExpenseDate = ({ date }) => {
  // Convert Date Object Into Human Readable String
  const month = date.toLocaleString('en-US', { month: "long" })
  const day = date.toLocaleString('en-US', { day: "2-digit" })
  const year = date.getFullYear()
  return (
    <section className="expense-date">
      <h3 className="expense-date__month">{month}</h3>
      <h2 className="expense-date__day">{day}</h2>
      <p className="expense-date__year">{year}</p>
    </section>
  )
}

export default ExpenseDate