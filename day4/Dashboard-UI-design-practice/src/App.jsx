import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { PersonalInfo } from './components/PersonalInfo'
import StatsSection from './components/StatsSection'
import Charts from './components/Charts'
import Awards from './components/Awards'

function App() {

  return (
    <div className="p-8 max-w-1/1 mx-auto">
      <Header />
      <div className="space-y-4">
        <PersonalInfo />
        <StatsSection />
        <Charts />
        <Awards />
      </div>
    </div>
  )
}

export default App
