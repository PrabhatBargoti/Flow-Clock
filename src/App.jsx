import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clock from './pages/Clock'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Clock />} />
      </Routes>
    </div>
  )
}

export default App
