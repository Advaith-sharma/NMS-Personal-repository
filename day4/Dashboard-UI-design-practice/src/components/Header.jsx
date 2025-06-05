import React from 'react'

export const Header = () => {
  return (
    <div className="flex justify-around items-center mb-4">
      <h1 className="text-8xl font-mono font-bold">Player Performance Dashboard</h1>
      <input
        type="text"
        placeholder="Search player..."
        className="text-3xl border p-6 pl-12 rounded-[2vw] w-128 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
