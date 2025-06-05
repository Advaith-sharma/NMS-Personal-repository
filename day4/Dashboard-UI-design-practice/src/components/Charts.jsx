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

function Charts() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Runs vs Year</h3>
        <Bar data={runsData} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Ranking Over Years</h3>
        <Line data={rankingData} />
      </div>
    </div>
  );
}

export default Charts;