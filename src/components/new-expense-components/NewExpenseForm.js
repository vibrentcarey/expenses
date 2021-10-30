import Card from "../wrapper-components/Card"
import "./NewExpenseForm.css"

const NewExpenseForm = () => {
  return (
    <Card className="new-expense">
      <form>
        <section className="new-expense__inputs">
          {/* Expense Title */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="expense-title">Title</label>
            <input className="new-expense__input--input" id="expense-title" placeholder=" Gym Membership" />
          </article>
          {/* Expense Amount */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="expense-amount">Amount</label>
            <input className="new-expense__input--input" id="expense-amount" placeholder=" 100" />
          </article>
          {/* Expense Date */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="expense-date">Date</label>
            <input className="new-expense__input--input" id="expense-date" placeholder=" dd.mm.yyyy" type='date' min="2021-10-01" max="2022-12-31" />
          </article>
        </section>
        <section className="new-expense__actions">
          <button className="new-expense__actions--button">Add Expense</button>
        </section>
      </form>
    </Card>
  )
}

export default NewExpenseForm