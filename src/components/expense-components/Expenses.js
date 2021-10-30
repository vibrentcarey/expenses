import Card from "../wrapper-components/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

const Expenses = ({ expenses }) => {
  const expenseItems = expenses.map(({ id, expense, date, price }) => {
    return <ExpenseItem key={id} price={price} expense={expense} date={date} />
  });

  return (
    <Card className="expenses">
      {expenseItems}
    </Card>
  )
}

export default Expenses