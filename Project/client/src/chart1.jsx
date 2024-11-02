import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const Chart1 = ({ data }) => {
  // Data for the bar chart
  const barData = {
    labels: data.labels, 
    datasets: [
      {
        label: 'Occupation (%)',
        data: data.values, 
        backgroundColor: 'rgba(75,192,192,0.4)', 
        borderColor: 'rgba(75,192,192,1)', 
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Return the Bar component with data and options
  return <Bar data={barData} options={options} />;
};

export default Chart1;