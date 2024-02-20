import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import OnBoard from './pages/OnBoard'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/onboard' element={<OnBoard />} />
    </Routes>
  )
}

export default App