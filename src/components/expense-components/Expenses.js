import { useState } from "react";
import Card from "../wrapper-components/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

const Expenses = ({ expenses }) => {
  const [month, setMonth] = useState('')
  const [monthDigit, setMonthDigit] = useState(0)

  // const [monthlyExpenses, setMonthlyExpenses] = useState(expenses)

  const monthSelectHandler = (monthInt, month) => {
    setMonth(month)
    setMonthDigit(parseInt(monthInt))
  }

  // Filter Expenses By Month
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getMonth() + 1 === monthDigit
  })

  // Map The Filtered Expenses To Expense Items
  const expenseItems = filteredExpenses.map(({ id, title, date, amount }) => {
    return <ExpenseItem key={id} price={amount} expense={title} date={date} />
  });

  // Sum Total Expenses
  const totalAmount = filteredExpenses.reduce(function (acc, obj) { return acc + parseInt(obj.amount); }, 0);

  return (
    <Card className="expenses">
      <ExpenseFilter setSelectedMonth={monthSelectHandler} />
      <h1 className="expenses__title">{month} Expenses</h1>
      <hr className="expenses__line" />
      {expenseItems.length === 0 ?
        <section className="expenses__no-expenses">
          <h1 className="expenses__no-expenses--text">No Expenses<br /> <a className="expenses__link" href="#title">Add Expense</a></h1>
        </section> : expenseItems}
      <section className="expenses__footer">
        <p className="expenses__total">Total Money Spent in {month}: <span class="big-bold">${totalAmount}</span></p>
      </section>
    </Card>
  )
}

export default Expenses