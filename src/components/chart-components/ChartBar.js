import "./ChartBar.css"

const ChartBar = ({ label, height, maxHeight }) => {
  let barHeight = "0%"
  // Calculate The Fill Percentage
  if (maxHeight > 0 ) {
    barHeight = (Math.round((height / maxHeight) * 100)) + "%"
  }
  console.log(barHeight)
  return (
    <div className="chart-bar">
      <h2>{label}</h2>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight, maxHeight: '100%' }}></div>
      </div>
    </div>
  )
}

export default ChartBar