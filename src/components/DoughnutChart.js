import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart( {data, options} ) {

  return (
    <div style={{width:'600px', height:'600px'}}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}
