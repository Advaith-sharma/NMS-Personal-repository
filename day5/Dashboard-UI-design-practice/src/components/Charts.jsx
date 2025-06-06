import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Tooltip,
  Legend
);

const runsData = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Runs Scored',
      data: [973, 1200, 890, 1045, 430, 800, 670],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      fill: true,
    },
  ],
};

const rankingData = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'ICC Ranking',
      data: [2, 1, 1, 1, 2, 3, 4],
      borderColor: 'rgba(234, 88, 12, 1)',
      backgroundColor: 'rgba(234, 88, 12, 0.3)',
      tension: 0.4,
    },
  ],
};

// function Charts() {
//   return (
//     <div className="grid md:grid-cols-2 gap-4">
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-5xl font-bold mb-2 ml-10">Runs vs Year</h3>
//         <Bar data={runsData} />
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-5xl font-bold mb-2 ml-10">Ranking Over Years</h3>
//         <Line data={rankingData} />
//       </div>
//     </div>
//   );
// }
function Charts() {
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 18, // Size for legend labels
            weight: 'bold',
          },
        },
      },
      tooltip: {
        titleFont: { size: 18, weight: 'bold' },
        bodyFont: { size: 16 },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
            weight: 'bold',
          },
        },
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 19,
            weight: 'bold',
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 18,
            weight: 'bold',
          },
        },
        title: {
          display: true,
          text: 'Runs / Ranking',
          font: {
            size: 19,
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-linear-to-r from-cyan-100 to-yellow-100 p-4 rounded-4xl shadow">
        <h3 className="text-5xl font-bold mb-2 ml-10">Runs vs Year</h3>
        <Bar data={runsData} options={chartOptions} />
      </div>
      <div className="bg-linear-to-r from-cyan-100 to-yellow-100 p-4 rounded-4xl shadow">
        <h3 className="text-5xl font-bold mb-2 ml-10">Ranking Over Years</h3>
        <Line data={rankingData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Charts;