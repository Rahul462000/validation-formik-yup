import React from 'react'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<Registration />} />
      <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </Router>
    </div>
    )
}

export default App