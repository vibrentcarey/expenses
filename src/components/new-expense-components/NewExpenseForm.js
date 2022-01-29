import { useState } from "react"
import Card from "../wrapper-components/Card"
import "./NewExpenseForm.css"

const NewExpenseForm = ({ onFormSubmit }) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: ''
  })
  const [formIsValid, setFormIsValid] = useState(true)

  // Set The Values From The Form Into State
  const setUserData = (e) => {
    setExpenseData(prevExpenseData => {
      // Using A Computed Property To Dynamically Set Relevant State
      return { ...prevExpenseData, [e.target.id]: e.target.value }
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    // Check If Form Inputs Are Valid
    if (!expenseData.title || !expenseData.amount || !expenseData.date) {
      setFormIsValid(false)
      setTimeout(() => {
        setFormIsValid(true)
      }, 3000)
      return
    }

    // Reformat The Date Into Individual Parts
    const dayOfExpense = expenseData.date.slice(-2)
    const monthOfExpense = expenseData.date.slice(5, 7)
    const yearOfExpense = expenseData.date.slice(0, 4)
    // Add An ID Key To The Data
    const userExpenseData = {
      id: Math.random().toString(),
      title: expenseData.title,
      amount: expenseData.amount,
      date: new Date(yearOfExpense, parseInt(monthOfExpense) - 1, dayOfExpense)
    }
    setExpenseData({
      title: '',
      amount: '',
      date: ''
    })
    onFormSubmit(userExpenseData)
  }

  return (
    <Card className="new-expense">
      <form onSubmit={submitForm}>
        <h1>Please Enter An Expense</h1>
        <hr className="expenses__line" />
        <section className="new-expense__inputs">
          {/* Expense Title */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="title">Title</label>
            <input onChange={setUserData} className="new-expense__input--input" id="title" placeholder=" Gym Membership" value={expenseData.title} />
          </article>
          {/* Expense Amount */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="amount">Amount</label>
            <input onChange={setUserData} className="new-expense__input--input" id="amount" placeholder=" 100" type='number' pattern="\d*" min='0' max='10000' value={expenseData.amount} />
          </article>
          {/* Expense Date */}
          <article className="new-expense__input">
            <label className="new-expense__input--type" for="date">Date</label>
            <input onChange={setUserData} className="new-expense__input--input" id="date" placeholder=" dd.mm.yyyy" type='date' min="2021-10-01" max="2022-12-31" value={expenseData.date} />
          </article>
        </section>
        {!formIsValid && <p className="new-expense__error">Please Fill Out All Form Fields</p>}
        <section className="new-expense__actions">
          <button className="new-expense__actions--button">Add Expense</button>
        </section>
      </form>
    </Card>
  )
}

export default NewExpenseForm