import { useState } from "react";
import Card from "../wrapper-components/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

const Expenses = ({ expenses }) => {
  const [month, setMonth] = useState('')
  const [monthlyExpenses, setMonthlyExpenses] = useState(expenses)

  const monthSelectHandler = (monthInt,month) => {
    setMonth(month)
    // Filter Expenses By Month
    const filteredExpenses = expenses.filter(expense => {
      return expense.date.getMonth() + 1 === parseInt(monthInt)
    })
    setMonthlyExpenses(filteredExpenses)
  }
  // Map The Filtered Expenses To Expense Items
  const expenseItems = monthlyExpenses.map(({ id, title, date, amount }) => {
    return <ExpenseItem key={id} price={amount} expense={title} date={date} />
  });

  return (
    <Card className="expenses">
      <ExpenseFilter setSelectedMonth={monthSelectHandler} />
      <h1 className="expenses__title">{month} Expenses</h1>
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