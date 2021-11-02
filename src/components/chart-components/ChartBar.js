import "./ChartBar.css"

const ChartBar = ({ label }) => {

  return (
    <div className="chart-bar">
      <h2>{label}</h2>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>

      </div>
    </div>
  )
}

export default ChartBar