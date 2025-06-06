// import React from 'react';

// function StatCard({ title, stats }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow w-full">
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <ul className="list-disc pl-4">
//         {stats.map((stat, i) => (
//           <li key={i}>{stat}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function StatsSection() {
//   return (
//     <div className="grid md:grid-cols-3 gap-4">
//       <StatCard
//         title="Batting Stats"
//         stats={[
//           'Matches: 300',
//           'Runs: 12000',
//           'Average: 57.5',
//           'Strike Rate: 93.2'
//         ]}
//       />
//       <StatCard
//         title="Bowling Stats"
//         stats={[
//           'Wickets: 15',
//           'Best: 3/21',
//           'Average: 45.2'
//         ]}
//       />
//       <StatCard
//         title="Catching Stats"
//         stats={[
//           'Catches: 130',
//           'Run Outs: 25'
//         ]}
//       />
//     </div>
//   );
// }

// export default StatsSection;

// components/StatsSection.jsx
import React, { useState } from 'react';

function StatsSection() {
  const [selectedFormat, setSelectedFormat] = useState('All Formats');

  const formatOptions = ['All Formats', 'Test', 'ODI', 'T20'];

  return (
    <div className="w-full mt-10">
      {/* Format Filter */}
      <div className="flex gap-4 justify-center mb-6">
        {formatOptions.map((format) => (
          <button
            key={format}
            onClick={() => setSelectedFormat(format)}
            className={`px-4 py-2 rounded-4xl font-bold text-2xl hover:cursor-pointer hover:scale-105 hover:shadow-md ${
              selectedFormat === format
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {format}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Batting */}
        <div className="bg-linear-to-r from-cyan-300 to-cyan-100 p-8 rounded-4xl shadow-xl text-lg">
          <h3 className="text-5xl font-bold mb-6">🏏 Batting Statistics</h3>
          <div className="text-3xl grid grid-cols-2 gap-x-6 gap-y-3">
            <p>Matches: 254</p>
            <p>Innings: 432</p>
            <p>Runs: 15,921</p>
            <p>Average: 50.4</p>
            <p>Strike Rate: 92.84</p>
            <p>Highest Score: 183</p>
            <p>100s: 72</p>
            <p>50s: 106</p>
          </div>
        </div>

        {/* Bowling */}
        <div className="bg-linear-to-r from-sky-100 to-yellow-200 p-8 rounded-4xl shadow-xl text-lg">
          <h3 className="text-5xl font-bold mb-6">🎯 Bowling Statistics</h3>
          <div className="text-3xl grid grid-cols-2 gap-x-6 gap-y-3">
            <p>Wickets: 8</p>
            <p>Average: 65.12</p>
            <p>Economy: 6.15</p>
            <p>Best Figures: 1/15</p>
            <p>5W Hauls: 0</p>
            <p>10W Matches: 0</p>
            <p>Overs Bowled: 84.2</p>
            <p>Runs Conceded: 521</p>
          </div>
        </div>

        {/* Fielding */}
        <div className="bg-linear-to-r from-cyan-50 to-yellow-200 p-8 rounded-4xl shadow-xl text-lg">
          <h3 className="text-5xl font-bold mb-6">🧤 Fielding Statistics</h3>
          <div className="text-3xl grid grid-cols-2 gap-x-6 gap-y-3">
            <p>Catches: 148</p>
            <p>Run Outs: 32</p>
            <p>Stumpings: 0</p>
            <p>Fielding %: 94.2</p>
            <p>Direct Hits: 27</p>
            <p>Matches Fielded: 300</p>
            <p>Misfields: 5</p>
            <p>Drop Rate: 2.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
