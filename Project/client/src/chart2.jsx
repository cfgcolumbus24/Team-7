import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart2 = ({ data }) => {
  const Point = { x : 0, y : 0};
  const lineData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: [272424, 2384, 7152, 3598, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)'
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const LineChart = () => ( 
    <div>
      <h2>Line </h2>
      <Line data = {data} options = {options} />
    </div>
  )

  return <Line data={lineData} options={options} />;
};

export default Chart2;