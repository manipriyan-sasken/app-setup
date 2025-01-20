import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Line_Graph = (props) => {
  const data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label:props.label1,
        data: props.data1,
        borderColor: "rgba(249, 75, 101, 1)",
        pointRadius: 0, // Removes circle markers
      pointHoverRadius: 0, // Disables hover effect on points
      borderWidth: 2,
      },
      {
        label: props.label2,
        data: props.data2,
        borderColor: "rgba(205, 133, 63, 1)",
        pointRadius: 0, // Removes circle markers
        pointHoverRadius: 0, // Disables hover effect on points
        borderWidth: 2,
      },
      {
        label: props.label3,
        data: props.data3,
        borderColor: "rgba(111, 111, 112, 1)",
        pointRadius: 0, // Removes circle markers
        pointHoverRadius: 0, // Disables hover effect on points
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="p-2 graph-table" >
      <div className='graph-table-title'>
        <div># DTC TRACKER</div>
        <div className='d-flex gap-20 align-items-center'>
          <div className='d-flex gap-10'>
          <div className='d-flex align-items-center gap-10'><hr className='graph-table-label' style={{backgroundColor:"rgba(249, 75, 101, 1)"}}></hr><span>{props.label1}</span></div>
          <div className='d-flex align-items-center gap-10'><hr className='graph-table-label' style={{backgroundColor:"rgba(205, 133, 63, 1)"}}></hr><span>{props.label2}</span></div>
          <div className='d-flex align-items-center gap-10'><hr className='graph-table-label' style={{backgroundColor:"rgba(111, 111, 112, 1)"}}></hr><span>{props.label3}</span></div>
          </div>
          <div>
          <select
              style={{ width: "12rem", backgroundColor: "black", padding: "0.5rem", color: "red" }}
              value={props.selectedOpt} 
              onChange={(e) => props.handleSelectChange(e.target.value)} 
          >
            <option value="graphs">View by Records</option>
            <option value="record">View By Charts</option>
          </select>

            
          </div>
        </div>
      </div>
       <Line data={data} options={options} style={{height:"5rem"}}/>
    </div>
  )
}

export default Line_Graph
