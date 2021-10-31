import { useState } from "react"
import Card from "../wrapper-components/Card"
import "./NewExpenseForm.css"

const NewExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const setUserData = (e) => {
    setExpenseData(prevExpenseData => {
      return { ...prevExpenseData, [e.target.id]: e.target.value }
    })
  }

  const submitForm = (e) => {
    e.preventDefault()

    const userExpenseData = {
      title: expenseData.title,
      amount: expenseData.amount,
      date: expenseData.date
    }

    console.log(userExpenseData)
  }

  return (
    <Card className="new-expense">
      <form onSubmit={submitForm}>
        <h1>Please Enter An Expense Below</h1>
        <hr className="expenses__line" />
        <section className="new-expense__inputs">
          {/* Expense Title */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="title">Title</label>
            <input onChange={setUserData} className="new-expense__input--input" id="title" placeholder=" Gym Membership" />
          </article>
          {/* Expense Amount */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="amount">Amount</label>
            <input onChange={setUserData} className="new-expense__input--input" id="amount" placeholder=" 100" />
          </article>
          {/* Expense Date */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="date">Date</label>
            <input onChange={setUserData} className="new-expense__input--input" id="date" placeholder=" dd.mm.yyyy" type='date' min="2021-10-01" max="2022-12-31" />
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