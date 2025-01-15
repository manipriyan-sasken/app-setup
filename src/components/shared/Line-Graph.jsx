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
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0, 
      },
      {
        label: props.label2,
        data: props.data2,
        fill: false,
        borderColor: "rgb(192, 145, 75)",
        backgroundColor: "rgba(113, 43, 0, 0.2)",
        tension: 0, 
      },
      {
        label: props.label3,
        data: props.data3,
        fill: false,
        borderColor: "rgb(7, 37, 234)",
        backgroundColor: "rgba(113, 43, 0, 0.2)",
        tension: 0, 
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
          <div className='d-flex align-items-center gap-10'><hr className='graph-table-label' style={{backgroundColor:"rgba(75,192,192,1)"}}></hr><span>{props.label1}</span></div>
          <div className='d-flex align-items-center gap-10'><hr className='graph-table-label' style={{backgroundColor:"rgba(192, 145, 75)"}}></hr><span>{props.label2}</span></div>
          <div className='d-flex align-items-center gap-10'><hr className='graph-table-label' style={{backgroundColor:"rgba(7, 37, 234)"}}></hr><span>{props.label3}</span></div>
          </div>
          <div>
            <select className='text-color' style={{width:"70px",}}>
              <option className='text-color'>2023</option>
              <option className='text-color'>2024</option>
              <option className='text-color'>2025</option>
            </select>
          </div>
        </div>
      </div>
       <Line data={data} options={options}/>
    </div>
  )
}

export default Line_Graph
