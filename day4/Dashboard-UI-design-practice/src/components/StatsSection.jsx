import React from 'react';

function StatCard({ title, stats }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-4">
        {stats.map((stat, i) => (
          <li key={i}>{stat}</li>
        ))}
      </ul>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <StatCard
        title="Batting Stats"
        stats={[
          'Matches: 300',
          'Runs: 12000',
          'Average: 57.5',
          'Strike Rate: 93.2'
        ]}
      />
      <StatCard
        title="Bowling Stats"
        stats={[
          'Wickets: 15',
          'Best: 3/21',
          'Average: 45.2'
        ]}
      />
      <StatCard
        title="Catching Stats"
        stats={[
          'Catches: 130',
          'Run Outs: 25'
        ]}
      />
    </div>
  );
}

export default StatsSection;