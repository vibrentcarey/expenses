import Card from "../wrapper-components/Card"
import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = ({ expenses }) => {
  const chartInfo = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]
  const chartBars = chartInfo.map(monthlyData => {
    return <ChartBar key={monthlyData.label} label={monthlyData.label} />
  })

  return (
    <Card className="chart">
      <h1>Expenses Chart</h1>
      <hr className="expenses__line" />
      <main className="chart__main">
        {chartBars}
      </main>
    </Card>
  )
}

export default Chart