import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import PersonalInfo from './components/PersonalInfo'
import StatsSection from './components/StatsSection'
import Charts from './components/Charts'
import Awards from './components/Awards'

function App() {

  return (
    <div className="p-16 max-w-9/10 mx-auto">
      <Header />
      <div className="mt-8 space-y-8">
        <PersonalInfo />
        <StatsSection />
        <Charts />
        <Awards />
      </div>
    </div>
  )
}

export default App;
