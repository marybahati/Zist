import * as React from "react";
import { Chart } from "react-google-charts";
 
const options = {
    title: "TRENDS",
    hAxis: { title: "Sale of Product X within the last 5 months" },
    vAxis: { title: "Sales" },
    legend: "none",
    colors: ['#FFC266'],
    backgroundColor: 'red'
  };
  const data = [
    ["Sale of Product X within the last 5 months", "Sales"],
    ['Item1', 4],
    ['Item2', 28],
    ['Item3', 32],
    ['Item4', 40]
  ];
   
  const LineGraph = () => {
    return (
      <Chart
        chartType="Line"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
        loader={<h2>Loading Chart..</h2>} 
        />
        
    );
  };
export default LineGraph;