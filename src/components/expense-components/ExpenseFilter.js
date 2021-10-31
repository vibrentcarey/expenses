import { useEffect, useState } from "react";
import "./ExpenseFilter.css"

const ExpenseFilter = ({ filterExpenses, setSelectedMonth }) => {
  const [month, setMonth] = useState("January")

  const selectMonth = (e) => {
    setMonth(e.target.value)
  }

  const convertMonthToInt = () => {
    switch (month) {
      case 'January':
        return '01';
      case 'February':
        return '02';
      case 'March':
        return '03';
      case 'April':
        return '04';
      case 'May':
        return '05';
      case 'June':
        return '06';
      case 'July':
        return '07';
      case 'August':
        return '08';
      case 'September':
        return '09';
      case 'October':
        return '10';
      case 'November':
        return '11';
      case 'December':
        return '12';
      default:
        return '01';
    }
  }

  useEffect(() => {
    setSelectedMonth(convertMonthToInt(), month)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, filterExpenses])

  return (
    <section className="expense-filter">
      <label htmlFor="months">Filter By Month: </label>
      <select name="months" id="months" onChange={selectMonth}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </section>
  )
}

export default ExpenseFilter